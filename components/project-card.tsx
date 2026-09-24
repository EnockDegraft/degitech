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
      style={{ "--reveal-delay": `${(index % 4) * 70}ms` } as React.CSSProperties}
    >
      {/* The mock-ups are drawn at a fixed width and zoomed to fit the narrower card at each breakpoint. */}
      <ProjectVisual
        kind={project.visual}
        className="aspect-[16/11] border-b border-line"
        innerClassName="w-[560px] shrink-0 [zoom:0.3] sm:[zoom:0.5] md:[zoom:0.6] lg:[zoom:0.4] xl:[zoom:0.5] 2xl:[zoom:0.62]"
      />
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <Pill className="border-brand/30 text-brand-300">{project.sector}</Pill>
          <Pill className="hidden sm:inline-flex">{project.platform}</Pill>
        </div>
        <h3 className="mt-3 flex items-start justify-between gap-2 text-sm leading-snug font-semibold tracking-tight text-fg sm:mt-4 sm:text-lg">
          {project.title}
          <ArrowUpRight className="mt-0.5 hidden size-4 shrink-0 sm:block text-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-300" aria-hidden />
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm">{project.summary}</p>
        <p className="mt-4 hidden font-mono text-xs text-subtle sm:block">{project.stack.slice(0, 3).join("  ·  ")}</p>
      </div>
    </Link>
  )
}
