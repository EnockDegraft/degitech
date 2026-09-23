import { CalendarCheck } from "lucide-react"
import { ButtonLink } from "./ui"
import { site } from "@/lib/site"

export function CtaBand({
  title = "Have a system in mind? Let's scope it together.",
  lead = `Book a free 30-minute discovery call. You'll leave with a clear next step, whether or not we work together. I reply ${site.responseTime}.`,
}: {
  title?: string
  lead?: string
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-brand/30 bg-gradient-to-br from-[#122152] via-[#0c1733] to-[#0a1224] px-6 py-14 text-center sm:px-12 md:py-20"
          data-reveal
        >
          <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
          <div className="glow -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 bg-brand/40" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl border border-brand/40 bg-brand/15 text-brand-300">
              <CalendarCheck className="size-6" aria-hidden />
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-pretty text-muted">{lead}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/consultation" size="lg" arrow>
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="secondary">
                Send a message
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
