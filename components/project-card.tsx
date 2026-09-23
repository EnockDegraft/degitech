import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import { ProjectVisual } from "./visuals"
import { Pill } from "./ui"

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="card card-hover group flex h-full flex-col overflow-hidden"
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
    >
      <ProjectVisual kind={project.visual} className="aspect-[16/11] border-b border-line" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Pill className="border-brand/30 text-brand-300">{project.sector}</Pill>
          <Pill>{project.platform}</Pill>
        </div>
        <h3 className="mt-4 flex items-start justify-between gap-3 text-xl font-semibold tracking-tight text-fg">
          {project.title}
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-300" aria-hidden />
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-5 font-mono text-xs text-subtle">{project.stack.slice(0, 4).join("  ·  ")}</p>
      </div>
    </Link>
  )
}
