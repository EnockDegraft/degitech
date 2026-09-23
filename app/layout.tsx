import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RevealObserver } from "@/components/reveal-observer"
import { site } from "@/lib/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Web, Mobile & AI Software, Accra`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: site.url }],
  creator: site.founder.name,
  keywords: [
    "software development Ghana",
    "web development Accra",
    "mobile app development Ghana",
    "Flutter developer Ghana",
    "Next.js developer",
    "face recognition",
    "workflow automation",
    "DegiTech Consults",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#060a16",
  colorScheme: "dark",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: site.description,
  founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.role },
  address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
  areaServed: ["Ghana", "West Africa", "Worldwide (remote)"],
  sameAs: [site.social.github],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal animations only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  )
}
