export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-slate-900 to-slate-800 overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-400 opacity-5 rounded-full blur-3xl" />

      <div className="section-container relative z-10 flex flex-col justify-center py-24">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6 leading-tight">
            Climate Control,<br />
            <span className="text-accent">Perfected</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light">
            Professional HVAC solutions for residential and commercial properties. Expert installation, maintenance, and 24/7 emergency repairs in Metro Manila.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all">
              Schedule Consultation
            </button>
            <button className="btn-secondary text-lg px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all">
              📞 +63 (2) 1234-5678
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>500+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
