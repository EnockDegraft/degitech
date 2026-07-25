'use client'

import Link from "next/link"
import { Mail, ExternalLink, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    services: ["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"],
    company: ["About", "Portfolio", "Blog", "Careers"],
    legal: ["Privacy Policy", "Terms of Service", "Contact", "Sitemap"]
  }

  const socials = [
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-slate-300" },
  ]

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
            <div className="pt-4 space-y-3">
              <p className="text-sm font-semibold text-foreground">Stay updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 bg-primary/10 border border-primary/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                />
                <button className="group px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">No spam, just updates we think you'll love.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-3 gap-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((item) => (
                  <li key={item}>
                    <Link 
                      href="#" 
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-300" />
                      {item}
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
                  <li key={item}>
                    <Link 
                      href="#" 
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-300" />
                      {item}
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
                  <li key={item}>
                    <Link 
                      href="#" 
                      className="text-muted-foreground hover:text-primary text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-300" />
                      {item}
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

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socials.map((social, index) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`group relative w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:border-primary/50 hover:bg-primary/20`}
                  title={social.name}
                  aria-label={social.name}
                >
                  <IconComponent size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-40 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
        <button className="group relative p-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full shadow-2xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110">
          <ArrowRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  )
}