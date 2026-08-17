//app/privacy-policy/page.tsx
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | DegiTech Consults",
  description: "How DegiTech Consults collects, uses, and protects your information",
}

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you fill out a form on this site — the contact form, the consultation booking form, or the newsletter signup — we collect the information you provide directly, such as your name, email address, phone number, and any project details or messages you share.",
      "We also use Vercel Analytics to collect anonymized, aggregate usage data (such as page views and general traffic patterns) to help us understand how the site is used. This data is not tied to your personal identity.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "Information submitted through our forms is used solely to respond to your inquiry, schedule a consultation, or send the updates you signed up for. We do not sell, rent, or trade your personal information to third parties.",
      "Form submissions are delivered via email using Resend, our transactional email provider, purely to notify our team and to send you a confirmation.",
    ],
  },
  {
    title: "3. Data Retention",
    body: [
      "We retain the information you submit for as long as reasonably necessary to respond to your inquiry and maintain business records, or until you request that it be deleted.",
    ],
  },
  {
    title: "4. Your Rights",
    body: [
      "You can request access to, correction of, or deletion of any personal information we hold about you at any time by contacting us at hello@degitech.com.",
    ],
  },
  {
    title: "5. Cookies & Tracking",
    body: [
      "This site does not use advertising or third-party tracking cookies. Vercel Analytics operates on a cookie-less basis for aggregate traffic insights.",
    ],
  },
  {
    title: "6. Third-Party Services",
    body: [
      "We rely on trusted third-party services to operate this site, including Vercel (hosting and analytics) and Resend (transactional email). These providers process data on our behalf under their own privacy and security practices.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices. The \"Last updated\" date below will always reflect the most recent revision.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy matters. Here's what we collect, why, and how we protect it.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last updated: August 17, 2026</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-border pb-10 last:border-b-0">
              <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
              {section.body.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Questions about your data?</h2>
          <p className="text-muted-foreground mb-8">Reach out anytime and we'll be happy to help.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
