'use client'

import { Mail, Phone, MapPin, Zap } from 'lucide-react'

export default function CTA() {
  const contacts = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "hello@degitech.com",
      color: "text-blue-400"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+233(0) 506-033-192",
      color: "text-purple-400"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Accra, Ghana",
      color: "text-red-400",
      subtext: "Remote work across the globe"
    },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-40 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl opacity-40" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
            <Zap size={16} />
            Let's Build Something Great
          </div>

          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Ready to Start Your <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Next Project?</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Let's discuss your digital needs and create something extraordinary together. Contact us today for a free consultation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Schedule Consultation</span>
            </button>
            <button className="group px-10 py-4 border-2 border-primary/50 bg-primary/5 rounded-xl font-bold text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <div 
                key={index}
                className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-all duration-500 -z-10" />
                
                {/* Card */}
                <div className="relative h-full p-8 bg-card/50 backdrop-blur border border-border/80 rounded-2xl hover:border-primary/50 transition-all duration-300">
                  
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-all duration-300">
                    <IconComponent className={`w-8 h-8 ${contact.color} transition-transform group-hover:scale-110 duration-300`} />
                  </div>

                  {/* Label */}
                  <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">
                    {contact.label}
                  </p>

                  {/* Value */}
                  <p className="text-2xl font-bold text-foreground mb-2">
                    {contact.value}
                  </p>

                  {/* Subtext if present */}
                  {contact.subtext && (
                    <p className="text-sm text-muted-foreground">
                      {contact.subtext}
                    </p>
                  )}

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Statement */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground text-sm font-light">
            We typically respond to inquiries within <span className="text-primary font-semibold">24 hours</span>
          </p>
        </div>
      </div>
    </section>
  )
}