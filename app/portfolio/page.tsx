import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata = {
  title: "Portfolio | DegiTech Consults",
  description: "View our recent projects and case studies",
}

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with payment integration and inventory management",
      image: "/ecommerce-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Cross-platform mobile app for tracking workouts and nutrition",
      image: "/fitness-app-interface.png",
      technologies: ["React Native", "Firebase", "SQLite"],
      link: "#",
    },
    {
      id: 3,
      title: "CRM System",
      category: "Web Development",
      description: "Enterprise-level CRM system with advanced analytics and reporting",
      image: "/crm-dashboard-analytics.jpg",
      technologies: ["Next.js", "PostgreSQL", "TypeScript", "Chart.js"],
      link: "#",
    },
    {
      id: 4,
      title: "Social Media App",
      category: "Mobile Development",
      description: "Social networking platform with real-time messaging and notifications",
      image: "/social-media-app-interface.png",
      technologies: ["Flutter", "Firebase", "Socket.io"],
      link: "#",
    },
    {
      id: 5,
      title: "NGO Donation Platform",
      category: "Web Development",
      description: "Secure platform for managing donations to NGOs with transparency and impact tracking",
      image: "/ngo-donation-platform.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      id: 6,
      title: "NGO Fund Management System",
      category: "Web Development",
      description: "Comprehensive fund management system for NGOs with reporting and compliance features",
      image: "/ngo-fund-management.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Portfolio Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the projects we've built for leading companies across various industries
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-colors"
              >
                <div className="relative overflow-hidden h-48 bg-secondary">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      href={project.link}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-semibold">{project.category}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "15+", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Want to build something amazing?</h2>
          <p className="text-xl text-muted-foreground mb-8">Let's create your next success story</p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
