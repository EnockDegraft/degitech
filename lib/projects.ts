export type ProjectVisual = "attendance" | "requisition" | "feedback" | "tracker" | "ordering" | "verify" | "retail"

export type Project = {
  slug: string
  title: string
  sector: string
  client: string
  platform: string
  summary: string
  challenge: string
  solution: string
  features: { title: string; text: string }[]
  stack: string[]
  role: string
  visual: ProjectVisual
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "staff-attendance-app",
    title: "Biometric Staff Attendance App",
    sector: "Banking",
    client: "Ghanaian financial institution",
    platform: "Mobile · Android & iOS",
    summary:
      "A Flutter app that lets staff clock in and out with face recognition and liveness detection, giving HR a reliable, auditable attendance record.",
    challenge:
      "Traditional attendance registers are slow to audit and easy to game. The bank needed proof that the person clocking in was physically present, including for night-shift staff, on everyday Android and iOS phones.",
    solution:
      "I built a cross-platform Flutter app with face verification for every clock-in and clock-out. Liveness detection started on a cloud face API and was later moved fully on-device with ML Kit blink and head-movement checks so biometric checks no longer depend on a network round-trip.",
    features: [
      { title: "Face verification + liveness", text: "On-device ML Kit blink and head-movement checks stop photo and screen spoofing." },
      { title: "Biometric fallback", text: "Fingerprint and Face ID as an alternative when lighting or cameras are poor." },
      { title: "Night-shift mode", text: "A dedicated action picker for shift workers with overnight clock-in windows." },
      { title: "History & reminders", text: "Personal attendance history and local push-notification reminders." },
    ],
    stack: ["Flutter", "Dart", "Google ML Kit", "Azure Face API", "Local notifications"],
    role: "Sole mobile engineer: architecture, liveness pipeline, iOS/Android builds and Play Store release.",
    visual: "attendance",
    featured: true,
  },
  {
    slug: "transport-requisition",
    title: "Transport Requisition System",
    sector: "Banking",
    client: "Ghanaian financial institution",
    platform: "Web application",
    summary:
      "An internal platform for requesting, approving and scheduling official vehicles, with directory sign-in and role-based approvals.",
    challenge:
      "Vehicle requests moved through paper forms and phone calls, so there was no single view of who requested what, who approved it, or which vehicles were free.",
    solution:
      "A React and TypeScript front end on a Next.js API with MySQL. Staff sign in with their existing directory (LDAP) credentials, and each request flows through the right approvers before transport officers assign a vehicle and driver.",
    features: [
      { title: "Directory sign-in", text: "LDAP authentication so staff use the credentials they already have." },
      { title: "Role-based approvals", text: "Requester → line manager → transport desk, each with its own view." },
      { title: "Fleet visibility", text: "See vehicle availability and trip status at a glance." },
      { title: "API audit", text: "Endpoints reviewed for validation, authorisation and error handling." },
    ],
    stack: ["React", "Vite", "TypeScript", "Next.js API", "MySQL", "LDAP", "Tailwind CSS"],
    role: "Full-stack engineer: UI, API design, approval logic and security review.",
    visual: "requisition",
    featured: true,
  },
  {
    slug: "examverify",
    title: "ExamVerify: AI Exam Access Control",
    sector: "Education",
    client: "Pentecost University (final-year project)",
    platform: "Web application · AI",
    summary:
      "Browser-based facial recognition that verifies a student's identity and fee status before they enter an exam hall.",
    challenge:
      "Exam impersonation and manual ID checks slow down entry and are hard to audit. Invigilators also need to know instantly whether a student is cleared to sit the paper.",
    solution:
      "A Next.js app where face detection, blink-based liveness and 128-dimension face matching all run client-side in the browser with TensorFlow.js, so no face images leave the device. Verification is combined with fee and exam-registration status in a single decision.",
    features: [
      { title: "In-browser face matching", text: "face-api / TensorFlow.js descriptors compared against enrolled students." },
      { title: "Blink liveness", text: "Eye-aspect-ratio blink detection to reject photos." },
      { title: "Eligibility check", text: "Fees and exam registration verified in the same step." },
      { title: "Kiosk & staff modes", text: "A hands-free kiosk for halls plus a secured staff dashboard." },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "TensorFlow.js", "face-api", "Firebase"],
    role: "Co-designer and lead developer (with Arnold Quarcoo).",
    visual: "verify",
    featured: true,
  },
  {
    slug: "service-issue-tracker",
    title: "Real-time Service Issue Tracker",
    sector: "Banking",
    client: "Customer service operations",
    platform: "Web application",
    summary:
      "A live dashboard for logging, escalating and resolving customer-service issues across teams, with four distinct roles.",
    challenge:
      "Issues reported by branches were tracked in chats and spreadsheets. Severity was inconsistent, nothing escalated automatically, and managers had no live picture of what was open.",
    solution:
      "A Next.js App Router application on MySQL with role-based access for loggers, the customer-service team, IT admins and managers. Updates stream to every open dashboard in real time through Server-Sent Events, and timers auto-escalate or auto-resolve tickets according to severity.",
    features: [
      { title: "Four-role access model", text: "Logger, CS team, IT admin and CS manager each see what they need." },
      { title: "Live updates", text: "Server-Sent Events push changes instantly, with no refreshing." },
      { title: "Severity escalation", text: "Timers raise priority when issues sit too long." },
      { title: "Manager dashboard", text: "Open, escalated and resolved volumes at a glance." },
    ],
    stack: ["Next.js", "TypeScript", "MySQL", "Server-Sent Events", "Tailwind CSS"],
    role: "Full-stack engineer: data model, real-time layer and dashboard design.",
    visual: "tracker",
  },
  {
    slug: "customer-feedback-platform",
    title: "Customer Suggestion & Complaint Platform",
    sector: "Banking",
    client: "Ghanaian financial institution",
    platform: "Web application",
    summary:
      "A full-stack system that captures customer suggestions and complaints and routes them to an admin team for follow-up.",
    challenge:
      "Customer feedback arrived through suggestion boxes and ad-hoc emails, so trends were invisible and complaints could fall through the cracks.",
    solution:
      "A React and TypeScript front end with a Node/Express API. Customers submit feedback through a simple form, and staff triage, assign and close each item from an admin dashboard.",
    features: [
      { title: "Simple public form", text: "Mobile-friendly submission with categories." },
      { title: "Admin dashboard", text: "Filter, assign and resolve feedback in one place." },
      { title: "Status tracking", text: "Every item moves from new → in progress → resolved." },
      { title: "Reporting", text: "Volume by category and status for management." },
    ],
    stack: ["React", "Vite", "TypeScript", "Node.js", "Express", "SQLite"],
    role: "Full-stack engineer, delivered incrementally with stakeholder checkpoints.",
    visual: "feedback",
  },
  {
    slug: "el-randos",
    title: "El-Randos School Lunch Ordering",
    sector: "Food service · Education",
    client: "El-Randos",
    platform: "Web application",
    summary:
      "An online ordering platform for a school lunch service, replacing a Google Form with proper accounts, menus and admin tools.",
    challenge:
      "Parents ordered through a Google Form, so the kitchen had to reconcile orders by hand and couldn't manage menus or recurring orders cleanly.",
    solution:
      "A Next.js platform with parent accounts and daily, weekly and termly order types. The admin back office manages menus and exports orders to CSV for the kitchen.",
    features: [
      { title: "Parent accounts", text: "Secure sign-in with order history per child." },
      { title: "Flexible plans", text: "Daily, weekly and termly ordering." },
      { title: "Menu management", text: "Admins update menus and availability themselves." },
      { title: "Kitchen exports", text: "One-click CSV exports for preparation and delivery." },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    role: "Product engineer: data model, ordering flows and admin tools.",
    visual: "ordering",
  },
  {
    slug: "retail-sales-inventory",
    title: "Drinks Sales & Inventory System",
    sector: "Retail",
    client: "Drinks wholesaler, Accra",
    platform: "Web application",
    summary:
      "A lean sales, stock and profit system for a wholesale and retail drinks business carrying 60+ products.",
    challenge:
      "Sales and stock were tracked by hand, so the owners couldn't see daily profit, spot low stock early, or tell which suppliers and products performed best.",
    solution:
      "A dependency-free PHP 8 application on MySQL with role-based logins. Every sale deducts stock automatically and records wholesale or retail margin, feeding daily summaries, low-stock alerts and top-product reports.",
    features: [
      { title: "Point-of-sale", text: "Fast sale entry with wholesale and retail pricing." },
      { title: "Inventory & audit trail", text: "Automatic stock deduction and logged adjustments." },
      { title: "Low-stock alerts", text: "Flags products before they run out." },
      { title: "Profit reporting", text: "Daily summaries, top products and supplier performance." },
    ],
    stack: ["PHP 8", "MySQL", "PDO", "Bootstrap 5"],
    role: "Sole developer: schema, business logic, security and deployment.",
    visual: "retail",
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
