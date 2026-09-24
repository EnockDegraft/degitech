export type ProjectVisual =
  | "attendance"
  | "requisition"
  | "feedback"
  | "tracker"
  | "ordering"
  | "verify"
  | "retail"
  | "geofence"
  | "rag"
  | "cards"
  | "savings"
  | "donations"
  | "visitors"
  | "register"
  | "shop"
  | "validator"
  | "crypto"
  | "site"

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
  /** Omitted when there is nothing specific to say; the case study then hides the "My role" column. */
  role?: string
  visual: ProjectVisual
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "staff-attendance-app",
    title: "ADB Attendance Tracking System (ADB ATS)",
    sector: "Banking",
    client: "Agricultural Development Bank (ADB)",
    platform: "Mobile + web · Android, iOS & admin portal",
    summary:
      "An enterprise attendance system for Agricultural Development Bank that authenticates staff with face verification and geofencing, with admin dashboards, reports and automated notifications.",
    challenge:
      "Traditional attendance registers are slow to audit and easy to game. The bank needed proof that the person clocking in was physically present at their workplace, including for night-shift staff, on everyday Android and iOS phones, and a central view of attendance for HR and management.",
    solution:
      "A cross-platform Flutter app verifies each clock-in and clock-out with face recognition and checks that the staff member is inside their branch's geofence. Liveness detection started on Azure Face API and was later moved fully on-device with ML Kit blink and head-movement checks. A Next.js admin portal on MySQL, with LDAP / Active Directory sign-in and hosted on IIS with PM2, gives administrators dashboards, reports and automated notifications.",
    features: [
      { title: "Face verification + liveness", text: "On-device ML Kit blink and head-movement checks stop photo and screen spoofing." },
      { title: "Geofenced clock-in", text: "Clock-ins are only accepted inside an authorised work location." },
      { title: "Admin dashboards & reports", text: "Attendance records, reports and staff monitoring in a web portal with Active Directory sign-in." },
      { title: "Automated notifications", text: "Reminders and alerts for staff and administrators, including night-shift clock-in windows." },
    ],
    stack: ["Flutter", "Next.js", "JavaScript", "MySQL", "Azure Face API", "ML Kit", "LDAP / Active Directory", "IIS", "PM2"],
    role: "Sole mobile engineer: architecture, liveness pipeline, iOS/Android builds and Play Store release.",
    visual: "attendance",
    featured: true,
  },
  {
    slug: "ghana-immigration-attendance",
    title: "Ghana Immigration Attendance System",
    sector: "Public sector",
    client: "Ghana Immigration Service",
    platform: "Mobile + web",
    summary:
      "A mobile attendance solution that verifies personnel are within an authorised duty location and confirms their identity before recording attendance.",
    challenge:
      "Personnel are deployed across many duty posts, so the service needed a reliable way to confirm that officers were actually at their assigned location, and that the person recording attendance was the right officer.",
    solution:
      "A Flutter app checks the officer's geolocation against their authorised duty location and runs face verification before an attendance record is accepted. Records are stored in Supabase and surfaced to supervisors through a Next.js web dashboard.",
    features: [
      { title: "Duty-location check", text: "Geolocation confirms the officer is inside an authorised duty area before clock-in." },
      { title: "Identity verification", text: "Face verification ties every record to the right officer." },
      { title: "Attendance records", text: "A central, auditable record of attendance across duty posts." },
      { title: "Supervisor dashboard", text: "A web view for monitoring attendance by location and personnel." },
    ],
    stack: ["Flutter", "Next.js", "Supabase", "TypeScript", "Face verification APIs", "Geolocation"],
    visual: "geofence",
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
      "A Next.js app where face detection, blink-based liveness and 128-dimension face matching all run client-side in the browser with TensorFlow.js, so no face images leave the device. Verification is combined with fee and exam-registration status from Supabase in a single decision.",
    features: [
      { title: "In-browser face matching", text: "face-api / TensorFlow.js descriptors compared against enrolled students." },
      { title: "Blink liveness", text: "Eye-aspect-ratio blink detection to reject photos." },
      { title: "Eligibility check", text: "Fees and exam registration verified in the same step." },
      { title: "Kiosk & staff modes", text: "A hands-free kiosk for halls plus a secured staff dashboard." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "TensorFlow.js", "face-api", "REST APIs"],
    role: "Co-designer and lead developer (with Arnold Quarcoo).",
    visual: "verify",
    featured: true,
  },
  {
    slug: "pentvars-rag",
    title: "PENTVARS RAG: Institutional AI Assistant",
    sector: "Education · AI",
    client: "Pentecost University (PENTVARS)",
    platform: "Web application · AI",
    summary:
      "A Retrieval-Augmented Generation platform that lets users ask questions about institutional information and get contextual answers from a curated knowledge base.",
    challenge:
      "Institutional information is spread across documents and pages, so finding a specific answer means knowing where to look. A general-purpose chatbot can't be trusted to answer from the institution's own, up-to-date sources.",
    solution:
      "A Next.js and TypeScript front end on a Python AI service. Curated documents are indexed for vector search, the most relevant passages are retrieved for each question, and an LLM answers using only that retrieved context.",
    features: [
      { title: "Curated knowledge base", text: "Answers come from approved institutional sources, not the open web." },
      { title: "Vector search retrieval", text: "Questions are matched to the most relevant passages by meaning, not keywords." },
      { title: "Contextual answers", text: "An LLM composes a clear answer grounded in the retrieved context." },
      { title: "Conversational interface", text: "A familiar chat experience in the browser." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Python", "RAG", "LLMs", "Vector search", "REST APIs"],
    visual: "rag",
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
    slug: "card-management-system",
    title: "Card Management System (CMPRO)",
    sector: "Banking",
    client: "Enterprise banking environment",
    platform: "Web application",
    summary:
      "A banking application that supports card management operations and streamlines card-related processes across the organisation.",
    challenge:
      "Card operations involve several teams and hand-offs, and tracking them manually makes it hard to know where each card request stands.",
    solution:
      "A React and Next.js front end backed by PHP services, working with both MySQL and MSSQL databases so it fits into the bank's existing systems.",
    features: [
      { title: "Card request tracking", text: "Follow each card-related request from start to completion." },
      { title: "Streamlined processes", text: "Card workflows handled in one system instead of manual hand-offs." },
      { title: "Enterprise data", text: "Works with both MySQL and MSSQL databases." },
      { title: "Operational visibility", text: "A clear view of card operations for the teams involved." },
    ],
    stack: ["React", "Next.js", "JavaScript", "PHP", "MySQL", "MSSQL"],
    visual: "cards",
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
    title: "Customer Complaint & Suggestion Portal",
    sector: "Banking",
    client: "Ghanaian financial institution",
    platform: "Web application",
    summary:
      "A customer feedback platform where users submit complaints and suggestions, and administrators monitor, manage and track every case.",
    challenge:
      "Customer feedback arrived through suggestion boxes and ad-hoc emails, so trends were invisible and complaints could fall through the cracks.",
    solution:
      "A React front end on Next.js with REST APIs and a MySQL database. Customers submit feedback through a simple form, and staff triage, assign and close each item from an admin dashboard.",
    features: [
      { title: "Simple public form", text: "Mobile-friendly submission with categories." },
      { title: "Admin dashboard", text: "Filter, assign and resolve feedback in one place." },
      { title: "Status tracking", text: "Every item moves from new → in progress → resolved." },
      { title: "Reporting", text: "Volume by category and status for management." },
    ],
    stack: ["React", "Next.js", "JavaScript", "MySQL", "REST APIs"],
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
      "A full-stack Next.js and React platform with Node.js APIs and MySQL, with parent accounts and daily, weekly and termly order types. The admin back office manages menus and exports orders to CSV for the kitchen.",
    features: [
      { title: "Parent accounts", text: "Secure sign-in with order history per child." },
      { title: "Flexible plans", text: "Daily, weekly and termly ordering." },
      { title: "Menu management", text: "Admins update menus and availability themselves." },
      { title: "Kitchen exports", text: "One-click CSV exports for preparation and delivery." },
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "MySQL", "Tailwind CSS"],
    role: "End to end: front end, back-end APIs, database, authentication, business logic, testing and production deployment.",
    visual: "ordering",
  },
  {
    slug: "momo-fintech-lab",
    title: "MoMo Fintech Lab: Digital Susu",
    sector: "Fintech",
    client: "Product concept",
    platform: "Mobile + web · Concept",
    summary:
      "A fintech concept that digitises Ghana's traditional susu savings model with automated mobile money contributions, reminders, transparent records and scheduled payouts.",
    challenge:
      "Traditional susu relies on a collector, cash and handwritten records, which makes contributions hard to track and payouts dependent on trust alone.",
    solution:
      "A Flutter mobile app and Next.js web platform on a Node.js API and MySQL, integrated with mobile money APIs so contributions are collected automatically and every payment is recorded.",
    features: [
      { title: "Automated contributions", text: "Scheduled mobile money collections instead of cash hand-offs." },
      { title: "Payment tracking", text: "Every contribution recorded and visible to the member." },
      { title: "Reminders", text: "Nudges before each contribution is due." },
      { title: "Scheduled payouts", text: "Payouts released on a clear, transparent schedule." },
    ],
    stack: ["Flutter", "Next.js", "Node.js", "MySQL", "Mobile Money APIs"],
    visual: "savings",
  },
  {
    slug: "donation-collection-system",
    title: "Donation Collection System",
    sector: "Non-profit",
    client: "Donation collection programme",
    platform: "Web application",
    summary:
      "A digital platform for managing donation collections, contributor information, transaction records and collection activities.",
    challenge:
      "Donations were tracked by hand, which made records slow to reconcile and hard to report on, and put contributor details at risk of being lost.",
    solution:
      "A React and Next.js application with REST APIs and MySQL that records each contributor and transaction in one place and tracks collection activities over time.",
    features: [
      { title: "Contributor records", text: "Contributor details kept in one searchable place." },
      { title: "Transaction history", text: "Every donation recorded against its contributor." },
      { title: "Collection activities", text: "Track collection drives and their totals." },
      { title: "Less paperwork", text: "Replaces manual record books with a single system." },
    ],
    stack: ["React", "Next.js", "TypeScript", "MySQL", "REST APIs"],
    visual: "donations",
  },
  {
    slug: "visitor-management-system",
    title: "Visitor Management System",
    sector: "Operations",
    client: "Front-desk operations",
    platform: "Web application",
    summary:
      "A digital visitor registration and monitoring system that replaces manual visitor books with centralised registration, tracking and reporting.",
    challenge:
      "Paper visitor books are hard to search, give no live picture of who is on site, and make reporting a manual exercise.",
    solution:
      "A React and Next.js application with REST APIs and MySQL where reception registers visitors, checks them in and out, and management reviews visit history and reports.",
    features: [
      { title: "Visitor registration", text: "Quick sign-in at the front desk." },
      { title: "Check-in / check-out", text: "See who is currently on site." },
      { title: "Central records", text: "Every visit stored and searchable." },
      { title: "Reporting", text: "Visit history and summaries for management." },
    ],
    stack: ["React", "Next.js", "JavaScript", "MySQL", "REST APIs"],
    visual: "visitors",
  },
  {
    slug: "staff-attendance-system",
    title: "Staff Attendance System",
    sector: "Operations",
    client: "Workforce management",
    platform: "Mobile + web",
    summary:
      "An employee attendance solution that digitises clock-in and clock-out, with centralised attendance records and administrative monitoring.",
    challenge:
      "Paper registers and manual sign-in sheets made attendance slow to compile and difficult to verify.",
    solution:
      "A Flutter app records location-checked clock-ins and clock-outs, and a Next.js admin portal on MySQL and REST APIs gives administrators a central view of attendance.",
    features: [
      { title: "Mobile clock-in", text: "Staff clock in and out from their phones." },
      { title: "Location check", text: "Geolocation confirms where each clock-in happened." },
      { title: "Central records", text: "All attendance in one database instead of paper registers." },
      { title: "Admin monitoring", text: "A web dashboard for reviewing attendance." },
    ],
    stack: ["Flutter", "Next.js", "MySQL", "REST APIs", "Geolocation"],
    visual: "register",
  },
  {
    slug: "joan-shop",
    title: "Joan Shop: Retail Desktop App",
    sector: "Retail",
    client: "Joan Shop",
    platform: "Desktop application",
    summary:
      "A database-driven desktop application that supports a shop's product management and day-to-day business operations.",
    challenge:
      "Managing products and daily operations by hand made it hard to keep information accurate and up to date.",
    solution:
      "A cross-platform Electron desktop app in TypeScript, using Prisma over a relational database to keep products and business records structured and consistent.",
    features: [
      { title: "Product management", text: "Add, update and organise products in one place." },
      { title: "Business operations", text: "Day-to-day records handled in the app." },
      { title: "Structured data", text: "Prisma models keep records consistent." },
      { title: "Desktop-first", text: "Runs as an installed app on the shop's computer." },
    ],
    stack: ["Electron", "TypeScript", "Prisma", "MySQL"],
    visual: "shop",
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
  {
    slug: "excel-validator",
    title: "Excel Validator",
    sector: "Data quality",
    client: "Internal tooling",
    platform: "Utility · Node.js",
    summary:
      "A utility that validates Excel data, flags invalid records and improves consistency before the data is processed by business systems.",
    challenge:
      "Spreadsheets uploaded into business systems often contain missing, malformed or inconsistent values, which cause failed imports or bad data downstream.",
    solution:
      "A Node.js tool that reads Excel files, checks each row against validation rules and reports exactly which records are invalid and why, so they can be fixed before import.",
    features: [
      { title: "Row-level validation", text: "Every record checked against defined rules." },
      { title: "Clear error reports", text: "Invalid rows identified with the reason." },
      { title: "Consistency checks", text: "Catches formatting and value inconsistencies." },
      { title: "Cleaner imports", text: "Only clean data reaches business systems." },
    ],
    stack: ["JavaScript", "Node.js", "Excel processing libraries"],
    visual: "validator",
  },
  {
    slug: "cryptography-project",
    title: "Cryptography Project",
    sector: "Security",
    client: "Security research",
    platform: "Web application",
    summary:
      "A security-focused project exploring cryptographic techniques and their practical implementation for protecting and securely processing information.",
    challenge:
      "Cryptographic concepts are easy to describe but easy to get wrong in practice, so the project set out to implement them and see how they protect real data.",
    solution:
      "A JavaScript and PHP implementation of cryptographic algorithms, applied to encrypting, decrypting and securely processing information.",
    features: [
      { title: "Encryption & decryption", text: "Practical implementations of cryptographic algorithms." },
      { title: "Secure processing", text: "Handling information so it stays protected." },
      { title: "Client and server", text: "Techniques applied in both JavaScript and PHP." },
      { title: "Applied fundamentals", text: "Hands-on grounding in how cryptography protects real data." },
    ],
    stack: ["JavaScript", "PHP", "Cryptographic algorithms"],
    visual: "crypto",
  },
  {
    slug: "degitech-website",
    title: "DegiTech Consults Website",
    sector: "Professional services",
    client: "DegiTech Consults",
    platform: "Website",
    summary:
      "This website: a professional consulting site that showcases DegiTech's services, technical expertise and completed projects.",
    challenge:
      "The studio needed a fast, credible home that explains its services clearly, shows real work and makes it easy for prospective clients to get in touch.",
    solution:
      "A Next.js, React and TypeScript site styled with Tailwind CSS and deployed on Vercel, with case studies generated from structured content and secure contact and consultation forms.",
    features: [
      { title: "Services & case studies", text: "Content-driven pages that are easy to keep up to date." },
      { title: "Lead capture", text: "Validated contact and consultation-booking forms with email notifications." },
      { title: "Security headers", text: "A strict content security policy and hardened form APIs." },
      { title: "Fast & SEO-ready", text: "Statically generated pages, sitemap and social previews." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    role: "Founder: design, development and deployment.",
    visual: "site",
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
