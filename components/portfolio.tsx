export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-featured e-commerce solution with payment integration and inventory management",
    },
    {
      title: "Mobile Fitness App",
      category: "Mobile Development",
      description: "Cross-platform fitness tracking application with social features and personalized workouts",
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Enterprise-grade analytics dashboard with real-time data visualization",
    },
    {
      title: "Travel Booking System",
      category: "Web Development",
      description: "Comprehensive travel booking platform with multi-vendor integration",
    },
    {
      title: "Health App",
      category: "Mobile Development",
      description: "Healthcare management mobile app with telemedicine capabilities",
    },
    {
      title: "AI Content Platform",
      category: "Full Stack",
      description: "Intelligent content generation platform powered by machine learning",
    },
  ]

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Showcase of our recent work and successful client partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <span className="text-3xl">📦</span>
              </div>

              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                View Project
                <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
