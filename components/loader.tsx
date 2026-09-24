import { cn } from "@/lib/cn"
import { LogoMark } from "./logo"

/** Branded loading mark: the logo with an orbiting ring and an indeterminate bar. */
export function Loader({ label = "Loading", className }: { label?: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-6", className)} role="status" aria-live="polite">
      <div className="relative flex size-24 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-brand/20 blur-2xl" aria-hidden />
        <svg viewBox="0 0 96 96" className="loader-orbit absolute inset-0 size-full" aria-hidden>
          <circle cx="48" cy="48" r="44" fill="none" stroke="rgb(148 163 184 / 0.12)" strokeWidth="2" />
          <circle cx="48" cy="48" r="44" fill="none" stroke="url(#loader-g)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="70 207" />
          <circle cx="48" cy="4" r="3" fill="#3ad3f2" />
          <defs>
            <linearGradient id="loader-g" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3ad3f2" />
              <stop offset="1" stopColor="#4f7cff" />
            </linearGradient>
          </defs>
        </svg>
        <LogoMark className="loader-pulse relative size-12" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="loader-bar block h-0.5 w-32 overflow-hidden rounded-full bg-white/10" aria-hidden />
        <span className="text-xs font-medium tracking-[0.2em] text-subtle uppercase">{label}</span>
      </div>
    </div>
  )
}
