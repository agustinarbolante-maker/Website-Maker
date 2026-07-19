'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
            <Link href="/services" className="text-slate-700 hover:text-blue-600 transition font-medium">Services</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-blue-600 transition font-medium">Gallery</Link>
            <Link href="/tips" className="text-slate-700 hover:text-blue-600 transition font-medium">Tips</Link>
            <Link href="/contact" className="text-blue-600 font-bold">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Book your service or contact us with any questions. We're here to help!</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Call Us</h3>
              <a href="tel:285612078" className="text-blue-600 font-semibold text-lg hover:text-blue-700">285612078</a>
              <p className="text-slate-600 mt-2">24/7 Available</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Email Us</h3>
              <a href="mailto:luxaircooling@gmail.com" className="text-blue-600 font-semibold text-lg hover:text-blue-700">luxaircooling@gmail.com</a>
              <p className="text-slate-600 mt-2">Response within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600 font-semibold">San Andres Bukid</p>
              <p className="text-slate-600">Manila, Philippines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Book Your Service</h2>
          <div className="p-10 bg-white rounded-2xl shadow-xl border-2 border-slate-200">
            {submitted && (
              <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-green-700 font-bold text-lg">✓ Booking received! We'll contact you soon.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="09XX-XXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Service Needed *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Select service</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="repair">Repair</option>
                    <option value="inspection">Inspection</option>
                    <option value="commercial">Commercial Solution</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Preferred Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Anytime</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 6PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Additional Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Tell us more about your AC system or specific needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book My Service
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Hours</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Regular Hours</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="font-semibold">Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li className="font-semibold">Saturday: 9:00 AM - 4:00 PM</li>
                <li className="font-semibold text-red-600">Sunday: Closed</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Emergency Service</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="font-semibold text-blue-600">24/7 Available</li>
                <li className="text-sm">Holidays & Weekends</li>
                <li className="text-sm">Call: 285612078</li>
              </ul>
            </div>
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
                <li><Link href="/tips" className="hover:text-white transition">Tips</Link></li>
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
              <h5 className="font-semibold text-white mb-4">Service Areas</h5>
              <ul className="space-y-2 text-sm">
                <li>Metro Manila</li>
                <li>Makati</li>
                <li>San Andres Bukid</li>
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
