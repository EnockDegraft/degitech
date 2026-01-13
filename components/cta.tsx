export default function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your digital needs and create something extraordinary together. Contact us today for a free
          consultation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:shadow-lg text-lg">
            Schedule Consultation
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors text-lg">
            Contact Us
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { label: "Email", value: "hello@degitech.com" },
            { label: "Phone", value: "+1 (555) 123-4567" },
            { label: "Location", value: "Remote - Serving Globally" },
          ].map((contact) => (
            <div key={contact.label} className="space-y-2">
              <p className="text-sm text-muted-foreground uppercase tracking-wide">{contact.label}</p>
              <p className="text-lg font-semibold text-foreground">{contact.value}</p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}
