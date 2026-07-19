'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [stats, setStats] = useState({ customers: 0, experience: 0, projects: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'expo.out',
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'expo.out',
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'expo.out',
      });

      gsap.from('.service-card', {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top center+=100',
        },
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let hasTriggered = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          hasTriggered = true;
          gsap.to({}, {
            duration: 2,
            onUpdate: function() {
              const progress = this.progress();
              setStats({
                customers: Math.floor(500 * progress),
                experience: Math.floor(15 * progress),
                projects: Math.floor(2500 * progress),
              });
            },
            ease: 'power2.out',
          });
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Luxe Aire <span className="text-blue-600">Cooling</span>
          </h1>
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition font-medium">Home</Link>
            <Link href="/services" className="text-slate-700 hover:text-blue-600 transition font-medium">Services</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-blue-600 transition font-medium">Gallery</Link>
            <Link href="/tips" className="text-slate-700 hover:text-blue-600 transition font-medium">Tips</Link>
            <Link href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-slate-700 hover:text-blue-600">☰</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24 sm:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="hero-title text-6xl sm:text-7xl font-bold leading-tight text-slate-900 mb-8">
                Cool Comfort, <span className="text-blue-600">Always</span>
              </h2>
              <p className="hero-subtitle text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Premium air conditioning services for homes and businesses across Metro Manila. Professional installation, maintenance, and expert repair.
              </p>
              <div className="hero-cta flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  Book Service
                </Link>
                <a
                  href="tel:285612078"
                  className="px-8 py-4 border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 text-center"
                >
                  Call: 285612078
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-7xl mb-4">❄️</div>
                    <p className="text-2xl font-bold">Cool Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-slate-600">Always Available</p>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">Fast</div>
              <p className="text-slate-600">Same-Day Service</p>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">Pro</div>
              <p className="text-slate-600">Certified Technicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-section py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-slate-900 mb-4">Our Services</h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Complete air conditioning solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Installation', desc: 'Expert AC system installation', icon: '⚙️', link: '/services' },
              { title: 'Maintenance', desc: 'Regular maintenance & tune-ups', icon: '🔧', link: '/services' },
              { title: 'Repair', desc: '24/7 emergency repairs', icon: '🛠️', link: '/services' },
            ].map((service, idx) => (
              <Link href={service.link} key={idx}>
                <div className="service-card p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <span className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl sm:text-6xl font-bold mb-2">{stats.customers}+</div>
              <p className="text-lg text-slate-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold mb-2">{stats.experience}+</div>
              <p className="text-lg text-slate-300">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold mb-2">{stats.projects}+</div>
              <p className="text-lg text-slate-300">Systems Installed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-5xl font-bold text-slate-900 mb-16 text-center">Why Choose Luxe Aire</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              'Authorized AC Dealer & Installer',
              'Certified Professional Technicians',
              '24/7 Emergency Service Available',
              'Competitive & Transparent Pricing',
              'Quality Guaranteed with Warranty',
              'Same-Day Service in Most Areas',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-lg">✓</div>
                <p className="text-lg text-slate-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-5xl font-bold text-slate-900 mb-16 text-center">Customer Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Maria Santos', text: 'Professional service and fair pricing. Highly recommended!' },
              { name: 'Juan Cruz', text: 'Fast response time and quality work. They fixed my AC the same day.' },
              { name: 'Rosa Mendez', text: 'Best AC technicians in Manila. Very knowledgeable and courteous.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-white rounded-xl border border-slate-200">
                <div className="flex gap-1 mb-4 text-yellow-400">★★★★★</div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-5xl font-bold mb-6">Ready for Better Cooling?</h3>
          <p className="text-xl mb-10 opacity-90">Book your service today or call us for immediate assistance</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition">
              Book Now
            </Link>
            <a href="tel:285612078" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
              Call Us
            </a>
          </div>
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
                <li>San Andres Bukid, Manila</li>
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
            <p>&copy; 2026 Luxe Aire Cooling & Refrigeration Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
