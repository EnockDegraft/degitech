import "server-only"
import nodemailer, { type Transporter } from "nodemailer"
import { site } from "./site"

/**
 * Gmail SMTP settings. GMAIL_APP_PASSWORD must be a 16-character Google
 * "App password" (requires 2-Step Verification), not the account password.
 */
export function emailConfig() {
  const user = process.env.GMAIL_USER?.trim() || ""
  const pass = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "") // Google shows it in groups of 4
  const senderName = process.env.EMAIL_FROM_NAME?.trim() || site.name
  return {
    user,
    pass,
    configured: Boolean(user && pass),
    inbox: process.env.CONTACT_INBOX?.trim() || user || "enocksarpong64@gmail.com",
    // Gmail rewrites the From address to the authenticated account, so always send as it.
    from: { name: senderName, address: user },
    /** Gmail can deliver to any address, so visitors always get a confirmation. */
    canEmailVisitors: true,
  }
}

/** Escapes user input before it is placed inside email HTML. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/** Strips characters that could break an email header (e.g. the subject). */
export function headerSafe(value: string, max = 80): string {
  return value.replace(/[\r\n\t]+/g, " ").trim().slice(0, max)
}

type SendArgs = { to: string; subject: string; html: string; text: string; replyTo?: string }

// Reused across requests while a serverless instance stays warm.
let transporter: Transporter | null = null
let transporterKey = ""

function getTransporter(user: string, pass: string): Transporter {
  const key = `${user}:${pass}`
  if (!transporter || transporterKey !== key) {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    })
    transporterKey = key
  }
  return transporter
}

export async function sendEmail({ to, subject, html, text, replyTo }: SendArgs): Promise<{ ok: boolean; error?: string }> {
  const { user, pass, from, configured } = emailConfig()
  if (!configured) return { ok: false, error: "GMAIL_USER / GMAIL_APP_PASSWORD are not set" }

  try {
    await getTransporter(user, pass).sendMail({ from, to, subject, html, text, ...(replyTo ? { replyTo } : {}) })
    return { ok: true }
  } catch (err) {
    transporter = null // force a fresh connection next time
    return { ok: false, error: err instanceof Error ? err.message : "Unknown email error" }
  }
}

/* ------------------------------------------------------------------ */
/* Templates                                                           */
/* ------------------------------------------------------------------ */

type Row = [label: string, value: string | undefined]

function rowsHtml(rows: Row[]) {
  return rows
    .filter(([, v]) => v && v.trim())
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px 8px 0;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("")
}

function layout({ heading, intro, rows, body, footer }: { heading: string; intro: string; rows?: Row[]; body?: string; footer?: string }) {
  return `<!doctype html>
<html><body style="margin:0;background:#f1f5f9;font-family:Segoe UI,Helvetica,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0">
        <tr><td style="background:#0b1733;padding:22px 28px">
          <span style="display:inline-block;width:28px;height:28px;border-radius:8px;background:#4f7cff;color:#fff;font-weight:800;text-align:center;line-height:28px;font-size:15px">D</span>
          <span style="color:#ffffff;font-weight:700;font-size:16px;margin-left:10px;vertical-align:middle">${escapeHtml(site.name)}</span>
        </td></tr>
        <tr><td style="padding:28px">
          <h1 style="margin:0 0 10px;font-size:20px;color:#0f172a">${escapeHtml(heading)}</h1>
          <p style="margin:0 0 18px;color:#334155;font-size:15px;line-height:1.6">${intro}</p>
          ${rows ? `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;margin:6px 0 18px">${rowsHtml(rows)}</table>` : ""}
          ${body ?? ""}
          ${footer ? `<p style="margin:18px 0 0;color:#64748b;font-size:13px;line-height:1.6">${footer}</p>` : ""}
        </td></tr>
        <tr><td style="padding:16px 28px;background:#f8fafc;color:#94a3b8;font-size:12px">
          ${escapeHtml(site.name)} · ${escapeHtml(site.location)} · <a href="${site.url}" style="color:#4f7cff;text-decoration:none">${site.url.replace(/^https?:\/\//, "")}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`
}

function messageBlock(label: string, message: string) {
  return `<p style="margin:0 0 6px;color:#64748b;font-size:13px">${escapeHtml(label)}</p>
  <div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px;color:#0f172a;font-size:14px;line-height:1.6">${escapeHtml(message)}</div>`
}

function rowsText(rows: Row[]) {
  return rows
    .filter(([, v]) => v && v.trim())
    .map(([l, v]) => `${l}: ${v}`)
    .join("\n")
}

export function contactEmails(d: { name: string; email: string; phone?: string; company?: string; message: string }) {
  const rows: Row[] = [
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Company", d.company],
  ]
  return {
    admin: {
      subject: headerSafe(`New enquiry from ${d.name}${d.company ? ` (${d.company})` : ""}`),
      html: layout({ heading: "New contact enquiry", intro: "Someone sent a message through the website.", rows, body: messageBlock("Message", d.message), footer: "Reply to this email to respond directly." }),
      text: `New contact enquiry\n\n${rowsText(rows)}\n\nMessage:\n${d.message}`,
    },
    visitor: {
      subject: `Thanks for reaching out to ${site.name}`,
      html: layout({
        heading: `Thanks, ${escapeHtml(d.name.split(" ")[0])}`,
        intro: `Your message has been received. I'll review it and reply ${site.responseTime}.`,
        body: messageBlock("Your message", d.message),
        footer: `— ${escapeHtml(site.founder.name)}, ${escapeHtml(site.founder.role)}`,
      }),
      text: `Thanks, ${d.name}. Your message has been received and I'll reply ${site.responseTime}.\n\n— ${site.founder.name}`,
    },
  }
}

export function consultationEmails(d: {
  name: string
  email: string
  phone: string
  company?: string
  dateLabel: string
  time: string
  projectLabel: string
  budgetLabel: string
  description: string
}) {
  const rows: Row[] = [
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Organisation", d.company],
    ["Requested slot", `${d.dateLabel}, ${d.time} GMT`],
    ["Project type", d.projectLabel],
    ["Budget", d.budgetLabel],
  ]
  return {
    admin: {
      subject: headerSafe(`Consultation request: ${d.name} — ${d.dateLabel} ${d.time}`),
      html: layout({
        heading: "New consultation request",
        intro: "A visitor requested a discovery call. Confirm the slot by replying to this email.",
        rows,
        body: messageBlock("Project description", d.description),
      }),
      text: `New consultation request\n\n${rowsText(rows)}\n\nProject description:\n${d.description}`,
    },
    visitor: {
      subject: `Consultation request received — ${d.dateLabel}, ${d.time} GMT`,
      html: layout({
        heading: "Your consultation request is in",
        intro: `Thanks, ${escapeHtml(d.name.split(" ")[0])}. I'll confirm your slot by email ${site.responseTime}. If the time doesn't work, I'll suggest the nearest alternative.`,
        rows: [
          ["Requested slot", `${d.dateLabel}, ${d.time} GMT`],
          ["Project type", d.projectLabel],
          ["Budget", d.budgetLabel],
        ],
        footer: `— ${escapeHtml(site.founder.name)}, ${escapeHtml(site.founder.role)}`,
      }),
      text: `Thanks, ${d.name}. Your consultation request for ${d.dateLabel}, ${d.time} GMT has been received. I'll confirm ${site.responseTime}.\n\n— ${site.founder.name}`,
    },
  }
}
