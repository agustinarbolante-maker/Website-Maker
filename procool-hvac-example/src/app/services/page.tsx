'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { PlusCircle, Settings, AlertCircle, Wrench, CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: PlusCircle,
      title: 'AC Installation',
      description: 'Professional installation of residential and commercial air conditioning systems with full warranty coverage.',
      features: ['Expert assessment', 'Quality installation', 'System testing', '5-year warranty'],
    },
    {
      icon: Settings,
      title: 'Maintenance & Servicing',
      description: 'Regular maintenance to keep your HVAC system running efficiently and prevent costly breakdowns.',
      features: ['Annual checkups', 'Filter replacement', 'System cleaning', 'Performance optimization'],
    },
    {
      icon: AlertCircle,
      title: '24/7 Emergency Repair',
      description: 'Quick response to urgent HVAC issues. Available round-the-clock for emergencies.',
      features: ['Same-day service', 'Diagnostics included', 'Emergency hotline', 'Fast response times'],
    },
    {
      icon: Wrench,
      title: 'Ductwork Services',
      description: 'Complete ductwork solutions including installation, cleaning, and repairs.',
      features: ['Duct inspection', 'Professional cleaning', 'Repair & sealing', 'New duct installation'],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-slate-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our HVAC Services</h1>
            <p className="text-lg text-gray-200">
              Comprehensive solutions for all your heating, ventilation, and air conditioning needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden animate-fade-in"
                  >
                    <div className="p-8">
                      <Icon className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-secondary mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-secondary">
                            <CheckCircle size={18} className="text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-block mt-6 px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                      >
                        Request Service
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
