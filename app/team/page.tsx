import Header from "@/components/header"
import Footer from "@/components/footer"
import { Linkedin, Twitter, Mail } from "lucide-react"

export const metadata = {
  title: "Team | DegiTech Consults",
  description: "Meet the talented team behind DegiTech Consults",
}

export default function TeamPage() {
  const team = [
    {
      name: "Enock De-Graft Sarpong",
      role: "CEO & Founder",
      bio: "5+ years in tech leadership and strategy",
      image: "/professional-woman-portrait.png",
    },
    {
      name: "Enock De-Graft Sarpong",
      role: "CTO & Lead Developer",
      bio: "Expert in full-stack development and architecture",
      image: "/professional-man-portrait.png",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Team Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate professionals dedicated to delivering exceptional results
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 h-64 bg-secondary">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-2 bg-primary rounded-full hover:opacity-90 transition-opacity">
                      <Linkedin size={20} className="text-primary-foreground" />
                    </button>
                    <button className="p-2 bg-primary rounded-full hover:opacity-90 transition-opacity">
                      <Twitter size={20} className="text-primary-foreground" />
                    </button>
                    <button className="p-2 bg-primary rounded-full hover:opacity-90 transition-opacity">
                      <Mail size={20} className="text-primary-foreground" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "15+", label: "Team Members" },
              { number: "200+", label: "Combined Years Experience" },
              { number: "4", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for talented professionals to join our growing team
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            View Careers
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
