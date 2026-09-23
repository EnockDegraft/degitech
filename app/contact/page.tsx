import type { Metadata } from "next"
import Link from "next/link"
import { CalendarCheck, Clock, MapPin, MessageSquare } from "lucide-react"
import { PageHero } from "@/components/ui"
import { ContactForm } from "@/components/forms/contact-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Tell me about your project and I'll reply ${site.responseTime}.`,
  alternates: { canonical: "/contact" },
}

const details = [
  { icon: MapPin, label: "Location", value: site.location },
  { icon: Clock, label: "Working hours", value: site.hours },
  { icon: MessageSquare, label: "Response time", value: `Replies ${site.responseTime}` },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <span className="text-gradient">what you&apos;re building.</span>
          </>
        }
        lead="Share a few details and I'll get back to you personally. No sales scripts, just a straight answer on how I can help."
      />

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="card p-6 sm:p-10">
            <ContactForm />
          </div>

          <aside className="space-y-5">
            <div className="card p-7">
              <ul className="space-y-6">
                {details.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-300">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm text-subtle">{label}</span>
                      <span className="mt-0.5 block text-fg">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/consultation"
              className="card card-hover group block border-brand/30 bg-gradient-to-br from-[#142453] to-[#0b1328] p-7"
            >
              <CalendarCheck className="size-6 text-accent" aria-hidden />
              <h2 className="mt-4 text-lg font-semibold text-fg">Prefer to talk it through?</h2>
              <p className="mt-2 leading-relaxed text-muted">Book a free 30-minute discovery call at a time that suits you.</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-brand-300 group-hover:text-fg">Book a consultation →</span>
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}
