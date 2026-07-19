'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Lightbulb, CheckCircle } from 'lucide-react';

export default function Tips() {
  const tips = [
    {
      title: 'Regular Filter Changes Save Money',
      excerpt: 'Changing your AC filter every 1-3 months improves efficiency and extends system life.',
      content: 'A clean filter allows your system to work more efficiently, reducing energy consumption and lowering your bills. Dirty filters force your system to work harder, leading to potential breakdowns.',
      date: 'Updated July 2024',
    },
    {
      title: 'Schedule Annual Maintenance',
      excerpt: 'Professional maintenance prevents costly repairs and keeps your system running smoothly.',
      content: 'Annual maintenance includes inspecting components, checking refrigerant levels, and cleaning coils. This prevents unexpected failures and ensures optimal performance.',
      date: 'Updated June 2024',
    },
    {
      title: 'Optimize Your Thermostat',
      excerpt: 'Proper thermostat settings can save 10-15% on cooling costs.',
      content: 'Set your thermostat to 78°F or higher during warm months. Use a programmable thermostat to adjust temperatures when you are away or sleeping. Avoid frequent adjustments.',
      date: 'Updated May 2024',
    },
    {
      title: 'Keep Your AC Unit Clean',
      excerpt: 'External unit cleanliness affects efficiency and performance.',
      content: 'Remove debris, leaves, and dirt from around your outdoor AC unit. Trim vegetation to maintain at least 2 feet of clearance. A clean unit operates more efficiently.',
      date: 'Updated April 2024',
    },
    {
      title: 'Seal Air Leaks in Your Home',
      excerpt: 'Air leaks reduce cooling efficiency and waste energy.',
      content: 'Check for leaks around windows, doors, and ducts. Seal gaps with weatherstripping or caulk. Proper insulation helps maintain consistent indoor temperatures.',
      date: 'Updated March 2024',
    },
    {
      title: 'Know When to Call a Professional',
      excerpt: 'Recognize signs that your HVAC system needs professional attention.',
      content: 'Contact us if you notice unusual sounds, warm air from vents, increased energy bills, or reduced airflow. Early intervention prevents costly damage.',
      date: 'Updated February 2024',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-on-primary py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">HVAC Tips & Guides</h1>
            <p className="text-lg text-on-primary/90">
              Expert advice to keep your system running efficiently and save on energy costs
            </p>
          </div>
        </section>

        {/* Tips List */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {tips.map((tip, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <Lightbulb className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-foreground mb-2">{tip.title}</h2>
                        <p className="text-sm text-secondary">{tip.date}</p>
                      </div>
                    </div>
                    <p className="text-secondary mb-4 text-lg leading-relaxed">{tip.excerpt}</p>
                    <p className="text-secondary mb-6 leading-relaxed">{tip.content}</p>
                    <button className="text-accent font-semibold hover:text-accent/80 transition-colors">
                      Read Full Article →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Quick Tips for HVAC Efficiency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Change filters regularly (every 1-3 months)',
                'Schedule annual professional maintenance',
                'Keep outdoor units clear of debris',
                'Use programmable or smart thermostats',
                'Seal air leaks around doors and windows',
                'Maintain proper humidity levels (30-50%)',
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-white rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-on-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need Professional Advice?</h2>
            <p className="text-lg text-on-primary/90 mb-8">
              Our expert technicians can provide personalized recommendations for your specific system.
            </p>
            <Link
              href="/contact#booking"
              className="inline-block px-8 py-3 bg-accent text-on-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
