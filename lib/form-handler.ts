import "server-only"
import { NextResponse } from "next/server"
import type { z } from "zod"
import { fieldErrors } from "./validation"
import { clientIp, rateLimit, sameOrigin } from "./rate-limit"
import { emailConfig, sendEmail } from "./email"

type Built = {
  replyTo: string
  visitorEmail: string
  admin: { subject: string; html: string; text: string }
  visitor: { subject: string; html: string; text: string }
}

/**
 * Shared pipeline for the public forms:
 * origin check → rate limit → size limit → validation → honeypot → email.
 * The request succeeds when the notification reaches the inbox; the visitor
 * confirmation is best-effort and never fails the request.
 */
export async function handleForm<S extends z.ZodType>(
  req: Request,
  opts: { name: string; schema: S; build: (data: z.infer<S>) => Built },
) {
  if (!sameOrigin(req)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 })
  }

  const limit = rateLimit(`${opts.name}:${clientIp(req)}`, 5, 10 * 60 * 1000)
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a few minutes." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    )
  }

  const raw = await req.text()
  if (raw.length > 20_000) {
    return NextResponse.json({ error: "Submission is too large." }, { status: 413 })
  }

  let json: unknown
  try {
    json = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  const parsed = opts.schema.safeParse(json)
  if (!parsed.success) {
    const errors = fieldErrors(parsed.error)
    // Honeypot tripped: pretend success so bots learn nothing.
    if (errors.website) return NextResponse.json({ ok: true })
    return NextResponse.json({ error: "Please check the highlighted fields.", fields: errors }, { status: 422 })
  }

  const cfg = emailConfig()
  if (!cfg.configured) {
    console.error(`[${opts.name}] GMAIL_USER / GMAIL_APP_PASSWORD are not configured`)
    return NextResponse.json(
      { error: "The form is temporarily unavailable. Please try again later." },
      { status: 503 },
    )
  }

  const built = opts.build(parsed.data)

  const adminResult = await sendEmail({ to: cfg.inbox, replyTo: built.replyTo, ...built.admin })
  if (!adminResult.ok) {
    console.error(`[${opts.name}] notification failed:`, adminResult.error)
    return NextResponse.json(
      { error: "Your message couldn't be sent right now. Please try again in a moment." },
      { status: 502 },
    )
  }

  let confirmationSent = false
  if (cfg.canEmailVisitors) {
    const visitorResult = await sendEmail({ to: built.visitorEmail, replyTo: cfg.inbox, ...built.visitor })
    confirmationSent = visitorResult.ok
    if (!visitorResult.ok) console.warn(`[${opts.name}] confirmation failed:`, visitorResult.error)
  }

  return NextResponse.json({ ok: true, confirmationSent })
}
