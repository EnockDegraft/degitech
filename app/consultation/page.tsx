import type { Metadata } from "next"
import { Check } from "lucide-react"
import { PageHero } from "@/components/ui"
import { ConsultationForm } from "@/components/forms/consultation-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description: `Book a free 30-minute discovery call with ${site.name} to scope your web, mobile or AI project.`,
  alternates: { canonical: "/consultation" },
}

const expect = [
  "A 30-minute video or phone call, free and with no obligation",
  "Questions about your goals, users, timeline and constraints",
  "Honest advice on the leanest way to solve the problem",
  "A written scope and quote within a few days, if it's a fit",
]

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Free consultation"
        title={
          <>
            Book a <span className="text-gradient">discovery call.</span>
          </>
        }
        lead="Pick a preferred slot and tell me about your project. I'll confirm by email and come prepared with questions."
      />

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="card p-6 sm:p-10">
            <ConsultationForm />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="card p-7">
              <h2 className="text-lg font-semibold text-fg">What to expect</h2>
              <ul className="mt-5 space-y-4">
                {expect.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-muted">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-300">
                      <Check className="size-3" strokeWidth={3} aria-hidden />
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-7">
              <h2 className="text-lg font-semibold text-fg">Come prepared with</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Your goals, who will use the system, any existing tools or documents, and a rough budget and deadline.
                Don&apos;t worry if some of it is unclear. Working that out is what the call is for.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
