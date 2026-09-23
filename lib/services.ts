export type ServiceIcon = "web" | "mobile" | "ai" | "workflow" | "design" | "consulting" | "payments"

export type Service = {
  slug: string
  icon: ServiceIcon
  title: string
  summary: string
  description: string
  deliverables: string[]
  stack: string[]
}

export const services: Service[] = [
  {
    slug: "web-platforms",
    icon: "web",
    title: "Web platforms & portals",
    summary: "Customer portals, dashboards and business systems built on Next.js and React.",
    description:
      "Role-based web applications that replace spreadsheets, paper forms and email chains. Fast on low-bandwidth connections, secure by default, and easy for your team to run.",
    deliverables: ["Role-based access & approvals", "Admin dashboards & reporting", "Integrations with existing systems", "CSV / PDF exports"],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "MySQL"],
  },
  {
    slug: "mobile-apps",
    icon: "mobile",
    title: "Mobile apps",
    summary: "Cross-platform Android and iOS apps in Flutter, shipped to the Play Store and App Store.",
    description:
      "Native-quality mobile apps from one codebase, with offline-friendly flows, biometrics, push notifications and device features like the camera. I handle store submission too.",
    deliverables: ["Android & iOS from one codebase", "Push notifications", "Play Store / App Store release"],
    stack: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    slug: "ai-verification",
    icon: "ai",
    title: "AI & identity verification",
    summary: "Face recognition, liveness detection and practical AI features that run on real devices.",
    description:
      "Applied AI where it earns its place: verifying that a person is who they claim to be, detecting spoofing, and automating judgement calls, with privacy-aware designs that can run on-device.",
    deliverables: ["Face match & liveness checks", "On-device ML (ML Kit, TensorFlow.js)", "Document & data automation", "Privacy-first architecture"],
    stack: ["TensorFlow.js", "ML Kit", "face-api", "Azure AI"],
  },
  {
    slug: "workflow-automation",
    icon: "workflow",
    title: "Workflow automation",
    summary: "Digitise requests, approvals and service desks, with real-time updates and audit trails.",
    description:
      "Turn manual processes into tracked workflows: requisitions, complaints, service tickets and approvals, with escalation rules, notifications and a full audit history.",
    deliverables: ["Multi-step approval flows", "SLA timers & escalation", "Real-time status updates", "Audit logs"],
    stack: ["Node.js", "Express", "Server-Sent Events", "LDAP / SSO"],
  },
  {
    slug: "product-design",
    icon: "design",
    title: "UI/UX & product design",
    summary: "Clear, accessible interfaces designed around the people who use them every day.",
    description:
      "Interface design that makes complex tasks feel simple, from first wireframe to a polished, responsive UI built with a consistent component system.",
    deliverables: ["User flows & wireframes", "Responsive UI design", "Design systems", "Accessibility review"],
    stack: ["Figma", "Tailwind CSS", "shadcn/ui"],
  },
  {
    slug: "consulting",
    icon: "consulting",
    title: "Technical consulting",
    summary: "Architecture reviews, API audits and a plan you can act on before you commit budget.",
    description:
      "An experienced second opinion on architecture, security, vendor proposals and project scope, delivered as a clear written plan with priorities and estimates.",
    deliverables: ["Architecture & API audits", "Security review", "Project scoping & estimates", "Vendor / proposal review"],
    stack: ["Code review", "Threat modelling", "Roadmapping"],
  },
  {
    slug: "payment-gateways",
    icon: "payments",
    title: "Payment gateway integrations",
    summary: "Card, mobile money and bank payment flows built into your web or mobile product.",
    description:
      "End-to-end payment integrations covering checkout, subscriptions and payouts, with reconciliation and webhook handling done right so money never goes unaccounted for.",
    deliverables: ["Card, mobile money & bank transfer checkout", "Subscriptions & recurring billing", "Webhook & reconciliation handling", "PCI-aware, secure by design"],
    stack: ["Stripe", "Paystack", "Flutterwave", "MTN Mobile Money", "Hubtel"],
  },
]
