export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Responsive, modern websites and web applications built with React, Next.js, and cutting-edge technologies.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces designed with your users in mind and accessibility standards.",
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Scalable server-side solutions and APIs that power your digital products.",
    },
    {
      icon: "🔒",
      title: "Security & Performance",
      description: "Secure, optimized solutions with best practices for speed and reliability.",
    },
    {
      icon: "📊",
      title: "Consulting",
      description: "Expert guidance on technology selection, architecture, and digital transformation strategies.",
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
