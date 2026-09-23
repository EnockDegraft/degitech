"use client"

import { useState, type ReactNode } from "react"
import type { z } from "zod"
import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react"
import { fieldErrors } from "@/lib/validation"
import { cn } from "@/lib/cn"

type Status = "idle" | "submitting" | "success" | "error"

export function useFormSubmit<S extends z.ZodType>(endpoint: string, schema: S) {
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [message, setMessage] = useState("")
  const [confirmationSent, setConfirmationSent] = useState(false)

  async function submit(form: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(form).entries())
    const parsed = schema.safeParse(data)
    if (!parsed.success) {
      const errs = fieldErrors(parsed.error)
      if (errs.website) return // honeypot: silently ignore
      setErrors(errs)
      setStatus("error")
      setMessage("Please check the highlighted fields.")
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)
      first?.focus()
      return
    }

    setErrors({})
    setStatus("submitting")
    setMessage("")
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) {
        setErrors(body.fields ?? {})
        setStatus("error")
        setMessage(body.error ?? "Something went wrong. Please try again.")
        return
      }
      setConfirmationSent(Boolean(body.confirmationSent))
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setMessage("Network error. Check your connection and try again.")
    }
  }

  function clearError(name: string) {
    if (errors[name]) setErrors(({ [name]: _removed, ...rest }) => rest)
  }

  return { status, errors, message, confirmationSent, submit, clearError, reset: () => setStatus("idle") }
}

export function Field({
  label,
  name,
  error,
  required,
  hint,
  children,
  className,
}: {
  label: string
  name: string
  error?: string
  required?: boolean
  hint?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 flex items-baseline justify-between text-sm font-medium text-fg">
        <span>
          {label}
          {required ? <span className="text-brand-300"> *</span> : <span className="font-normal text-subtle"> (optional)</span>}
        </span>
        {hint && <span className="text-xs font-normal text-subtle">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-danger" role="alert">
          <CircleAlert className="size-3.5 shrink-0" aria-hidden /> {error}
        </p>
      )}
    </div>
  )
}

/** Props that wire an input to its label and error message. */
export function fieldProps(name: string, errors: Record<string, string>, clearError: (n: string) => void) {
  return {
    id: name,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    onInput: () => clearError(name),
    className: "field",
  } as const
}

/** Off-screen honeypot. Real users never see or fill it. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  )
}

export function SubmitButton({ submitting, children }: { submitting: boolean; children: ReactNode }) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgb(79_124_255/0.8)] transition-all hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {submitting && <LoaderCircle className="size-4 animate-spin" aria-hidden />}
      {submitting ? "Sending…" : children}
    </button>
  )
}

export function FormAlert({ message }: { message: string }) {
  if (!message) return null
  return (
    <div role="alert" className="flex items-start gap-3 rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
      <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
      {message}
    </div>
  )
}

export function SuccessPanel({
  title,
  children,
  onReset,
  resetLabel,
  className,
}: {
  title: string
  children: ReactNode
  onReset: () => void
  resetLabel: string
  className?: string
}) {
  return (
    <div className={cn("flex flex-col items-center py-10 text-center", className)} role="status" aria-live="polite">
      <span className="flex size-16 items-center justify-center rounded-full bg-success/15 text-success ring-8 ring-success/5">
        <CircleCheck className="size-8" aria-hidden />
      </span>
      <h2 className="mt-6 text-2xl font-semibold text-fg">{title}</h2>
      <div className="mt-3 max-w-md leading-relaxed text-muted">{children}</div>
      <button type="button" onClick={onReset} className="mt-8 text-sm font-medium text-brand-300 hover:text-fg">
        {resetLabel}
      </button>
    </div>
  )
}
