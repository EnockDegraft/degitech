import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { GithubIcon } from "./icons"
import { Logo } from "./logo"
import { site } from "@/lib/site"
import { services } from "@/lib/services"

const company = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Book a consultation", href: "/consultation" },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" aria-label="DegiTech Consults home">
            <Logo />
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">{site.description}</p>
          <ul className="mt-6 space-y-2.5 text-sm text-muted">
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 text-brand-300" aria-hidden /> {site.location}
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 text-brand-300" aria-hidden /> {site.hours}
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold text-fg">Services</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-muted transition-colors hover:text-fg">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-fg">Company</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted transition-colors hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-sm text-subtle sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-fg">
              Privacy
            </Link>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand/50 hover:text-fg"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
