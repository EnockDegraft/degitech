"use client"

import { contactSchema } from "@/lib/validation"
import { site } from "@/lib/site"
import { Field, FormAlert, Honeypot, SubmitButton, SuccessPanel, fieldProps, useFormSubmit } from "./form-kit"

export function ContactForm() {
  const { status, errors, message, confirmationSent, submit, clearError, reset } = useFormSubmit(
    "/api/contact",
    contactSchema,
  )
  const p = (name: string) => fieldProps(name, errors, clearError)

  if (status === "success") {
    return (
      <SuccessPanel title="Message sent" onReset={reset} resetLabel="Send another message">
        Thanks for getting in touch. I&apos;ll reply {site.responseTime}.
        {confirmationSent && " A copy of your message is on its way to your inbox."}
      </SuccessPanel>
    )
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        submit(e.currentTarget)
      }}
      className="relative space-y-5"
    >
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name} required>
          <input {...p("name")} type="text" autoComplete="name" placeholder="Ama Mensah" maxLength={100} required />
        </Field>
        <Field label="Email" name="email" error={errors.email} required>
          <input {...p("email")} type="email" autoComplete="email" placeholder="you@company.com" maxLength={200} required />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          <input {...p("phone")} type="tel" autoComplete="tel" placeholder="+233 20 000 0000" maxLength={30} />
        </Field>
        <Field label="Company / organisation" name="company" error={errors.company}>
          <input {...p("company")} type="text" autoComplete="organization" placeholder="Your organisation" maxLength={120} />
        </Field>
      </div>
      <Field label="How can I help?" name="message" error={errors.message} required>
        <textarea
          {...p("message")}
          rows={6}
          maxLength={5000}
          placeholder="A few lines about your project, timeline and goals…"
          className="field resize-y"
          required
        />
      </Field>

      <FormAlert message={status === "error" ? message : ""} />

      <div className="flex flex-col-reverse items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
        <p className="text-xs text-subtle">
          By sending this form you agree to the{" "}
          <a href="/privacy" className="underline hover:text-fg">
            privacy notice
          </a>
          .
        </p>
        <SubmitButton submitting={status === "submitting"}>Send message</SubmitButton>
      </div>
    </form>
  )
}
