'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How often should I service my HVAC system?',
      answer:
        'We recommend professional maintenance at least twice a year - once before summer for air conditioning and once before winter for heating. Regular maintenance improves efficiency, extends system life, and prevents costly repairs.',
    },
    {
      question: 'What is your response time for emergency repairs?',
      answer:
        'Our emergency repair team aims to respond within 1-2 hours of your call, 24/7. For commercial clients, we provide priority response and dedicated support.',
    },
    {
      question: 'Do you offer warranties on your work?',
      answer:
        'Yes! All our installations come with a full 5-year workmanship warranty. We also stand behind our repairs with a 12-month service guarantee.',
    },
    {
      question: 'Can I get a free estimate?',
      answer:
        'Absolutely! We provide free, no-obligation estimates for all services. Our technician will assess your needs and provide a transparent quote with no hidden fees.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve all of Metro Manila including Makati, BGC, Ortigas, Quezon City, Pasig, Mandaluyong, and surrounding areas. Contact us to confirm service availability for your location.',
    },
    {
      question: 'Do you offer energy-efficient systems?',
      answer:
        'Yes! We specialize in high-efficiency HVAC systems that can reduce energy consumption by up to 40% compared to older models. Our team can help you find the perfect system for your needs and budget.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-slate-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-200">
              Find answers to common questions about our HVAC services
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden transition-all duration-300 animate-fade-in"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-muted transition-colors cursor-pointer"
                  >
                    <h3 className="text-lg font-bold font-heading text-primary text-left">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={24}
                      className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-6 py-4 bg-gradient-to-b from-muted to-white border-t border-border">
                      <p className="text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
