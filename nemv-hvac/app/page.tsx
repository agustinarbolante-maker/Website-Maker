'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Zap, Clock, Award, Users, Wrench, ThermometerSun, Wind, Droplet } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: ThermometerSun,
      title: 'Air Conditioning Installation',
      description: 'Professional AC unit installation with warranty and expert care.',
    },
    {
      icon: Wind,
      title: 'Ventilation Systems',
      description: 'Complete ventilation solutions for better air quality.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repair',
      description: '24/7 emergency repair and preventive maintenance services.',
    },
    {
      icon: Droplet,
      title: 'Ductwork Services',
      description: 'Duct cleaning, installation, and optimization.',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'Expert Technicians',
      description: 'Certified and experienced professionals.',
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: '24/7 emergency services available.',
    },
    {
      icon: Zap,
      title: 'Quality Guaranteed',
      description: 'High-quality products and workmanship.',
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated support for your satisfaction.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-on-primary py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  Your HVAC Experts in Makati
                </h1>
                <p className="text-lg text-on-primary/90 mb-8 leading-relaxed">
                  Professional heating, ventilation, and air conditioning services. We ensure your comfort year-round with expert installation, maintenance, and repair.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact#booking"
                    className="px-8 py-3 bg-accent text-on-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 text-center"
                  >
                    Book Service Now
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-3 border-2 border-on-primary text-on-primary rounded-lg font-semibold hover:bg-on-primary/10 transition-colors duration-200 text-center"
                  >
                    View Services
                  </Link>
                </div>
              </div>
              <div className="animate-slide-up">
                <div className="bg-on-primary/10 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Wind size={80} className="mx-auto mb-4 text-accent" />
                    <p className="text-on-primary/80">Professional HVAC Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose NEMV HVAC?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-border"
                  >
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-secondary text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-border hover:border-accent"
                  >
                    <Icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-secondary mb-4">{service.description}</p>
                    <Link
                      href="/services"
                      className="text-accent font-medium hover:text-accent/80 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-on-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Comfort?</h2>
            <p className="text-lg text-on-primary/90 mb-8">
              Contact us today for a free consultation and quote. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact#booking"
                className="px-8 py-3 bg-accent text-on-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+639175410002"
                className="px-8 py-3 border-2 border-on-primary text-on-primary rounded-lg font-semibold hover:bg-on-primary/10 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
