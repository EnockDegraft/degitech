//app/Layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const SITE_URL = "https://degitechconsults.vercel.app"
const SITE_NAME = "DegiTech Consults"
const SITE_DESCRIPTION = "Professional web development and mobile application solutions for your business"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DegiTech Consults | Web & Mobile Development",
    template: "%s | DegiTech Consults",
  },
  description: SITE_DESCRIPTION,
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "DegiTech Consults | Web & Mobile Development",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/modern-web-dev-workspace.png",
        width: 1024,
        height: 683,
        alt: SITE_NAME,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DegiTech Consults | Web & Mobile Development",
    description: SITE_DESCRIPTION,
    images: ["/modern-web-dev-workspace.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
