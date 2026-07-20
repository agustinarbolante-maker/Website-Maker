'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FormEvent, useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'installation',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-slate-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-200">
              Get in touch with our team for inquiries, bookings, or emergency services
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="booking" className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-primary mb-8">Book Your Service</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    >
                      <option value="installation">AC Installation</option>
                      <option value="maintenance">Maintenance & Servicing</option>
                      <option value="repair">Emergency Repair</option>
                      <option value="ductwork">Ductwork Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer border-none"
                  >
                    Book Appointment
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      Thank you! We will contact you soon.
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="p-6 bg-muted rounded-lg border border-border hover:border-accent transition-colors">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Phone</h4>
                        <a href="tel:+63212345678" className="text-accent hover:text-blue-700 font-medium">
                          +63 (2) 1234-5678
                        </a>
                        <p className="text-secondary text-sm mt-1">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-6 bg-muted rounded-lg border border-border hover:border-accent transition-colors">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Email</h4>
                        <a href="mailto:info@procool-hvac.com" className="text-accent hover:text-blue-700 font-medium">
                          info@procool-hvac.com
                        </a>
                        <p className="text-secondary text-sm mt-1">Response within 2 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="p-6 bg-muted rounded-lg border border-border hover:border-accent transition-colors">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Service Area</h4>
                        <p className="text-secondary">
                          Metro Manila<br />
                          Makati, BGC, Ortigas & surrounding areas
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="p-6 bg-muted rounded-lg border border-border hover:border-accent transition-colors">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Hours</h4>
                        <p className="text-secondary text-sm">
                          Mon-Fri: 8 AM - 6 PM<br />
                          Sat: 9 AM - 5 PM<br />
                          Sun: 24/7 Emergency
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-16 text-center text-secondary">
              <p className="text-sm mb-2">🚀 Same-day appointments available</p>
              <p className="text-sm">💼 Serving residential & commercial clients</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
