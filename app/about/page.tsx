//app/about/page.tsx

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Users, Target, Award, Zap, Code2, MessageSquare, Rocket } from "lucide-react"

export const metadata = {
  title: "About | DegiTech Consults",
  description: "Learn about DegiTech Consults and our mission",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your success is our priority. We align with your business goals.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Excellence in every project, from concept to deployment.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team with transparent communication.",
    },
  ]

  const approach = [
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "You work directly with the person building your product — no account managers, no game of telephone.",
    },
    {
      icon: Code2,
      title: "Modern Tech Stack",
      description: "React, Next.js, and modern backend tooling chosen for performance, security, and long-term maintainability.",
    },
    {
      icon: Rocket,
      title: "Built to Scale",
      description: "Every project is architected so it can grow with your business, not get rebuilt from scratch later.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* About Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">DegiTech</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We transform ideas into innovative digital solutions that drive business growth
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              DegiTech Consults was founded by Enock De-Graft Sarpong with a simple mission: to deliver
              exceptional web and mobile development services that help businesses thrive in the digital age.
            </p>
            <p className="text-muted-foreground mb-4">
              Every project is handled with hands-on attention — from the first discovery call to post-launch
              support — so clients get a direct line to the person actually building their product.
            </p>
            <p className="text-muted-foreground">
              Today, DegiTech Consults works with startups and institutions across web, mobile, and NGO platform
              development, building secure, scalable applications that drive real business value.
            </p>
          </div>
          <img
            src="/modern-web-dev-workspace.png"
            alt="DegiTech Consults development workspace"
            className="rounded-2xl border border-border"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-background border border-border rounded-lg p-6">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Meet the Founder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            The developer behind DegiTech Consults, dedicated to delivering excellence on every project
          </p>
          <Link
            href="/team"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View Profile
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-background border border-border rounded-lg p-8 text-center">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to work with us?</h2>
          <p className="text-xl text-muted-foreground mb-8">Let's discuss how we can help your business grow</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
