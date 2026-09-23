"use client"

import { useEffect, useState } from "react"
import { budgets, consultationSchema, projectTypes, timeSlots } from "@/lib/validation"
import { site } from "@/lib/site"
import { Field, FormAlert, Honeypot, SubmitButton, SuccessPanel, fieldProps, useFormSubmit } from "./form-kit"

function isoDay(offsetDays: number) {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() + offsetDays)
  return d.toISOString().slice(0, 10)
}

export function ConsultationForm() {
  const { status, errors, message, confirmationSent, submit, clearError, reset } = useFormSubmit(
    "/api/consultation",
    consultationSchema,
  )
  const p = (name: string) => fieldProps(name, errors, clearError)

  // Computed after mount so server and client HTML always match.
  const [range, setRange] = useState<{ min: string; max: string }>()
  useEffect(() => setRange({ min: isoDay(1), max: isoDay(90) }), [])

  if (status === "success") {
    return (
      <SuccessPanel title="Request received" onReset={reset} resetLabel="Book another consultation">
        Thank you. I&apos;ll confirm your slot by email {site.responseTime}, or suggest the nearest alternative if it&apos;s
        taken.
        {confirmationSent && " A summary of your request has been sent to your inbox."}
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
      className="relative space-y-8"
    >
      <Honeypot />

      <fieldset className="space-y-5">
        <legend className="mb-5 text-sm font-semibold tracking-wide text-brand-300 uppercase">1 · About you</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" error={errors.name} required>
            <input {...p("name")} type="text" autoComplete="name" placeholder="Ama Mensah" maxLength={100} required />
          </Field>
          <Field label="Email" name="email" error={errors.email} required>
            <input {...p("email")} type="email" autoComplete="email" placeholder="you@company.com" maxLength={200} required />
          </Field>
          <Field label="Phone" name="phone" error={errors.phone} required>
            <input {...p("phone")} type="tel" autoComplete="tel" placeholder="+233 20 000 0000" maxLength={30} required />
          </Field>
          <Field label="Company / organisation" name="company" error={errors.company}>
            <input {...p("company")} type="text" autoComplete="organization" placeholder="Your organisation" maxLength={120} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-5 text-sm font-semibold tracking-wide text-brand-300 uppercase">2 · Preferred time</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Date" name="date" error={errors.date} required hint="Mon – Fri">
            <input {...p("date")} type="date" min={range?.min} max={range?.max} required />
          </Field>
          <Field label="Time (GMT)" name="time" error={errors.time} required hint="30 minutes">
            <select {...p("time")} defaultValue="" required>
              <option value="" disabled>
                Choose a time
              </option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="mb-5 text-sm font-semibold tracking-wide text-brand-300 uppercase">3 · Your project</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Project type" name="projectType" error={errors.projectType} required>
            <select {...p("projectType")} defaultValue="" required>
              <option value="" disabled>
                Choose one
              </option>
              {projectTypes.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Budget range" name="budget" error={errors.budget} required>
            <select {...p("budget")} defaultValue="not-sure" required>
              {budgets.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="What would you like to build?" name="description" error={errors.description} required>
          <textarea
            {...p("description")}
            rows={5}
            maxLength={5000}
            placeholder="The problem you're solving, who will use it, any deadlines or existing systems…"
            className="field resize-y"
            required
          />
        </Field>
      </fieldset>

      <FormAlert message={status === "error" ? message : ""} />

      <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-subtle">
          Free, no obligation. See the{" "}
          <a href="/privacy" className="underline hover:text-fg">
            privacy notice
          </a>
          .
        </p>
        <SubmitButton submitting={status === "submitting"}>Request consultation</SubmitButton>
      </div>
    </form>
  )
}
