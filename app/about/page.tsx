import type { Metadata } from "next"
import { Building2, GraduationCap, ScanFace, Smartphone } from "lucide-react"
import { PageHero } from "@/components/ui"
import { CtaBand } from "@/components/cta-band"
import { GithubIcon } from "@/components/icons"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: `${site.founder.name} is the founder and lead engineer of DegiTech Consults, building secure web, mobile and AI systems from Accra, Ghana.`,
  alternates: { canonical: "/about" },
}

const highlights = [
  {
    icon: Building2,
    title: "Banking-sector engineering",
    text: "Builds internal platforms for a Ghanaian financial institution: requisitions, attendance, feedback and service operations.",
  },
  {
    icon: Smartphone,
    title: "Shipped mobile apps",
    text: "Flutter apps taken all the way through Android and iOS builds to Play Store release.",
  },
  {
    icon: ScanFace,
    title: "Applied AI & biometrics",
    text: "Face matching and liveness detection with Azure Face, ML Kit and TensorFlow.js, running in the cloud, on-device and in the browser.",
  },
  {
    icon: GraduationCap,
    title: "Information Technology",
    text: "Studied IT at Pentecost University, Accra, with a final-year project on AI-based exam access control.",
  },
]

const values = [
  { title: "Clarity over jargon", text: "You'll always know what's being built, why, and what it costs, in plain language." },
  { title: "Security by habit", text: "Validation, least privilege and auditability are built in from day one, not bolted on." },
  { title: "Small, steady steps", text: "Work ships in small reviewed increments, so there are no big-bang surprises." },
  { title: "Long-term thinking", text: "Readable code, documentation and handover, so your system outlives any one developer." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            An engineer who builds for <span className="text-gradient">the people who use it.</span>
          </>
        }
        lead="DegiTech Consults is a software studio in Accra, led by Enock De-Graft Sarpong. It pairs the rigour of building inside a bank with the speed and care of a small studio."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="card relative overflow-hidden p-8 lg:sticky lg:top-28" data-reveal>
            <div className="glow -top-20 -right-20 h-60 w-60 bg-brand/30" aria-hidden />
            <div className="relative">
              <div
                className="flex size-24 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-300 via-brand to-brand-600 text-3xl font-semibold tracking-tight text-white shadow-[0_20px_60px_-20px_rgb(79_124_255/0.9)]"
                aria-hidden
              >
                ES
              </div>
              <h2 className="mt-7 text-2xl font-semibold tracking-tight">{site.founder.name}</h2>
              <p className="mt-1 text-brand-300">{site.founder.role}</p>
              <p className="mt-5 leading-relaxed text-muted">
                Full-stack and mobile engineer focused on secure internal systems, biometric verification and workflow
                automation.
              </p>
              <dl className="mt-7 space-y-3 border-t border-line pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-subtle">Based in</dt>
                  <dd className="text-fg">{site.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-subtle">Time zone</dt>
                  <dd className="text-fg">{site.timezone}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-subtle">Works with</dt>
                  <dd className="text-right text-fg">Clients in Ghana & remote</dd>
                </div>
              </dl>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-brand-300 hover:text-fg"
              >
                <GithubIcon className="size-4" /> github.com/enockdegraft
              </a>
            </div>
          </div>

          <div>
            <div className="space-y-5 text-lg leading-relaxed text-muted" data-reveal>
              <p>
                <span className="text-fg">I started DegiTech to build the kind of software I wished more organisations had:</span>{" "}
                systems that are secure, fast on everyday phones and connections, and genuinely pleasant to use.
              </p>
              <p>
                My day-to-day work is building internal platforms in the banking sector, from vehicle requisitions and
                customer-feedback systems to a real-time service-issue tracker and a face-verified staff attendance app.
                That environment teaches discipline: role-based access, audit trails, careful change management and zero
                tolerance for leaked credentials.
              </p>
              <p>
                Through DegiTech I bring that same discipline to schools, businesses and institutions that need
                dependable software without an enterprise-sized budget. You work directly with me, from the first
                conversation to launch and beyond.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="card p-6" data-reveal style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}>
                  <Icon className="size-6 text-accent" strokeWidth={1.75} aria-hidden />
                  <h3 className="mt-4 font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30 py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl" data-reveal>
            <p className="eyebrow mb-4">How I work</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Principles every project gets</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="bg-bg p-7" data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <span className="font-mono text-sm text-brand-300">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-fg">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
