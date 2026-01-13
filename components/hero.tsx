export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Transform Your Vision Into
                <span className="text-primary"> Digital Reality</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Custom web development and mobile applications built with cutting-edge technology and user-first design
                principles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:shadow-lg">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "30+", label: "Happy Clients" },
                { number: "8+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center">
              <div className="inline-block text-6xl">💻</div>
              <p className="text-primary font-semibold mt-4">Building the Future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
