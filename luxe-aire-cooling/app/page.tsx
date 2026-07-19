'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [stats, setStats] = useState({ customers: 0, experience: 0, projects: 0 });
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Hero section animations
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

      // Service cards stagger
      gsap.from('.service-card', {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top center+=100',
          markers: false,
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
                experience: Math.floor(10 * progress),
                projects: Math.floor(1000 * progress),
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking to a backend
    console.log('Booking submitted:', formData);
    setIsBookingOpen(false);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    alert('Thank you! We will contact you soon to confirm your booking.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Luxe Aire <span className="text-blue-600">Cooling</span>
          </h1>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="hero-title text-5xl sm:text-6xl font-bold leading-tight text-slate-900 mb-6">
                Cool Comfort, <span className="text-blue-600">Premium Service</span>
              </h2>
              <p className="hero-subtitle text-xl text-slate-600 mb-8 leading-relaxed">
                Professional air conditioning installation, repair, and maintenance for Manila homes and businesses. Expert technicians, reliable solutions.
              </p>
              <div className="hero-cta flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Schedule Service
                </button>
                <a
                  href="tel:285612078"
                  className="px-8 py-4 border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-2xl font-bold">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Services</h3>
            <p className="text-xl text-slate-600">Complete air conditioning solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Installation',
                desc: 'Expert AC installation for residential and commercial spaces with warranty',
                icon: '⚙️',
              },
              {
                title: 'Maintenance',
                desc: 'Regular maintenance to keep your system running smoothly and efficiently',
                icon: '🔧',
              },
              {
                title: 'Repair',
                desc: 'Fast, reliable repair service for all AC units and brands',
                icon: '🛠️',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="service-card p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="stat-number text-5xl sm:text-6xl font-bold mb-2">{stats.customers}+</div>
              <p className="text-lg text-slate-300">Satisfied Customers</p>
            </div>
            <div>
              <div className="stat-number text-5xl sm:text-6xl font-bold mb-2">{stats.experience}+</div>
              <p className="text-lg text-slate-300">Years Experience</p>
            </div>
            <div>
              <div className="stat-number text-5xl sm:text-6xl font-bold mb-2">{stats.projects}+</div>
              <p className="text-lg text-slate-300">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center">Why Choose Luxe Aire</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Authorized AC Dealer & Installer',
              'Certified Professional Technicians',
              'Fast & Reliable Service',
              'Competitive Pricing',
              'Quality Guaranteed',
              '24/7 Emergency Support',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-lg text-slate-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Ready to Experience Better Cooling?</h3>
          <p className="text-xl text-slate-600 mb-8">Book your service appointment today or call us for immediate assistance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-xl"
            >
              Book Appointment
            </button>
            <a
              href="mailto:luxaircooling@gmail.com"
              className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Luxe Aire Cooling</h4>
              <p className="text-sm">Professional AC solutions in Manila</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Installation</a></li>
                <li><a href="#" className="hover:text-white transition">Maintenance</a></li>
                <li><a href="#" className="hover:text-white transition">Repair</a></li>
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

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-900">Book Service</h3>
              <button
                onClick={() => setIsBookingOpen(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="09XX-XXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a service</option>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="repair">Repair</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Additional details..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
