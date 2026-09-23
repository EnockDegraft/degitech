import { z } from "zod"

/** Options shared by the consultation form (client) and API (server). */
export const projectTypes = [
  { value: "web-app", label: "Web application / portal" },
  { value: "mobile-app", label: "Mobile app (Android / iOS)" },
  { value: "website", label: "Business website" },
  { value: "ai-automation", label: "AI & automation" },
  { value: "internal-tool", label: "Internal tool / workflow automation" },
  { value: "consulting", label: "Technical consulting / audit" },
  { value: "other", label: "Something else" },
] as const

export const budgets = [
  { value: "not-sure", label: "Not sure yet" },
  { value: "under-10k", label: "Under GHS 10,000" },
  { value: "10k-50k", label: "GHS 10,000 – 50,000" },
  { value: "50k-100k", label: "GHS 50,000 – 100,000" },
  { value: "100k-plus", label: "GHS 100,000+" },
] as const

export const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"] as const

const projectTypeValues = projectTypes.map((p) => p.value) as [string, ...string[]]
const budgetValues = budgets.map((b) => b.value) as [string, ...string[]]

const name = z.string().trim().min(2, "Please enter your name").max(100, "Name is too long")
const email = z.string().trim().max(200).pipe(z.email("Please enter a valid email address"))
const phone = z
  .string()
  .trim()
  .max(30, "Phone number is too long")
  .regex(/^[+()\d\s-]*$/, "Use digits, spaces and + ( ) - only")
  .optional()
  .or(z.literal(""))
/** Hidden honeypot field: humans never fill it in. */
const website = z.string().max(0).optional().or(z.literal(""))

export const contactSchema = z.object({
  name,
  email,
  phone,
  company: z.string().trim().max(120, "Company name is too long").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell me a little more (at least 10 characters)").max(5000, "Message is too long"),
  website,
})

/** YYYY-MM-DD in GMT, which is Ghana's time zone. */
export function todayGMT(): string {
  return new Date().toISOString().slice(0, 10)
}

export function isWeekday(dateStr: string): boolean {
  const day = new Date(`${dateStr}T12:00:00Z`).getUTCDay()
  return day !== 0 && day !== 6
}

export const consultationSchema = z
  .object({
    name,
    email,
    phone: z
      .string()
      .trim()
      .min(7, "Please enter a phone number")
      .max(30, "Phone number is too long")
      .regex(/^[+()\d\s-]+$/, "Use digits, spaces and + ( ) - only"),
    company: z.string().trim().max(120).optional().or(z.literal("")),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a date"),
    time: z.enum(timeSlots, { error: "Choose a time slot" }),
    projectType: z.enum(projectTypeValues, { error: "Choose a project type" }),
    budget: z.enum(budgetValues, { error: "Choose a budget range" }),
    description: z
      .string()
      .trim()
      .min(20, "Describe your project in at least 20 characters")
      .max(5000, "Description is too long"),
    website,
  })
  .superRefine((data, ctx) => {
    const d = new Date(`${data.date}T12:00:00Z`)
    if (Number.isNaN(d.getTime())) {
      ctx.addIssue({ code: "custom", path: ["date"], message: "Choose a valid date" })
      return
    }
    if (data.date <= todayGMT()) {
      ctx.addIssue({ code: "custom", path: ["date"], message: "Choose a date from tomorrow onwards" })
    }
    const max = new Date()
    max.setUTCDate(max.getUTCDate() + 90)
    if (d > max) {
      ctx.addIssue({ code: "custom", path: ["date"], message: "Choose a date within the next 90 days" })
    }
    if (!isWeekday(data.date)) {
      ctx.addIssue({ code: "custom", path: ["date"], message: "Consultations run Monday to Friday" })
    }
  })

export type ContactInput = z.infer<typeof contactSchema>
export type ConsultationInput = z.infer<typeof consultationSchema>

/** Flattens zod issues into { field: firstMessage }. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {}
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form")
    const message = issue.message.startsWith("Invalid input") ? "This field is required" : issue.message
    if (!out[key]) out[key] = message
  }
  return out
}

export function labelFor(list: readonly { value: string; label: string }[], value: string): string {
  return list.find((i) => i.value === value)?.label ?? value
}
