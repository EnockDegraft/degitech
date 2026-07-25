'use client'

import { ArrowUpRight } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-featured e-commerce solution with payment integration and inventory management",
      tags: ["React", "Next.js", "Stripe", "Node.js"],
      gradient: "from-blue-600 to-blue-400",
      icon: "🛍️"
    },
    {
      title: "Mobile Fitness App",
      category: "Mobile Development",
      description: "Cross-platform fitness tracking application with social features and personalized workouts",
      tags: ["Flutter", "Firebase", "AI/ML"],
      gradient: "from-purple-600 to-pink-400",
      icon: "💪"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Enterprise-grade analytics dashboard with real-time data visualization",
      tags: ["React", "WebSocket", "D3.js", "PostgreSQL"],
      gradient: "from-green-600 to-emerald-400",
      icon: "📊"
    },
    {
      title: "Travel Booking System",
      category: "Web Development",
      description: "Comprehensive travel booking platform with multi-vendor integration",
      tags: ["Next.js", "Tailwind", "APIs"],
      gradient: "from-orange-600 to-red-400",
      icon: "✈️"
    },
    {
      title: "Health App",
      category: "Mobile Development",
      description: "Healthcare management mobile app with telemedicine capabilities",
      tags: ["React Native", "WebRTC", "Node.js"],
      gradient: "from-red-600 to-pink-400",
      icon: "🏥"
    },
    {
      title: "AI Content Platform",
      category: "Full Stack",
      description: "Intelligent content generation platform powered by machine learning",
      tags: ["Python", "TensorFlow", "React", "GPT"],
      gradient: "from-indigo-600 to-purple-400",
      icon: "🤖"
    },
  ]

  return (
    <section id="portfolio" className="py-24 sm:py-40 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
            Recent Work
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            Projects that <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Made an Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-xl">
            Showcase of our recent work and successful client partnerships
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-accent/40 rounded-2xl blur opacity-0 group-hover:opacity-60 transition-all duration-500 -z-10" />
              
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-card to-card/50 backdrop-blur border border-border/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
                
                {/* Top gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Image/Icon Section */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                  <div className="text-8xl opacity-80 transform group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Category badge */}
                  <div className="inline-block w-fit px-3 py-1 bg-primary/15 border border-primary/30 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="inline-block px-3 py-1 bg-secondary/50 text-foreground text-xs font-semibold rounded-full border border-border/50 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group/btn w-full py-3 px-4 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/30 rounded-lg text-primary font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-between hover:gap-3">
                    <span>View Project</span>
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}