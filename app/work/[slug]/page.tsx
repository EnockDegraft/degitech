import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Pill } from "@/components/ui"
import { ProjectVisual } from "@/components/visuals"
import { CtaBand } from "@/components/cta-band"
import { getProject, projects } from "@/lib/projects"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title}: Case Study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.summary },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="grid-bg absolute inset-0" aria-hidden />
        <div className="glow -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-brand/25" aria-hidden />
        <div className="container-x relative">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft className="size-4" aria-hidden /> All work
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            <Pill className="border-brand/30 text-brand-300">{project.sector}</Pill>
            <Pill>{project.platform}</Pill>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl md:leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">{project.summary}</p>

          <dl className={`mt-10 grid gap-6 border-t border-line pt-8 ${project.role ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            <div>
              <dt className="text-xs font-medium tracking-[0.14em] text-subtle uppercase">Client</dt>
              <dd className="mt-2 text-fg">{project.client}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-[0.14em] text-subtle uppercase">Platform</dt>
              <dd className="mt-2 text-fg">{project.platform}</dd>
            </div>
            {project.role && (
              <div>
                <dt className="text-xs font-medium tracking-[0.14em] text-subtle uppercase">My role</dt>
                <dd className="mt-2 text-fg">{project.role}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x">
          <ProjectVisual kind={project.visual} className="card min-h-[340px] md:min-h-[520px]" innerClassName="mx-auto max-w-3xl md:[zoom:1.3]" />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <p className="eyebrow mb-4">The challenge</p>
            <p className="text-xl leading-relaxed text-fg/90">{project.challenge}</p>
          </div>
          <div data-reveal>
            <p className="eyebrow mb-4">The solution</p>
            <p className="text-xl leading-relaxed text-fg/90">{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30 py-20 md:py-24">
        <div className="container-x">
          <h2 className="text-3xl font-semibold tracking-tight" data-reveal>
            Key capabilities
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {project.features.map((f, i) => (
              <div key={f.title} className="card p-7" data-reveal style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}>
                <span className="font-mono text-sm text-brand-300">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-fg">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14" data-reveal>
            <h2 className="text-sm font-semibold tracking-wide text-fg uppercase">Technology</h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {project.stack.map((t) => (
                <li key={t} className="rounded-full border border-line bg-white/[0.02] px-4 py-2 font-mono text-sm text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <Link href={`/work/${next.slug}`} className="group block py-14">
          <div className="container-x flex items-center justify-between gap-6">
            <div>
              <p className="text-sm text-subtle">Next case study</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-fg transition-colors group-hover:text-brand-300 md:text-3xl">
                {next.title}
              </p>
            </div>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all group-hover:border-brand group-hover:bg-brand">
              <ArrowRight className="size-5" aria-hidden />
            </span>
          </div>
        </Link>
      </section>

      <CtaBand title="Need something like this for your organisation?" />
    </>
  )
}
