import type { Metadata } from "next"
import { Check } from "lucide-react"
import { ButtonLink, PageHero } from "@/components/ui"
import { CtaBand } from "@/components/cta-band"
import { cn } from "@/lib/cn"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "How DegiTech Consults prices projects: fixed-scope builds, full product delivery and ongoing support retainers, all quoted after a free discovery call.",
  alternates: { canonical: "/pricing" },
}

const plans = [
  {
    name: "Launch",
    tag: "Websites & focused tools",
    from: "Fixed quote",
    timeline: "2 – 4 weeks",
    description: "A professional website, landing page or single-purpose tool delivered to a fixed scope and price.",
    features: [
      "Fixed scope, fixed price",
      "Responsive design, SEO & analytics",
      "Contact / booking forms with email",
      "Deployment & domain setup",
      "2 weeks of post-launch support",
    ],
  },
  {
    name: "Build",
    tag: "Web & mobile applications",
    from: "Milestone quote",
    timeline: "6 – 12 weeks",
    description: "A full application with user accounts, roles, dashboards and integrations, delivered in reviewed milestones.",
    features: [
      "Discovery workshop & written spec",
      "Clickable designs before build",
      "Role-based access & admin dashboard",
      "Weekly preview releases",
      "App store / production deployment",
      "30 days of post-launch support",
    ],
    featured: true,
  },
  {
    name: "Partner",
    tag: "Ongoing development & support",
    from: "Monthly retainer",
    timeline: "Ongoing",
    description: "A reserved block of engineering time each month for new features, maintenance and monitoring.",
    features: [
      "Priority response times",
      "Feature development & improvements",
      "Security updates & dependency upgrades",
      "Monitoring & incident response",
      "Monthly progress report",
    ],
  },
]

const included = [
  "Full source-code ownership",
  "Documentation & handover",
  "Secure-by-default engineering",
  "Direct access to the engineer",
  "Milestone-based payments",
  "Transparent weekly progress",
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Clear pricing, <span className="text-gradient">quoted up front.</span>
          </>
        }
        lead="Every project is different, so every project gets a written quote after a free discovery call. These are the three ways most engagements are structured."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col rounded-[1.5rem] border p-8",
                p.featured
                  ? "border-brand/60 bg-gradient-to-b from-[#142453] to-[#0b1328] shadow-[0_30px_80px_-30px_rgb(79_124_255/0.7)]"
                  : "card",
              )}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <p className="text-sm font-medium text-brand-300">{p.tag}</p>
              <h2 className="mt-2 text-2xl font-semibold text-fg">{p.name}</h2>
              <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
              <div className="mt-7 border-y border-line py-5">
                <p className="text-3xl font-semibold tracking-tight text-fg">{p.from}</p>
                <p className="mt-1 text-sm text-subtle">Typical timeline: {p.timeline}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-fg/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-300" strokeWidth={2.5} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="/consultation"
                variant={p.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
                arrow
              >
                Get a quote
              </ButtonLink>
            </div>
          ))}
        </div>
        <p className="container-x mt-8 text-center text-sm text-subtle">
          Quotes exclude third-party costs such as hosting, domains, app-store fees and paid APIs, which are billed at cost.
        </p>
      </section>

      <section className="border-t border-line bg-surface/30 py-20">
        <div className="container-x">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl" data-reveal>
            Included in every engagement
          </h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-line bg-bg/50 px-5 py-4 text-fg/90">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Not sure which option fits?" lead="Tell me about the problem on a free 30-minute call and I'll recommend the leanest way to solve it, with a written quote." />
    </>
  )
}
