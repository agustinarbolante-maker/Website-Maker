'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
    <section id="faq" className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our HVAC services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="grid-item mb-4 border border-border rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-muted transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-bold font-heading text-primary text-left">
                  {faq.question}
                </h3>
                <span
                  className={`text-accent text-2xl transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
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
  )
}
