export default function Services() {
  const residentialServices = [
    {
      icon: '🏠',
      title: 'Residential Installation',
      description: 'Expert air conditioning and heating system installation for homes of all sizes.',
    },
    {
      icon: '🔧',
      title: 'Maintenance & Tune-ups',
      description: 'Regular maintenance to ensure optimal performance and extend system lifespan.',
    },
    {
      icon: '🆘',
      title: 'Emergency Repairs',
      description: '24/7 emergency repair service to keep your home comfortable all year round.',
    },
    {
      icon: '♻️',
      title: 'System Replacement',
      description: 'Professional upgrade and replacement services for outdated HVAC systems.',
    },
  ]

  const commercialServices = [
    {
      icon: '🏢',
      title: 'Commercial Installation',
      description: 'Large-scale HVAC systems for offices, retail, and industrial facilities.',
    },
    {
      icon: '📊',
      title: 'Energy Optimization',
      description: 'Systems designed to reduce energy costs and improve efficiency.',
    },
    {
      icon: '🛡️',
      title: 'Preventive Maintenance',
      description: 'Comprehensive maintenance plans to minimize downtime and extend equipment life.',
    },
    {
      icon: '📞',
      title: '24/7 Priority Support',
      description: 'Dedicated support team for commercial clients with priority response times.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Comprehensive HVAC solutions tailored to your residential or commercial needs
          </p>
        </div>

        {/* Residential Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-heading text-primary mb-8 flex items-center gap-3">
            <span className="text-4xl">🏠</span> Residential Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialServices.map((service, index) => (
              <div
                key={index}
                className="grid-item p-6 bg-white border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:border-accent"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold font-heading text-primary mb-3">
                  {service.title}
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Services */}
        <div>
          <h3 className="text-3xl font-bold font-heading text-primary mb-8 flex items-center gap-3">
            <span className="text-4xl">🏢</span> Commercial Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServices.map((service, index) => (
              <div
                key={index}
                className="grid-item p-6 bg-white border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:border-accent"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold font-heading text-primary mb-3">
                  {service.title}
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
