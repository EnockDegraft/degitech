import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Target, Award, Zap } from "lucide-react"

export const metadata = {
  title: "About | DegiTech Consults",
  description: "Learn about DegiTech Consults and our mission",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your success is our priority. We align with your business goals.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Excellence in every project, from concept to deployment.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as an extension of your team with transparent communication.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* About Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">DegiTech</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We transform ideas into innovative digital solutions that drive business growth
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2016, DegiTech Consults started with a simple mission: to deliver exceptional web and mobile
              development services that help businesses thrive in the digital age.
            </p>
            <p className="text-muted-foreground mb-4">
              Over the years, we've evolved from a small startup to a dynamic team of 15+ professionals, working with
              clients across various industries from startups to Fortune 500 companies.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to have completed over 50 successful projects, maintaining a 98% client satisfaction
              rate and continuing to innovate in web and mobile development.
            </p>
          </div>
          <img src="/professional-team-collaborating-office.jpg" alt="Team" className="rounded-2xl border border-border" />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-background border border-border rounded-lg p-6">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Talented professionals dedicated to delivering excellence
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            View Full Team
          </button>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Industry Recognition", desc: "Named Best Dev Agency 2023" },
              { title: "Client Success", desc: "98% client satisfaction rate" },
              { title: "Innovation Award", desc: "Tech Innovation Excellence 2024" },
            ].map((achievement) => (
              <div key={achievement.title} className="bg-background border border-border rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to work with us?</h2>
          <p className="text-xl text-muted-foreground mb-8">Let's discuss how we can help your business grow</p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
