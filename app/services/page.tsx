import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle, Code2, Smartphone, Zap, Users } from "lucide-react"

export const metadata = {
  title: "Services | DegiTech Consults",
  description: "Explore our web development and mobile app services",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack web applications built with modern technologies",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Custom Backends",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Apps",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      icon: Zap,
      title: "NGO Platform Development",
      description: "Specialized solutions for non-profit organizations and NGOs",
      features: [
        "Donation Management",
        "Fund Tracking",
        "Volunteer Management",
        "Impact Reporting",
        "Compliance Tools",
        "Transparency Dashboard",
      ],
    },
    {
      icon: Users,
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces for your applications",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems", "Usability Testing", "Brand Design"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Services Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web and mobile development solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-colors group"
                >
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our <span className="text-primary">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Discovery", desc: "Understanding your needs and goals" },
              { step: 2, title: "Design", desc: "Creating wireframes and prototypes" },
              { step: 3, title: "Development", desc: "Building your solution" },
              { step: 4, title: "Deployment", desc: "Launch and ongoing support" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-background border border-border rounded-lg p-6 text-center">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to start your project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Schedule Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
