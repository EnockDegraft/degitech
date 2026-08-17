//app/terms-of-service/page.tsx
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { FileText } from "lucide-react"

export const metadata = {
  title: "Terms of Service | DegiTech Consults",
  description: "The terms that govern your use of the DegiTech Consults website and services",
}

const sections = [
  {
    title: "1. Agreement to Terms",
    body: [
      "By accessing this website or engaging DegiTech Consults for services, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site or our services.",
    ],
  },
  {
    title: "2. Services",
    body: [
      "DegiTech Consults provides web development, mobile application development, UI/UX design, and related consulting services. The specific scope, timeline, and deliverables for any engagement are defined in a separate proposal or agreement between DegiTech Consults and the client.",
    ],
  },
  {
    title: "3. Quotes & Payment",
    body: [
      "Pricing shown on this site is indicative and subject to change based on project scope. Final pricing is confirmed after a consultation. Unless otherwise agreed in writing, projects follow a 50% upfront, 50% on completion payment structure.",
    ],
  },
  {
    title: "4. Intellectual Property",
    body: [
      "Upon full payment, clients receive ownership of the custom code and deliverables created specifically for their project, excluding any pre-existing tools, libraries, or frameworks owned by third parties or DegiTech Consults.",
    ],
  },
  {
    title: "5. Client Responsibilities",
    body: [
      "Clients are responsible for providing timely feedback, content, and access to systems needed to complete a project. Delays in providing these materials may affect project timelines.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    body: [
      "DegiTech Consults will make every reasonable effort to deliver high-quality, secure work. To the fullest extent permitted by law, DegiTech Consults is not liable for indirect, incidental, or consequential damages arising from the use of delivered software or this website.",
    ],
  },
  {
    title: "7. Website Use",
    body: [
      "This website and its content are provided \"as is\" for informational purposes. You agree not to misuse the site, attempt unauthorized access, or interfere with its normal operation.",
    ],
  },
  {
    title: "8. Changes to These Terms",
    body: [
      "We may revise these Terms of Service from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "9. Governing Law",
    body: [
      "These terms are governed by the laws applicable in Ghana, without regard to conflict of law principles.",
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The ground rules for using this website and working with DegiTech Consults.
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Questions about these terms?</h2>
          <p className="text-muted-foreground mb-8">We're happy to walk through anything before you get started.</p>
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
