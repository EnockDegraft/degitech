import type { Metadata } from "next"
import { Check } from "lucide-react"
import { PageHero, ButtonLink } from "@/components/ui"
import { ServiceIcon } from "@/components/service-icon"
import { CtaBand } from "@/components/cta-band"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web platforms, Flutter mobile apps, face recognition and liveness, workflow automation, UI/UX design and technical consulting from DegiTech Consults.",
  alternates: { canonical: "/services" },
}

const faqs = [
  {
    q: "Do you work with organisations outside Ghana?",
    a: "Yes. Most collaboration happens remotely over video calls, shared boards and preview links. I'm based in Accra on GMT, which overlaps well with Europe and the US East Coast.",
  },
  {
    q: "Can you work with our existing systems and IT policies?",
    a: "Yes. I regularly integrate with existing databases, directory services (LDAP / Active Directory) and internal APIs, and I'm used to working within bank-grade security and change-management processes.",
  },
  {
    q: "Who owns the code?",
    a: "You do. On final payment you receive full ownership of the source code, documentation and deployment configuration.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes a post-launch support window for fixes and small adjustments. After that, you can move to a monthly maintenance retainer or take the system fully in-house with a proper handover.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything you need to <span className="text-gradient">ship and run</span> serious software.
          </>
        }
        lead="Strategy, design, engineering and support under one roof. Pick a single service or have me take a product from idea to production."
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/consultation" size="lg" arrow>
            Discuss your project
          </ButtonLink>
          <ButtonLink href="/pricing" size="lg" variant="secondary">
            How pricing works
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="container-x space-y-6">
          {services.map((s) => (
            <article
              id={s.slug}
              key={s.slug}
              className="card grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
              data-reveal
            >
              <div>
                <ServiceIcon kind={s.icon} />
                <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Typical technology">
                  {s.stack.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-subtle">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-bg/40 p-6 md:p-8">
                <h3 className="text-sm font-semibold tracking-wide text-fg uppercase">What you get</h3>
                <ul className="mt-5 space-y-4">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-fg/90">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-300">
                        <Check className="size-3" strokeWidth={3} aria-hidden />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface/30 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Common questions</h2>
            <p className="mt-4 text-lg text-muted">Something else on your mind? Ask it on a free call.</p>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6" data-reveal>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-fg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-brand-300 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
