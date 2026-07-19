'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Wrench, AlertCircle, Settings, PlusCircle, CheckCircle } from 'lucide-react';

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
      features: ['Same-day service', 'Diagnostics included', 'Emergency hotline', 'Temporary solutions available'],
    },
    {
      icon: Wrench,
      title: 'Ductwork Services',
      description: 'Complete ductwork solutions including installation, cleaning, and repairs.',
      features: ['Duct inspection', 'Professional cleaning', 'Repair & sealing', 'New duct installation'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-on-primary py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our HVAC Services</h1>
            <p className="text-lg text-on-primary/90">
              Comprehensive solutions for all your heating, ventilation, and air conditioning needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <div className="p-8">
                      <Icon className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
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
                        href="/contact#booking"
                        className="inline-block mt-6 px-6 py-2 bg-accent text-on-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
                      >
                        Request Service
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Trust NEMV HVAC?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Years Experience</h3>
                <p className="text-secondary">Serving Makati and surrounding areas with excellence.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">2000+</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Happy Customers</h3>
                <p className="text-secondary">Trusted by residential and commercial clients.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Emergency Service</h3>
                <p className="text-secondary">Always available when you need us most.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-on-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need Professional HVAC Service?</h2>
            <p className="text-lg text-on-primary/90 mb-8">
              Contact us today for a free consultation. Our expert technicians are ready to help.
            </p>
            <Link
              href="/contact#booking"
              className="inline-block px-8 py-3 bg-accent text-on-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              Schedule Your Service
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
