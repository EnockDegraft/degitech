import type { Metadata } from "next"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: `How ${site.name} handles the information you share through this website.`,
  alternates: { canonical: "/privacy" },
}

const sections = [
  {
    h: "What I collect",
    p: "When you use the contact or consultation forms, I collect the details you enter: your name, email address, phone number, organisation, preferred meeting time and project description. The site also uses privacy-friendly, cookie-free analytics (Vercel Analytics) to count page views.",
  },
  {
    h: "How it's used",
    p: "Your details are used only to reply to your enquiry, arrange a consultation and, if we work together, deliver the project. I don't sell or share your information for marketing, and I don't add you to mailing lists.",
  },
  {
    h: "Where it's processed",
    p: "Form submissions are delivered by email through Google Gmail, and the site is hosted on Vercel. Both providers process data under their own security and privacy commitments.",
  },
  {
    h: "How long it's kept",
    p: "Enquiries are kept only as long as needed to respond and for reasonable business records. You can ask for your information to be corrected or deleted at any time.",
  },
  {
    h: "Your rights",
    p: "In line with Ghana's Data Protection Act, 2012 (Act 843), you can request access to, correction of, or deletion of your personal data. Send the request through the contact form.",
  },
]

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-24 md:pt-44">
      <div className="container-x max-w-3xl">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Privacy notice</h1>
        <p className="mt-5 text-lg text-muted">
          {site.name} respects your privacy. This notice explains what happens to the information you share through this website.
        </p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-semibold text-fg">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
