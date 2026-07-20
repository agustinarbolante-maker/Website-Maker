'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Zap, Wallet, Shield, Leaf, BookOpen } from 'lucide-react'

export default function WhyUs() {
  const features = [
    {
      icon: Users,
      title: 'Expert Technicians',
      description: 'Highly trained and certified HVAC specialists with years of industry experience.',
    },
    {
      icon: Zap,
      title: 'Fast Response Time',
      description: 'Same-day service appointments available for urgent repairs and installations.',
    },
    {
      icon: Wallet,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden fees. Free estimates for all services.',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Full warranty on all installations and repairs backed by our service guarantee.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Solutions',
      description: 'Energy-efficient systems that reduce environmental impact and save costs.',
    },
    {
      icon: BookOpen,
      title: 'Easy Booking',
      description: 'Simple online booking system or call our team to schedule your service.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-slate-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ProCool HVAC?</h1>
            <p className="text-lg text-gray-200">
              Industry-leading expertise and customer commitment
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="animate-fade-in">
                    <div className="bg-muted p-8 rounded-lg border border-border hover:border-accent transition-colors h-full">
                      <Icon className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                      <p className="text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary to-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-5xl font-bold text-accent mb-2">10+</div>
                <h3 className="text-lg font-semibold mb-2">Years Experience</h3>
                <p className="text-gray-200">Serving Metro Manila with excellence</p>
              </div>
              <div className="animate-fade-in">
                <div className="text-5xl font-bold text-accent mb-2">500+</div>
                <h3 className="text-lg font-semibold mb-2">Happy Customers</h3>
                <p className="text-gray-200">Trusted by residential & commercial clients</p>
              </div>
              <div className="animate-fade-in">
                <div className="text-5xl font-bold text-accent mb-2">24/7</div>
                <h3 className="text-lg font-semibold mb-2">Emergency Service</h3>
                <p className="text-gray-200">Available around the clock</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
