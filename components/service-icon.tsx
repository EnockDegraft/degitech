import { Bot, Code2, Compass, Palette, Smartphone, Workflow } from "lucide-react"
import type { ServiceIcon as Kind } from "@/lib/services"
import { cn } from "@/lib/cn"

const icons = { web: Code2, mobile: Smartphone, ai: Bot, workflow: Workflow, design: Palette, consulting: Compass }

export function ServiceIcon({ kind, className }: { kind: Kind; className?: string }) {
  const Icon = icons[kind]
  return (
    <span
      className={cn(
        "relative inline-flex size-12 items-center justify-center rounded-xl border border-brand/30 bg-gradient-to-br from-brand/25 to-brand/5 text-brand-300 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]",
        className,
      )}
    >
      <Icon className="size-5.5" strokeWidth={1.75} aria-hidden />
    </span>
  )
}
