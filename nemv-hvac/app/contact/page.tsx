'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'installation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-on-primary py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-on-primary/90">
              Get in touch with our team for inquiries, bookings, or emergency services
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 text-center">
                <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+639175410002" className="text-accent hover:text-accent/80">
                  +63 917 541 0002
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 text-center">
                <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:nemvindustrialphil@yahoo.com" className="text-accent hover:text-accent/80">
                  nemvindustrialphil@yahoo.com
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-secondary text-sm">
                  2271 Cervera St
                  <br />
                  La Paz, Makati
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-secondary text-sm">
                  Mon-Fri: 8 AM - 6 PM
                  <br />
                  Sat: 9 AM - 5 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section id="booking" className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
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
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
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
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
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
                    <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
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
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-on-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      Thank you! We will contact you soon.
                    </div>
                  )}
                </form>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Location</h2>
                <div className="bg-muted rounded-lg overflow-hidden border border-border h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto text-secondary/50 mb-3" />
                    <p className="text-secondary font-medium">Map Coming Soon</p>
                    <p className="text-secondary text-sm mt-2">2271 Cervera St, La Paz, Makati</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Do you offer emergency services?',
                  a: 'Yes, we provide 24/7 emergency repair services. Call us anytime for urgent issues.',
                },
                {
                  q: 'How long does installation take?',
                  a: 'Most AC installations take 1-2 days depending on the system complexity.',
                },
                {
                  q: 'What is the warranty on your services?',
                  a: 'We provide a 5-year warranty on installations and 1-year on repairs.',
                },
                {
                  q: 'Do you provide free consultations?',
                  a: 'Yes, we offer free assessments and quotes. Contact us to schedule one.',
                },
              ].map((item, idx) => (
                <details key={idx} className="border border-border rounded-lg p-6 bg-white">
                  <summary className="font-semibold text-foreground cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-4 text-secondary">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
