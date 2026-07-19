'use client';

import Link from 'next/link';

export default function Tips() {
  const tips = [
    {
      title: 'How to Clean Your AC Filter in 5 Easy Steps',
      date: 'February 15, 2024',
      excerpt: 'A dirty AC filter reduces cooling efficiency and increases energy costs. Learn how to safely remove, inspect, and clean your air filter in just 5 minutes. We recommend checking your filter every 30 days during peak cooling season.',
      category: 'Maintenance',
    },
    {
      title: '7 Warning Signs Your AC System Needs Professional Repair',
      date: 'February 10, 2024',
      excerpt: 'Weak airflow, strange noises, warm air, or refrigerant leaks are all red flags. Ignoring these signs can lead to costly repairs or complete system failure. Call our technicians immediately if you notice any of these issues.',
      category: 'Repair',
    },
    {
      title: 'Cut Your Cooling Costs by 30% This Summer',
      date: 'February 8, 2024',
      excerpt: 'Use programmable thermostats, maintain proper insulation, and keep vents unblocked to save money. Setting your thermostat 7-10 degrees higher for 8 hours daily can save up to 10% on your cooling bill annually.',
      category: 'Tips',
    },
    {
      title: 'The Complete Guide to AC Preventive Maintenance',
      date: 'February 5, 2024',
      excerpt: 'Regular maintenance can extend your AC lifespan by 5+ years and reduce repair costs by 40%. Professional tune-ups twice yearly keep your system running smoothly, improve air quality, and maintain warranty coverage.',
      category: 'Maintenance',
    },
    {
      title: 'What Size AC Unit Do You Really Need for Your Home?',
      date: 'January 30, 2024',
      excerpt: 'An undersized unit won\'t cool properly; an oversized one wastes energy. We calculate the right capacity using square footage, insulation, climate, and usage patterns. Get a free assessment from our certified technicians.',
      category: 'Installation',
    },
    {
      title: 'Why Your AC Is Leaking Water (And How to Fix It)',
      date: 'January 25, 2024',
      excerpt: 'Water pooling under your AC often indicates a clogged drain line or low refrigerant levels. Learn when it\'s a simple DIY fix versus when you need professional help. We provide same-day emergency repairs in Manila.',
      category: 'Troubleshooting',
    },
  ];

  const faqs = [
    {
      q: 'How often should I service my AC unit?',
      a: 'We recommend professional maintenance at least twice yearly - ideally before summer and winter. For commercial units or if you live in a dusty area, quarterly service is ideal. Regular servicing extends equipment life by 5+ years and maintains warranty coverage.',
    },
    {
      q: 'What should I do if my AC is making grinding or squealing noises?',
      a: 'Turn off the system immediately. Grinding noises indicate mechanical failure, while squealing suggests belt issues. Both require professional repair within 24-48 hours to prevent complete system damage. Call us for emergency service - we respond within 2 hours in Metro Manila.',
    },
    {
      q: 'How long should my AC unit last?',
      a: 'Quality AC units last 12-18 years with proper maintenance. Poor maintenance reduces lifespan to 5-8 years. Factors include climate, usage frequency, installation quality, and maintenance history. We help you maximize your system\'s lifespan.',
    },
    {
      q: 'How much does AC installation cost?',
      a: 'Costs range from ₱35,000-₱150,000+ depending on unit type (window, split, central), capacity (1-5 tons), and installation complexity. We provide free in-home assessments and transparent quotes. Financing options available for qualified customers.',
    },
    {
      q: 'Are you available for emergency repairs 24/7?',
      a: 'Yes! We provide round-the-clock emergency service every day, including holidays. Call 285612078 anytime for immediate assistance. Most emergency calls receive service within 2 hours in Metro Manila areas.',
    },
    {
      q: 'What warranties do you offer?',
      a: 'All new units include manufacturer warranty (typically 3-5 years on compressor, 1-2 years on parts). We add our service warranty covering installation workmanship for the same period. Extended warranties available for additional protection.',
    },
  ];

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
            <Link href="/tips" className="text-blue-600 font-bold">Tips</Link>
            <Link href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-6xl font-bold mb-4">AC Tips & Resources</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Expert advice for AC maintenance, energy savings, and getting the most out of your cooling system</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Latest Tips & Articles</h2>
          <div className="space-y-8">
            {tips.map((post, idx) => (
              <div key={idx} className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">{post.category}</span>
                  <span className="text-slate-500 text-sm">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{post.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-5xl font-bold mb-6">Still Have Questions?</h3>
          <p className="text-xl mb-10 opacity-90">Our expert team is ready to help with personalized advice</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition">
            Contact Us
          </Link>
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
            <p>&copy; 2026 Luxe Aire Cooling. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
