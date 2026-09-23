import { cn } from "@/lib/cn"

/** DegiTech monogram: a "D" formed by a circuit path with a node. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("size-9", className)} aria-hidden>
      <defs>
        <linearGradient id="dt-g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6d93ff" />
          <stop offset="1" stopColor="#3a63e6" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#dt-g)" />
      <path d="M13 11h7.5a9 9 0 0 1 0 18H13z" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M13 20h6" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="21.5" cy="20" r="2.4" fill="#3ad3f2" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[17px] leading-none font-semibold tracking-tight text-fg">
        DegiTech<span className="text-brand-300"> Consults</span>
      </span>
    </span>
  )
}
