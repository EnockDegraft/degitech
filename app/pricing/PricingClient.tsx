"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

export default function PricingClient() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      features: ["Up to 2 weeks duration", "1 developer", "Email support", "Basic design", "Code documentation"],
      cta: "Contact Service",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for medium-sized applications",
      features: [
        "Up to 8 weeks duration",
        "2-3 developers",
        "Priority email & chat support",
        "Advanced design & UX",
        "Full documentation",
        "Post-launch support (1 month)",
      ],
      cta: "Contact Service",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale applications",
      features: [
        "Custom duration",
        "Full team allocation",
        "24/7 dedicated support",
        "Custom architecture",
        "Comprehensive documentation",
        "Extended post-launch support",
        "Ongoing maintenance",
      ],
      cta: "Contact Service",
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Pricing Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Simple, Transparent <span className="text-primary">Plans</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom pricing based on your project requirements. Contact our team to discuss your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 relative transition-all ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-2 border-primary scale-105"
                  : "bg-card border border-border text-foreground"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary-foreground text-primary px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.popular ? "text-primary-foreground/80 mb-6" : "text-muted-foreground mb-6"}>
                {plan.description}
              </p>

              <div className="mb-8">
                <p className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>Custom pricing</p>
              </div>

              <button
                onClick={() => (window.location.href = "/consultation")}
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-opacity hover:opacity-90 ${
                  plan.popular ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={20} className="flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Add-on Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "UI/UX Design", price: "GHS 10,000 - GHS 25,000" },
              { title: "API Integration", price: "GHS 5,000 - GHS 15,000" },
              { title: "Database Setup", price: "GHS 7,500 - GHS 17,500" },
              { title: "Deployment & DevOps", price: "GHS 10,000 - GHS 20,000" },
              { title: "Mobile App", price: "GHS 25,000 - GHS 75,000" },
              { title: "Ongoing Support", price: "GHS 2,500/month" },
            ].map((service) => (
              <div key={service.title} className="bg-background border border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-primary font-semibold mb-4">{service.price}</p>
                <button
                  onClick={() => (window.location.href = "/consultation")}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold"
                >
                  Add to Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "How are your prices determined?",
                a: "Our pricing is based on project scope, complexity, timeline, and team requirements. We provide custom quotes after discussing your needs.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment schedules. 50% upfront, 50% on completion.",
              },
              {
                q: "What's included in support?",
                a: "Support includes bug fixes, maintenance, and minor updates for the agreed period.",
              },
              {
                q: "Can you work on existing projects?",
                a: "We can take over projects and provide ongoing development support.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">Let's discuss which plan is best for your project</p>
          <button
            onClick={() => (window.location.href = "/consultation")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
