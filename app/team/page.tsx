//app/team/page.tsx
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Mail } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export const metadata = {
  title: "Team | DegiTech Consults",
  description: "Meet Enock De-Graft Sarpong, founder and lead developer at DegiTech Consults",
}

export default function TeamPage() {
  const founder = {
    name: "Enock De-Graft Sarpong",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer specializing in modern web and mobile applications, from architecture through deployment.",
    image: "/professional-man-portrait.png",
  }

  const skills = [
    { number: "10+", label: "Projects Delivered" },
    { number: "20+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Team Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Meet the <span className="text-primary">Founder</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DegiTech Consults is a solo studio built around hands-on attention to every project
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl h-80 md:h-96 bg-secondary">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href="mailto:hello@degitech.com"
                    className="p-3 bg-primary rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Email"
                  >
                    <Mail size={20} className="text-primary-foreground" />
                  </a>
                  <a
                    href="https://wa.me/233506033192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary rounded-full hover:opacity-90 transition-opacity"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={20} className="text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">{founder.name}</h2>
              <p className="text-primary font-semibold mb-4 text-lg">{founder.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{founder.bio}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@degitech.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail size={18} />
                  Email Me
                </a>
                <a
                  href="https://wa.me/233506033192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg font-semibold text-foreground hover:border-primary transition-colors"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {skills.map((stat) => (
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
          <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Have a project in mind? Reach out and let's talk about how DegiTech Consults can help
          </p>
          <Link
            href="/consultation"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
