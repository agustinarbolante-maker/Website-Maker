'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Air Conditioning Installation',
      description: 'Professional AC installation services',
      details: [
        'Expert system selection and sizing',
        'Professional installation with warranty',
        'Energy-efficient units available',
        'Indoor and outdoor unit setup',
        'Full testing and documentation',
      ],
      icon: '⚙️',
    },
    {
      title: 'AC Maintenance & Servicing',
      description: 'Keep your system running at peak performance',
      details: [
        'Regular filter replacements',
        'System cleaning and inspection',
        'Refrigerant level checks',
        'Electrical component testing',
        'Maintenance plans available',
      ],
      icon: '🔧',
    },
    {
      title: 'Air Conditioning Repair',
      description: '24/7 emergency repair services',
      details: [
        'Diagnostic testing and troubleshooting',
        'Compressor and component repair',
        'Refrigerant leak detection',
        'Emergency 24/7 service',
        'All brands and types covered',
      ],
      icon: '🛠️',
    },
    {
      title: 'Commercial AC Solutions',
      description: 'Large-scale cooling for businesses',
      details: [
        'Commercial unit installation',
        'Multi-zone system setup',
        'Preventive maintenance plans',
        'High-capacity refrigeration',
        'Energy optimization services',
      ],
      icon: '🏢',
    },
    {
      title: 'Refrigeration Services',
      description: 'Professional refrigeration support',
      details: [
        'Cold storage maintenance',
        'Commercial fridge repair',
        'Display case servicing',
        'Walk-in cooler setup',
        'Regular inspections',
      ],
      icon: '❄️',
    },
    {
      title: 'Preventive Maintenance',
      description: 'Extend your AC system lifespan',
      details: [
        'Quarterly service plans',
        'Priority emergency response',
        'Discounted repair rates',
        'Extended equipment warranty',
        'Performance optimization',
      ],
      icon: '✓',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900">
            Luxe Aire <span className="text-blue-600">Cooling</span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition font-medium">Home</Link>
            <Link href="/services" className="text-blue-600 font-bold">Services</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-blue-600 transition font-medium">Gallery</Link>
            <Link href="/tips" className="text-slate-700 hover:text-blue-600 transition font-medium">Tips</Link>
            <Link href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Complete air conditioning and refrigeration solutions for homes and businesses</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="p-10 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Call Us', desc: 'Contact us for a free consultation' },
              { step: '2', title: 'Assessment', desc: 'We evaluate your AC needs' },
              { step: '3', title: 'Solution', desc: 'Get a quote and service plan' },
              { step: '4', title: 'Installation', desc: 'Professional service completed' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">{item.step}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
                {idx < 3 && <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-blue-300"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-5xl font-bold mb-6">Need AC Service Today?</h3>
          <p className="text-xl mb-10 opacity-90">Contact us for free assessment and competitive quote</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition">
            Schedule Service
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-white mb-4 text-lg">Luxe Aire Cooling</h4>
              <p className="text-sm">Premium AC services for Manila</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Contact</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:285612078" className="hover:text-white transition">285612078</a></li>
                <li><a href="mailto:luxaircooling@gmail.com" className="hover:text-white transition">luxaircooling@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Hours</h5>
              <ul className="space-y-2 text-sm">
                <li>Mon-Fri: 8AM - 6PM</li>
                <li>Sat: 9AM - 4PM</li>
                <li>Sun: 24/7 Emergency</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Luxe Aire Cooling. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
