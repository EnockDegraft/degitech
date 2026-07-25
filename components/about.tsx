'use client'

import { CheckCircle2, Zap, Users, Layers } from 'lucide-react'

export default function About() {
  const reasons = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep expertise in modern web and mobile technologies",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Client-Focused",
      description: "We prioritize your goals and work collaboratively to achieve outstanding results",
      color: "text-yellow-400"
    },
    {
      icon: CheckCircle2,
      title: "Quality First",
      description: "Rigorous testing, best practices, and continuous improvement in everything we do",
      color: "text-green-400"
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      description: "Building products that grow with your business and adapt to future needs",
      color: "text-purple-400"
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-40 relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            {/* Badge */}
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
                <Zap size={16} />
                Why Choose Us
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Why Choose <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DegiTech</span>?
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground font-light max-w-lg leading-relaxed">
              We're a team of passionate developers and designers committed to delivering exceptional digital solutions that exceed expectations.
            </p>

            {/* Reasons Grid */}
            <div className="space-y-4 pt-4">
              {reasons.map((reason, index) => {
                const IconComponent = reason.icon
                return (
                  <div 
                    key={index} 
                    className="group relative animate-in fade-in slide-in-from-left-8 duration-700"
                    style={{ animationDelay: `${100 + index * 100}ms` }}
                  >
                    <div className="flex gap-4 p-4 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/15 group-hover:bg-primary/25 transition-all duration-300">
                          <IconComponent className={`h-6 w-6 ${reason.color} transition-transform group-hover:scale-110 duration-300`} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            {/* Floating shapes background */}
            <div className="absolute -inset-4 space-y-4">
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Main Visual Box */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 rounded-3xl border border-white/20 backdrop-blur overflow-hidden p-12 h-96 flex flex-col items-center justify-center space-y-8">
                
                {/* Animated icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-30 rounded-full animate-pulse" />
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border border-primary/50">
                    <span className="text-5xl animate-bounce" style={{ animationDuration: '2s' }}>🚀</span>
                  </div>
                </div>

                {/* Text content */}
                <div className="text-center space-y-3">
                  <p className="text-2xl font-black text-foreground">Innovating Together</p>
                  <p className="text-muted-foreground text-sm font-light max-w-xs">
                    Building exceptional digital experiences that transform your vision into reality
                  </p>
                </div>

                {/* Stats line */}
                <div className="flex gap-8 pt-4 border-t border-white/10">
                  {[
                    { number: "100%", label: "Dedication" },
                    { number: "5+", label: "Years" },
                    { number: "∞", label: "Impact" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.number}
                      </p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}