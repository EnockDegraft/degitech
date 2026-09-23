import type { ReactNode } from "react"
import { cn } from "@/lib/cn"
import type { ProjectVisual as VisualKind } from "@/lib/projects"

/* ------------------------------------------------------------------ */
/* Frames                                                              */
/* ------------------------------------------------------------------ */

export function BrowserFrame({ children, url, className }: { children: ReactNode; url?: string; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line-strong bg-[#0a1122] shadow-[0_40px_120px_-40px_rgb(79_124_255/0.55)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        {url && (
          <span className="ml-3 hidden truncate rounded-md bg-white/[0.04] px-3 py-1 font-mono text-[10px] text-subtle sm:block">
            {url}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border-[5px] border-[#1b2440] bg-[#0a1122] shadow-[0_40px_100px_-30px_rgb(0_0_0/0.8)]",
        className,
      )}
    >
      <div className="absolute top-1.5 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#1b2440]" />
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function Bar({ w, className }: { w: string; className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-white/10", className)} style={{ width: w }} />
}

function Dot({ color }: { color: string }) {
  return <span className="inline-block size-1.5 shrink-0 rounded-full" style={{ background: color }} />
}

export function AreaChart({ className, id = "a" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 300 100" preserveAspectRatio="none" className={cn("h-full w-full", className)} aria-hidden>
      <defs>
        <linearGradient id={`area-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4f7cff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#4f7cff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[25, 50, 75].map((y) => (
        <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgb(148 163 184 / 0.08)" />
      ))}
      <path
        d="M0 78 C 25 72, 40 60, 60 62 S 100 40, 125 46 S 165 30, 190 34 S 235 14, 260 20 S 290 10, 300 8 L300 100 L0 100Z"
        fill={`url(#area-${id})`}
      />
      <path
        d="M0 78 C 25 72, 40 60, 60 62 S 100 40, 125 46 S 165 30, 190 34 S 235 14, 260 20 S 290 10, 300 8"
        fill="none"
        stroke="#6d93ff"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 88 C 30 86, 50 80, 75 82 S 120 70, 150 72 S 200 60, 225 64 S 275 52, 300 50"
        fill="none"
        stroke="#3ad3f2"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
        opacity="0.7"
      />
    </svg>
  )
}

function Bars({ values, className }: { values: number[]; className?: string }) {
  return (
    <div className={cn("flex h-full items-end gap-[6%]", className)}>
      {values.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-[3px] bg-gradient-to-t from-brand/40 to-brand-300/90"
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  )
}

export function FaceScan({ className, verified = true }: { className?: string; verified?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#12204a] to-[#0a1122]", className)}>
      <svg viewBox="0 0 200 220" className="h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="face-glow" cx="50%" cy="42%" r="50%">
            <stop offset="0" stopColor="#4f7cff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#4f7cff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="200" height="220" fill="url(#face-glow)" />
        {/* shoulders + head */}
        <path d="M30 220c4-38 32-56 70-56s66 18 70 56" fill="#22336a" />
        <ellipse cx="100" cy="96" rx="40" ry="50" fill="#2a3d7a" />
        <ellipse cx="100" cy="96" rx="40" ry="50" fill="none" stroke="#6d93ff" strokeOpacity="0.5" strokeDasharray="3 5" />
        {/* landmarks */}
        {[
          [84, 88], [116, 88], [100, 104], [88, 120], [100, 123], [112, 120], [72, 96], [128, 96], [100, 70],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#3ad3f2" />
        ))}
        <path d="M84 88 L100 104 L116 88 M88 120 L100 123 L112 120 M72 96 L84 88 M116 88 L128 96 M100 70 L84 88 M100 70 L116 88" stroke="#3ad3f2" strokeOpacity="0.35" fill="none" />
        {/* corner brackets */}
        {[
          "M40 30 h-14 v14", "M160 30 h14 v14", "M40 180 h-14 v-14", "M160 180 h14 v-14",
        ].map((d) => (
          <path key={d} d={d} fill="none" stroke="#8fa9ff" strokeWidth="3" strokeLinecap="round" />
        ))}
      </svg>
      <div className="animate-scan absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_12px_2px_rgb(58_211_242/0.6)]" />
      {verified && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-1 text-[9px] font-semibold whitespace-nowrap text-success ring-1 ring-success/30">
            <svg viewBox="0 0 16 16" className="size-3" aria-hidden>
              <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            Verified
          </span>
        </div>
      )}
    </div>
  )
}

function Kpi({ label, value, trend, tone = "brand" }: { label: string; value: string; trend?: string; tone?: "brand" | "success" | "warning" }) {
  const toneClass = { brand: "text-brand-300", success: "text-success", warning: "text-warning" }[tone]
  return (
    <div className="rounded-lg border border-line bg-white/[0.02] p-2.5">
      <p className="text-[9px] tracking-wide text-subtle uppercase">{label}</p>
      <p className="mt-1 text-sm font-semibold text-fg">{value}</p>
      {trend && <p className={cn("mt-0.5 text-[9px]", toneClass)}>{trend}</p>}
    </div>
  )
}

function Status({ label, tone }: { label: string; tone: "success" | "warning" | "brand" | "danger" | "muted" }) {
  const styles = {
    success: "bg-success/12 text-success",
    warning: "bg-warning/12 text-warning",
    brand: "bg-brand/15 text-brand-300",
    danger: "bg-danger/12 text-danger",
    muted: "bg-white/5 text-muted",
  }[tone]
  return <span className={cn("rounded-full px-2 py-0.5 text-[9px] font-semibold whitespace-nowrap", styles)}>{label}</span>
}

function Sidebar({ items = 5, active = 1 }: { items?: number; active?: number }) {
  return (
    <div className="hidden w-[18%] shrink-0 flex-col gap-2 border-r border-line bg-white/[0.015] p-3 sm:flex">
      <span className="mb-2 block size-5 rounded-md bg-gradient-to-br from-brand-300 to-brand-600" />
      {Array.from({ length: items }).map((_, i) => (
        <span
          key={i}
          className={cn("flex items-center gap-1.5 rounded-md px-1.5 py-1", i === active && "bg-brand/15")}
        >
          <span className={cn("size-2 rounded-sm", i === active ? "bg-brand-300" : "bg-white/15")} />
          <Bar w="70%" className={i === active ? "bg-brand-300/60" : undefined} />
        </span>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Hero composition                                                    */
/* ------------------------------------------------------------------ */

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none" aria-hidden>
      <div className="glow top-10 left-10 h-72 w-72 bg-brand/35" />
      <div className="glow right-0 bottom-0 h-64 w-64 bg-accent/20" />

      <BrowserFrame url="app.yourcompany.com/operations" className="relative">
        <div className="flex">
          <Sidebar items={6} />
          <div className="flex-1 space-y-3 p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold text-fg">Operations overview</p>
                <Bar w="90px" />
              </div>
              <span className="rounded-md bg-brand px-2 py-1 text-[9px] font-semibold text-white">+ New request</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Kpi label="Open requests" value="128" trend="▲ 12 today" />
              <Kpi label="Approved" value="1,942" trend="▲ 4.1% this week" tone="success" />
              <Kpi label="Avg. turnaround" value="3.2h" trend="▼ 38 min" tone="warning" />
            </div>
            <div className="rounded-lg border border-line bg-white/[0.02] p-2.5">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-[10px] font-medium text-muted">Requests vs. resolutions</p>
                <span className="flex gap-2 text-[8px] text-subtle">
                  <span className="flex items-center gap-1"><Dot color="#6d93ff" /> Resolved</span>
                  <span className="flex items-center gap-1"><Dot color="#3ad3f2" /> Logged</span>
                </span>
              </div>
              <div className="h-[80px] sm:h-[110px]">
                <AreaChart id="hero" />
              </div>
            </div>
            <div className="space-y-1.5">
              {[
                ["TR-2041", "Vehicle request · Kumasi trip", "Approved", "success"],
                ["CS-0877", "Card issue · Branch 014", "Escalated", "warning"],
                ["FB-3310", "Customer suggestion", "In review", "brand"],
              ].map(([id, title, status, tone]) => (
                <div key={id} className="flex items-center gap-2 rounded-md border border-line/60 px-2 py-1.5">
                  <span className="font-mono text-[9px] text-subtle">{id}</span>
                  <span className="flex-1 truncate text-[10px] text-muted">{title}</span>
                  <Status label={status} tone={tone as "success"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserFrame>

      <PhoneFrame className="animate-float absolute -bottom-10 -left-4 w-[128px] sm:-left-10 sm:w-[160px]">
        <div className="space-y-2 p-2.5 pt-7">
          <p className="text-center text-[9px] font-semibold text-fg">Clock in · 07:58</p>
          <FaceScan className="h-[150px] sm:h-[190px]" />
          <span className="block rounded-md bg-brand py-1.5 text-center text-[9px] font-semibold text-white">Confirm clock-in</span>
        </div>
      </PhoneFrame>

      <div className="animate-float absolute -top-5 right-3 hidden items-center gap-2.5 rounded-xl border border-line-strong bg-surface/90 px-3 py-2.5 shadow-2xl backdrop-blur sm:flex" style={{ animationDelay: "1.5s" }}>
        <span className="flex size-7 items-center justify-center rounded-lg bg-success/15 text-success">
          <svg viewBox="0 0 16 16" className="size-3.5"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
        </span>
        <span>
          <span className="block text-[11px] font-semibold text-fg">Liveness check passed</span>
          <span className="block text-[10px] text-subtle">On-device · 0 images uploaded</span>
        </span>
      </div>

      <div className="animate-float absolute right-2 -bottom-6 hidden items-center gap-2.5 rounded-xl border border-line-strong bg-surface/90 px-3 py-2.5 shadow-2xl backdrop-blur md:flex" style={{ animationDelay: "3s" }}>
        <span className="relative flex size-2">
          <span className="animate-pulse-soft absolute inline-flex size-full rounded-full bg-accent" />
        </span>
        <span className="text-[11px] font-medium text-fg">Live · 3 approvers notified</span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Project visuals                                                     */
/* ------------------------------------------------------------------ */

function AttendanceVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-4 p-6">
      <PhoneFrame className="w-[42%] min-w-[150px] max-w-[170px]">
        <div className="space-y-2 p-2.5 pt-7">
          <p className="text-center text-[9px] font-semibold text-fg">Verify to clock in</p>
          <FaceScan className="aspect-[4/5]" />
          <div className="grid grid-cols-2 gap-1.5">
            <span className="rounded-md bg-brand py-1 text-center text-[8px] font-semibold text-white">Clock in</span>
            <span className="rounded-md bg-white/5 py-1 text-center text-[8px] text-muted">Fingerprint</span>
          </div>
        </div>
      </PhoneFrame>
      <PhoneFrame className="hidden w-[38%] max-w-[150px] translate-y-6 sm:block">
        <div className="space-y-2 p-2.5 pt-7">
          <p className="text-[9px] font-semibold text-fg">This week</p>
          {[
            ["Mon", "07:52", "17:04", "success"],
            ["Tue", "07:58", "17:11", "success"],
            ["Wed", "08:21", "17:00", "warning"],
            ["Thu", "07:49", "16:58", "success"],
            ["Fri", "Night", "shift", "brand"],
          ].map(([d, a, b, t]) => (
            <div key={d} className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5">
              <span className="text-[8px] font-semibold text-fg">{d}</span>
              <span className="font-mono text-[8px] text-muted">{a} – {b}</span>
              <Dot color={t === "success" ? "#34d399" : t === "warning" ? "#fbbf24" : "#8fa9ff"} />
            </div>
          ))}
        </div>
      </PhoneFrame>
    </div>
  )
}

function RequisitionVisual() {
  const steps = [
    ["Requested", "done"],
    ["Line manager", "done"],
    ["Transport desk", "active"],
    ["Vehicle assigned", "todo"],
  ]
  return (
    <BrowserFrame url="transport.internal/requests/TR-2041" className="m-5 sm:m-7">
      <div className="flex">
        <Sidebar items={4} active={0} />
        <div className="flex-1 space-y-3 p-3">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-fg">TR-2041 · Kumasi field visit</p>
            <Status label="Pending dispatch" tone="warning" />
          </div>
          <div className="flex items-center">
            {steps.map(([label, state], i) => (
              <div key={label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center gap-1">
                  <span
                    className={cn(
                      "flex size-5 items-center justify-center rounded-full text-[8px] font-bold",
                      state === "done" && "bg-success text-bg",
                      state === "active" && "bg-brand text-white ring-4 ring-brand/25",
                      state === "todo" && "bg-white/10 text-subtle",
                    )}
                  >
                    {state === "done" ? "✓" : i + 1}
                  </span>
                  <span className="text-center text-[8px] text-muted">{label}</span>
                </div>
                {i < steps.length - 1 && <span className={cn("mx-1 mb-3 h-px flex-1", state === "done" ? "bg-success/60" : "bg-white/10")} />}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Passengers", "3 staff"],
              ["Departure", "Mon, 06:30"],
              ["Vehicle", "Toyota Hilux"],
              ["Driver", "Assigning…"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md border border-line bg-white/[0.02] px-2 py-1.5">
                <p className="text-[8px] text-subtle uppercase">{k}</p>
                <p className="text-[10px] font-medium text-fg">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function TrackerVisual() {
  const cols = [
    { title: "Logged", tone: "muted" as const, cards: [["Card not dispensing", "High"], ["App login loop", "Med"]] },
    { title: "In progress", tone: "brand" as const, cards: [["Branch 014 network", "Critical"], ["Statement request", "Low"]] },
    { title: "Resolved", tone: "success" as const, cards: [["POS reversal", "Med"]] },
  ]
  return (
    <BrowserFrame url="issues.internal/board" className="m-5 sm:m-7">
      <div className="space-y-3 p-3">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-fg">Service issues</p>
          <span className="flex items-center gap-1.5 text-[9px] text-accent">
            <span className="animate-pulse-soft size-1.5 rounded-full bg-accent" /> Live
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {cols.map((c) => (
            <div key={c.title} className="space-y-1.5 rounded-lg bg-white/[0.02] p-1.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-[9px] font-semibold text-muted">{c.title}</span>
                <Status label={String(c.cards.length)} tone={c.tone} />
              </div>
              {c.cards.map(([t, sev]) => (
                <div key={t} className="rounded-md border border-line bg-[#0d162c] p-1.5">
                  <p className="truncate text-[9px] text-fg">{t}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <Status label={sev} tone={sev === "Critical" ? "danger" : sev === "High" ? "warning" : "muted"} />
                    <span className="size-3.5 rounded-full bg-gradient-to-br from-brand-300 to-brand-600" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

function FeedbackVisual() {
  return (
    <BrowserFrame url="feedback.internal/admin" className="m-5 sm:m-7">
      <div className="flex">
        <Sidebar items={4} active={2} />
        <div className="flex-1 space-y-3 p-3">
          <div className="grid grid-cols-3 gap-2">
            <Kpi label="New" value="24" tone="brand" trend="this week" />
            <Kpi label="In progress" value="11" tone="warning" trend="assigned" />
            <Kpi label="Resolved" value="186" tone="success" trend="this quarter" />
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3 rounded-lg border border-line p-2">
              <p className="mb-1 text-[9px] text-muted">By category</p>
              <div className="h-16">
                <Bars values={[70, 45, 88, 30, 60, 52]} />
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center rounded-lg border border-line p-2">
              <svg viewBox="0 0 36 36" className="size-14 -rotate-90" aria-hidden>
                <circle cx="18" cy="18" r="14" fill="none" stroke="rgb(148 163 184 / 0.15)" strokeWidth="5" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#6d93ff" strokeWidth="5" strokeDasharray="62 88" strokeLinecap="round" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#3ad3f2" strokeWidth="5" strokeDasharray="14 88" strokeDashoffset="-64" strokeLinecap="round" />
              </svg>
              <p className="mt-1 text-[8px] text-muted">Suggestions vs complaints</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

function OrderingVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-4 p-6">
      <BrowserFrame url="order.elrandos" className="w-[62%]">
        <div className="space-y-2 p-3">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-fg">This week&apos;s menu</p>
            <div className="flex gap-1">
              {["Daily", "Weekly", "Termly"].map((t, i) => (
                <span key={t} className={cn("rounded-full px-1.5 py-0.5 text-[8px]", i === 1 ? "bg-brand text-white" : "bg-white/5 text-muted")}>{t}</span>
              ))}
            </div>
          </div>
          {[
            ["Jollof rice & chicken", "Mon"],
            ["Banku & tilapia", "Tue"],
            ["Waakye special", "Wed"],
          ].map(([meal, day]) => (
            <div key={meal} className="flex items-center gap-2 rounded-md border border-line p-1.5">
              <span className="size-6 shrink-0 rounded-md bg-gradient-to-br from-warning/60 to-danger/40" />
              <span className="flex-1">
                <span className="block text-[9px] font-medium text-fg">{meal}</span>
                <span className="block text-[8px] text-subtle">{day}</span>
              </span>
              <span className="flex size-4 items-center justify-center rounded bg-brand text-[9px] text-white">+</span>
            </div>
          ))}
        </div>
      </BrowserFrame>
      <div className="w-[32%] space-y-2">
        <div className="rounded-xl border border-line-strong bg-surface p-3">
          <p className="text-[9px] text-subtle uppercase">Orders today</p>
          <p className="text-lg font-semibold text-fg">214</p>
          <div className="mt-2 h-10"><Bars values={[40, 65, 50, 80, 95]} /></div>
        </div>
        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-line-strong bg-surface p-2 text-[9px] font-semibold text-success">
          ⤓ Export CSV
        </div>
      </div>
    </div>
  )
}

function VerifyVisual() {
  return (
    <div className="flex h-full items-center justify-center gap-4 p-6">
      <FaceScan className="aspect-[4/5] w-[40%] max-w-[190px] border border-line-strong" />
      <div className="w-[48%] space-y-2">
        <div className="rounded-xl border border-line-strong bg-surface p-3">
          <p className="text-[9px] text-subtle uppercase">Student</p>
          <p className="text-[12px] font-semibold text-fg">PU-IT/24•••••</p>
          <p className="text-[9px] text-muted">BSc Information Technology</p>
        </div>
        {[
          ["Face match", "0.31 distance", "success"],
          ["Liveness (blink)", "Passed", "success"],
          ["Fees", "Cleared", "success"],
          ["Exam registration", "IT 401", "brand"],
        ].map(([k, v, t]) => (
          <div key={k} className="flex items-center justify-between rounded-lg border border-line bg-white/[0.02] px-2.5 py-1.5">
            <span className="text-[9px] text-muted">{k}</span>
            <Status label={v} tone={t as "success"} />
          </div>
        ))}
        <div className="rounded-lg bg-success/15 py-1.5 text-center text-[10px] font-semibold text-success ring-1 ring-success/30">
          Admit to hall
        </div>
      </div>
    </div>
  )
}

function RetailVisual() {
  return (
    <BrowserFrame url="sales.local/dashboard" className="m-5 sm:m-7">
      <div className="flex">
        <Sidebar items={6} active={0} />
        <div className="flex-1 space-y-3 p-3">
          <div className="grid grid-cols-3 gap-2">
            <Kpi label="Sales today" value="GHS 4,820" tone="success" trend="▲ vs yesterday" />
            <Kpi label="Profit" value="GHS 912" tone="brand" trend="wholesale + retail" />
            <Kpi label="Low stock" value="5 items" tone="warning" trend="reorder soon" />
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3 rounded-lg border border-line p-2">
              <p className="mb-1 text-[9px] text-muted">Daily sales</p>
              <div className="h-16">
                <AreaChart id="retail" />
              </div>
            </div>
            <div className="col-span-2 space-y-1 rounded-lg border border-line p-2">
              <p className="text-[9px] text-muted">Top products</p>
              {["Malt drinks", "Water 750ml", "Soft drinks"].map((p, i) => (
                <div key={p} className="space-y-0.5">
                  <span className="block text-[8px] text-fg">{p}</span>
                  <span className="block h-1 rounded-full bg-gradient-to-r from-brand to-accent" style={{ width: `${90 - i * 22}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

const visuals: Record<VisualKind, () => ReactNode> = {
  attendance: AttendanceVisual,
  requisition: RequisitionVisual,
  tracker: TrackerVisual,
  feedback: FeedbackVisual,
  ordering: OrderingVisual,
  verify: VerifyVisual,
  retail: RetailVisual,
}

export function ProjectVisual({ kind, className, innerClassName }: { kind: VisualKind; className?: string; innerClassName?: string }) {
  const V = visuals[kind]
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,rgb(79_124_255/0.22),transparent_65%)]",
        className,
      )}
      aria-hidden
    >
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className={cn("relative w-full", innerClassName)}>
        <V />
      </div>
    </div>
  )
}
