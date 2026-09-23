import Link from "next/link"
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Lock,
  ShoppingBag,
  Utensils,
  Wifi,
  FileCode2,
} from "lucide-react"
import { ButtonLink, Pill, SectionHeading } from "@/components/ui"
import { HeroVisual, ProjectVisual } from "@/components/visuals"
import { ServiceIcon } from "@/components/service-icon"
import { CtaBand } from "@/components/cta-band"
import { services } from "@/lib/services"
import { projects } from "@/lib/projects"

const sectors = [
  { icon: Landmark, label: "Banking & finance" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "Retail & distribution" },
  { icon: Utensils, label: "Food service" },
]

const principles = [
  {
    icon: Lock,
    title: "Security is the default",
    text: "Built to bank-grade habits: least-privilege roles, validated inputs, audit trails, and secrets kept out of code.",
  },
  {
    icon: Wifi,
    title: "Made for real conditions",
    text: "Fast on mobile data, usable on mid-range phones, and designed around how teams in Ghana actually work.",
  },
  {
    icon: HeartHandshake,
    title: "You work with the engineer",
    text: "No account-manager relay. The person who scopes your project is the person who builds it.",
  },
  {
    icon: FileCode2,
    title: "You own everything",
    text: "Full source code, documentation and a proper handover, so you're never locked in.",
  },
]

const process = [
  { step: "01", title: "Discover", text: "A free call to understand the problem, the users and the constraints. You get a written scope and estimate." },
  { step: "02", title: "Design", text: "User flows and interface designs you can click through and sign off before any production code is written." },
  { step: "03", title: "Build", text: "Short iterations with a working preview link after every milestone, so you see progress weekly." },
  { step: "04", title: "Launch & support", text: "Deployment, store submission, training and handover, plus a support window after go-live." },
]

const stack = [
  "Next.js", "React", "TypeScript", "Flutter", "Node.js", "PostgreSQL", "MySQL", "Firebase",
  "TensorFlow.js", "ML Kit", "Tailwind CSS", "Prisma", "LDAP / SSO", "Vercel",
]

export default function HomePage() {
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="glow -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 bg-brand/25" aria-hidden />

        <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div>
            <Link
              href="/consultation"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.03] py-1.5 pr-3 pl-1.5 text-sm text-muted transition-colors hover:border-brand/50"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
                <span className="animate-pulse-soft size-1.5 rounded-full bg-success" />
                Open
              </span>
              Booking new projects
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>

            <h1 className="mt-7 text-[2.6rem] leading-[1.04] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.1rem]">
              Software that runs <span className="text-gradient">serious operations.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted md:text-xl">
              DegiTech Consults designs and builds secure web platforms, mobile apps and AI verification systems for
              banks, schools and growing businesses, from first sketch to production.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/consultation" size="lg" arrow>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/work" size="lg" variant="secondary">
                See the work
              </ButtonLink>
            </div>

            <div className="mt-12 border-t border-line pt-6">
              <p className="text-xs font-medium tracking-[0.14em] text-subtle uppercase">Systems delivered for</p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {sectors.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-muted">
                    <Icon className="size-4 text-brand-300" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section className="relative border-t border-line py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What I build"
              title="From customer portals to face-verified mobile apps."
              lead="End-to-end delivery across web, mobile and applied AI, with the security and reliability that institutions expect."
            />
            <ButtonLink href="/services" variant="secondary" arrow className="self-start md:self-auto">
              All services
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="card card-hover group p-7"
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
              >
                <ServiceIcon kind={s.icon} />
                <h3 className="mt-6 text-lg font-semibold text-fg">{s.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Featured work ---------------- */}
      <section className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Real systems, in real use."
              lead="A few of the platforms I've designed and engineered for banking, education and business teams."
            />
            <ButtonLink href="/work" variant="secondary" arrow className="self-start md:self-auto">
              All case studies
            </ButtonLink>
          </div>

          <div className="mt-16 space-y-8">
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="card card-hover group grid overflow-hidden lg:grid-cols-2"
                data-reveal
              >
                <ProjectVisual
                  kind={p.visual}
                  className={`min-h-[300px] border-b border-line lg:min-h-[420px] lg:border-b-0 ${i % 2 ? "lg:order-2 lg:border-l" : "lg:border-r"}`}
                />
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="flex flex-wrap gap-2">
                    <Pill className="border-brand/30 text-brand-300">{p.sector}</Pill>
                    <Pill>{p.platform}</Pill>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-fg md:text-3xl">{p.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f.title} className="flex items-start gap-2 text-sm text-fg/90">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {f.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                    Read the case study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Principles ---------------- */}
      <section className="border-t border-line py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Why DegiTech"
              title="Enterprise discipline, without the enterprise overhead."
              lead="I build software the way regulated institutions need it built, and deliver it with the speed and directness of a small studio."
            />
            <div className="mt-8 flex items-center gap-3 text-sm text-muted" data-reveal>
              <Building2 className="size-5 text-brand-300" aria-hidden />
              Experience building internal systems inside the banking sector.
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="card p-7"
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
              >
                <Icon className="size-6 text-accent" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-fg">{title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section id="process" className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we'll work"
            title="A clear process with no surprises."
            lead="Every engagement follows the same four steps, with a working preview you can check at every milestone."
            align="center"
          />
          <ol className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <span className="absolute top-[2.35rem] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-brand/0 via-brand/50 to-brand/0 lg:block" aria-hidden />
            {process.map((p, i) => (
              <li
                key={p.step}
                className="card relative p-7"
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <span className="flex size-11 items-center justify-center rounded-full border border-brand/40 bg-bg font-mono text-sm font-semibold text-brand-300">
                  {p.step}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-fg">{p.title}</h3>
                <p className="mt-2.5 leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Stack ---------------- */}
      <section className="border-t border-line py-20">
        <div className="container-x text-center">
          <p className="text-xs font-medium tracking-[0.14em] text-subtle uppercase" data-reveal>
            Proven, well-supported technology
          </p>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2.5" data-reveal>
            {stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-line bg-white/[0.02] px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-brand/40 hover:text-fg"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
