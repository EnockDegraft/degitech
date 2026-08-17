'use client'

import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, ArrowUp, Loader2, Check } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterState, setNewsletterState] = useState<"idle" | "loading" | "success" | "error">("idle")

  const footerLinks = {
    services: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "Mobile Apps", href: "/services#mobile-applications" },
      { label: "UI/UX Design", href: "/services#ui-ux-design" },
      { label: "Consulting", href: "/consultation" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/site-map" },
    ],
  }

  const contactChannels = [
    { name: "Email", icon: Mail, href: "mailto:hello@degitech.com", color: "hover:text-blue-400" },
    { name: "Call", icon: Phone, href: "tel:+233506033192", color: "hover:text-blue-500" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/233506033192", color: "hover:text-green-400" },
  ]

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return

    setNewsletterState("loading")
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: newsletterEmail,
          service: "Newsletter Signup",
          message: `New newsletter subscription request from ${newsletterEmail}`,
          recipientEmail: "enocksarpong64@gmail.com",
        }),
      })

      if (response.ok) {
        setNewsletterState("success")
        setNewsletterEmail("")
        setTimeout(() => setNewsletterState("idle"), 4000)
      } else {
        setNewsletterState("error")
        setTimeout(() => setNewsletterState("idle"), 4000)
      }
    } catch (error) {
      console.error("Newsletter signup error:", error)
      setNewsletterState("error")
      setTimeout(() => setNewsletterState("idle"), 4000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-slate-950 border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-16 pb-16 border-b border-border/50">

          {/* Brand & Description */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">DegiTech</span>
                <span className="text-xs text-muted-foreground font-semibold">Consults</span>
              </div>
            </Link>

            <p className="text-muted-foreground text-base leading-relaxed max-w-md font-light">
              Transforming ideas into exceptional digital solutions. We build secure, scalable, and modern applications that drive real business value.
            </p>

            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSubmit} className="pt-4 space-y-3">
              <p className="text-sm font-semibold text-foreground">Stay updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={newsletterState === "loading"}
                  className="flex-1 px-4 py-2.5 bg-primary/10 border border-primary/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={newsletterState === "loading"}
                  className="group px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-60"
                  aria-label="Subscribe to newsletter"
                >
                  {newsletterState === "loading" ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : newsletterState === "success" ? (
                    <Check size={18} />
                  ) : (
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>
              {newsletterState === "success" && (
                <p className="text-xs text-green-500 font-medium">You're subscribed! We'll be in touch.</p>
              )}
              {newsletterState === "error" && (
                <p className="text-xs text-red-500 font-medium">Something went wrong. Please try again.</p>
              )}
              {newsletterState === "idle" && (
                <p className="text-xs text-muted-foreground">No spam, just updates we think you'll love.</p>
              )}
            </form>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-3 gap-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-300" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">

          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground text-sm font-light">
              © 2026 <span className="text-primary font-semibold">DegiTech Consults</span>. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Built with modern tech • Powered by innovation
            </p>
          </div>

          {/* Contact Channels */}
          <div className="flex items-center gap-6">
            {contactChannels.map((channel) => {
              const IconComponent = channel.icon
              return (
                <Link
                  key={channel.name}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group relative w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-muted-foreground ${channel.color} transition-all duration-300 hover:border-primary/50 hover:bg-primary/20`}
                  title={channel.name}
                  aria-label={channel.name}
                >
                  <IconComponent size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 group p-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full shadow-2xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500"
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  )
}
