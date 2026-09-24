import type { Metadata } from "next"
import { PageHero } from "@/components/ui"
import { ProjectCard } from "@/components/project-card"
import { CtaBand } from "@/components/cta-band"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Case studies from DegiTech Consults: biometric and geofenced attendance, AI exam verification, RAG assistants, banking card and requisition systems, fintech, retail and workflow tools.",
  alternates: { canonical: "/work" },
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Systems that teams <span className="text-gradient">rely on every day.</span>
          </>
        }
        lead="A selection of platforms I've designed and engineered across banking, the public sector, education, fintech, food service and retail. Client-confidential details are kept general."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <CtaBand title="Your project could be the next case study." />
    </>
  )
}
