"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Clock, User } from "lucide-react"
import { useState } from "react"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    projectType: "web-development",
    budget: "not-sure",
    description: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Send booking confirmation email to user and admin
      const response = await fetch("/api/send-consultation-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          adminEmail: "enocksarpong64@gmail.com",
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          projectType: "web-development",
          budget: "not-sure",
          description: "",
        })
      }
    } catch (error) {
      console.error("Error sending consultation email:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Consultation Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Book a <span className="text-primary">Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation with our team to discuss your project requirements and goals
          </p>
        </div>
      </section>

      {/* Consultation Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Calendar,
              title: "Flexible Scheduling",
              content: "Choose a date and time that works best for you",
            },
            {
              icon: Clock,
              title: "30 Minutes",
              content: "Quick overview call to understand your needs",
            },
            {
              icon: User,
              title: "Expert Team",
              content: "Talk directly with our project leads and developers",
            },
          ].map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="bg-card border border-border rounded-2xl p-8 text-center">
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.content}</p>
              </div>
            )
          })}
        </div>

        {/* Consultation Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Schedule Your Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="ngo-platform">NGO Platform</option>
                    <option value="both">Both Web & Mobile</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-semibold mb-2">Preferred Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="not-sure">Not Sure Yet</option>
                  <option value="under-10k">Under GHS 10,000</option>
                  <option value="10k-50k">GHS 10,000 - GHS 50,000</option>
                  <option value="50k-100k">GHS 50,000 - GHS 100,000</option>
                  <option value="100k-plus">GHS 100,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Project Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and any specific requirements"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Calendar size={20} />
                {loading ? "Scheduling..." : "Schedule Consultation"}
              </button>

              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-700">
                  <p className="font-semibold mb-2">Consultation Scheduled!</p>
                  <p className="text-sm">
                    Thank you! We've received your request. A confirmation email has been sent to you and our team.
                    We'll contact you shortly to confirm your consultation appointment.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Consultation FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does a consultation cost?",
                a: "Our initial consultation is completely free. It's a great opportunity for us to understand your needs and for you to learn about our services.",
              },
              {
                q: "What should I prepare for the consultation?",
                a: "Come with a clear idea of your project goals, any existing documentation, and your budget. Our team will guide you through the rest.",
              },
              {
                q: "How long is the consultation?",
                a: "Each consultation is 30 minutes. This is enough time to discuss your project and understand how we can help.",
              },
              {
                q: "What happens after the consultation?",
                a: "We'll prepare a proposal with recommendations and next steps. You can then decide if you'd like to move forward with us.",
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

      <Footer />
    </main>
  )
}
