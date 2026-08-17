'use client'

import Link from 'next/link'
import { Code2, Smartphone, Palette, Zap, Lock, Brain } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "Fast, secure, and optimized for growth. Responsive, modern websites and web applications built with React, Next.js, and cutting-edge technologies.",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "group-hover:border-blue-500/50",
      accentColor: "text-blue-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "group-hover:border-purple-500/50",
      accentColor: "text-purple-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces designed with your users in mind and accessibility standards.",
      color: "from-pink-500/20 to-pink-600/10",
      borderColor: "group-hover:border-pink-500/50",
      accentColor: "text-pink-400"
    },
    {
      icon: Zap,
      title: "Backend Development",
      description: "Scalable server-side solutions and APIs that power your digital products.",
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "group-hover:border-yellow-500/50",
      accentColor: "text-yellow-400"
    },
    {
      icon: Lock,
      title: "Security & Performance",
      description: "Secure, optimized solutions with best practices for speed and reliability.",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "group-hover:border-green-500/50",
      accentColor: "text-green-400"
    },
    {
      icon: Brain,
      title: "Consulting",
      description: "Expert guidance on technology selection, architecture, and digital transformation strategies.",
      color: "from-indigo-500/20 to-indigo-600/10",
      borderColor: "group-hover:border-indigo-500/50",
      accentColor: "text-indigo-400"
    },
  ]

  return (
    <section id="services" className="py-24 sm:py-40 relative overflow-hidden bg-gradient-to-b from-background to-primary/5">
      {/* Decorative elements */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
            Our Expertise
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            Services Built for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-xl">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Link
                href="/services"
                key={index}
                className={`group relative block h-full animate-in fade-in slide-in-from-bottom-8 duration-700 ${`delay-[${index * 100}ms]`}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background glow */}
                <div className={`absolute -inset-px bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Card */}
                <div className={`relative h-full p-8 bg-card/50 backdrop-blur-sm border border-border/80 rounded-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl overflow-hidden`}>
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex p-3 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-500 transform group-hover:scale-110">
                    <IconComponent className={`w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Bottom CTA */}
                  <div className="mt-6 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}