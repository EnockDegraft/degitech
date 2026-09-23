import { handleForm } from "@/lib/form-handler"
import { contactSchema } from "@/lib/validation"
import { contactEmails } from "@/lib/email"

export const runtime = "nodejs"

export async function POST(req: Request) {
  return handleForm(req, {
    name: "contact",
    schema: contactSchema,
    build: (d) => ({
      replyTo: d.email,
      visitorEmail: d.email,
      ...contactEmails({
        name: d.name,
        email: d.email,
        phone: d.phone || undefined,
        company: d.company || undefined,
        message: d.message,
      }),
    }),
  })
}
