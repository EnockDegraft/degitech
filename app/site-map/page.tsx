//app/sitemap/page.tsx
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Map, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Sitemap | DegiTech Consults",
  description: "Browse every page on the DegiTech Consults website",
}

const groups = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Consultation", href: "/consultation" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Sitemap", href: "/site-map" },
    ],
  },
]

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
            <Map className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Site<span className="text-primary">map</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every page on this site, in one place
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-lg font-bold text-foreground uppercase tracking-wider mb-4">{group.title}</h2>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <ChevronRight size={16} className="text-primary/50 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
