import { handleForm } from "@/lib/form-handler"
import { budgets, consultationSchema, labelFor, projectTypes } from "@/lib/validation"
import { consultationEmails } from "@/lib/email"

export const runtime = "nodejs"

function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}

export async function POST(req: Request) {
  return handleForm(req, {
    name: "consultation",
    schema: consultationSchema,
    build: (d) => ({
      replyTo: d.email,
      visitorEmail: d.email,
      ...consultationEmails({
        name: d.name,
        email: d.email,
        phone: d.phone,
        company: d.company || undefined,
        dateLabel: formatDate(d.date),
        time: d.time,
        projectLabel: labelFor(projectTypes, d.projectType),
        budgetLabel: labelFor(budgets, d.budget),
        description: d.description,
      }),
    }),
  })
}
