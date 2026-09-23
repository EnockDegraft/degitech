export const site = {
  name: "DegiTech Consults",
  shortName: "DegiTech",
  tagline: "Software that runs serious operations.",
  description:
    "DegiTech Consults designs and builds secure web platforms, mobile apps and AI-powered systems for banks, schools, public institutions and growing businesses across Ghana and beyond.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://degitechconsults.vercel.app").replace(/\/$/, ""),
  founder: {
    name: "Enock De-Graft Sarpong",
    role: "Founder & Lead Engineer",
  },
  location: "Accra, Ghana",
  timezone: "GMT (UTC+0)",
  hours: "Mon – Fri, 9:00 – 17:00 GMT",
  responseTime: "within one business day",
  social: {
    github: "https://github.com/enockdegraft",
  },
} as const

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
] as const
