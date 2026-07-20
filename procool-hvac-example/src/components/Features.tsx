export default function Features() {
  const features = [
    {
      icon: '🌟',
      title: 'Expert Technicians',
      description: 'Highly trained and certified HVAC specialists with years of industry experience.',
    },
    {
      icon: '⚡',
      title: 'Fast Response Time',
      description: 'Same-day service appointments available for urgent repairs and installations.',
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden fees. Free estimates for all services.',
    },
    {
      icon: '🛠️',
      title: 'Quality Guarantee',
      description: 'Full warranty on all installations and repairs backed by our service guarantee.',
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly Solutions',
      description: 'Energy-efficient systems that reduce environmental impact and save costs.',
    },
    {
      icon: '📱',
      title: 'Easy Booking',
      description: 'Simple online booking system or call our team to schedule your service.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            Why Choose ProCool HVAC?
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Industry-leading expertise and customer commitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid-item p-8 bg-gradient-to-br from-slate-50 to-white border border-border rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold font-heading text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
