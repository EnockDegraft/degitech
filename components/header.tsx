"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Consultation", href: "/consultation" },
    { label: "Contact", href: "/contact" }
  ]

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300 overflow-hidden">
              {/* Animated gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <span className="relative">D</span>
            </div>
            <div className="flex flex-col hidden sm:block">
              <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                DegiTech
              </span>
              <span className="text-xs font-semibold text-primary/70 group-hover:text-primary transition-colors duration-300">
                Consults
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-0.5 items-center bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                    active
                      ? "text-primary-foreground bg-primary shadow-lg shadow-primary/50"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Animated background */}
                  {active && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full -z-10" />
                  )}
                  <span className="relative flex items-center gap-1.5">
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group hover:gap-3"
            >
              <span>Get Started</span>
              <Zap size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 hover:bg-primary/10 rounded-lg transition-all duration-300 text-foreground hover:text-primary"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} className="transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-6 border-t border-border/50 pt-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    active
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {active && (
                      <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                    )}
                    {item.label}
                  </span>
                </Link>
              )
            })}
            
            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              className="block w-full mt-4 px-6 py-3.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-center font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}