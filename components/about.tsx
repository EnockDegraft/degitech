export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why Choose DegiTech Consults?</h2>

            <p className="text-lg text-muted-foreground">
              We're a team of passionate developers and designers committed to delivering exceptional digital solutions
              that exceed expectations.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Expert Team",
                  description: "Experienced professionals with deep expertise in modern web and mobile technologies",
                },
                {
                  title: "Client-Focused",
                  description: "We prioritize your goals and work collaboratively to achieve outstanding results",
                },
                {
                  title: "Quality First",
                  description: "Rigorous testing, best practices, and continuous improvement in everything we do",
                },
                {
                  title: "Scalable Solutions",
                  description: "Building products that grow with your business and adapt to future needs",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="inline-block text-6xl">🚀</div>
              <p className="text-primary font-semibold mt-4">Innovating Together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
