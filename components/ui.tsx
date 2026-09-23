import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/cn"

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost"
  size?: "md" | "lg"
  arrow?: boolean
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
const variants = {
  primary:
    "bg-brand text-white shadow-[0_10px_30px_-10px_rgb(79_124_255/0.8)] hover:bg-brand-600 hover:shadow-[0_14px_40px_-10px_rgb(79_124_255/0.9)]",
  secondary: "border border-line-strong bg-white/[0.03] text-fg hover:border-brand/60 hover:bg-white/[0.06]",
  ghost: "text-fg hover:text-brand-300",
}
const sizes = { md: "h-11 px-5 text-sm", lg: "h-13 px-7 text-[15px]" }

export function ButtonLink({ variant = "primary", size = "md", arrow, className, children, ...props }: ButtonProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
    </Link>
  )
}

export function buttonClass(variant: keyof typeof variants = "primary", size: keyof typeof sizes = "md") {
  return cn(base, variants[variant], sizes[size])
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)} data-reveal>
      {eyebrow && <p className={cn("eyebrow mb-4", align === "center" && "justify-center")}>{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{lead}</p>}
    </div>
  )
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-20 md:pt-44 md:pb-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="glow -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-brand/25" aria-hidden />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl md:leading-[1.05]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted md:text-xl">{lead}</p>
          {children}
        </div>
      </div>
    </section>
  )
}
