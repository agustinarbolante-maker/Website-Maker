'use client';

import Link from 'next/link';

export default function Tips() {
  const tips = [
    {
      title: 'How to Clean Your AC Filter',
      date: 'Feb 15, 2026',
      excerpt: 'Learn the simple steps to clean or replace your AC filter for better performance and air quality.',
      category: 'Maintenance',
    },
    {
      title: '5 Signs Your AC Needs Professional Repair',
      date: 'Feb 10, 2026',
      excerpt: 'Don\'t ignore these warning signs. Your AC might need professional attention before it breaks down completely.',
      category: 'Repair',
    },
    {
      title: 'Energy-Saving Tips for Summer AC Usage',
      date: 'Feb 8, 2026',
      excerpt: 'Reduce your electricity bills while staying cool with these practical energy-saving techniques for AC usage.',
      category: 'Tips',
    },
    {
      title: 'Why Regular AC Maintenance Matters',
      date: 'Feb 5, 2026',
      excerpt: 'Preventive maintenance extends AC lifespan, improves efficiency, and saves you money on repairs.',
      category: 'Maintenance',
    },
    {
      title: 'Choosing the Right AC Unit for Your Home',
      date: 'Jan 30, 2026',
      excerpt: 'Guide to selecting the perfect AC system based on room size, budget, and cooling needs.',
      category: 'Installation',
    },
    {
      title: 'Common AC Problems and Quick Fixes',
      date: 'Jan 25, 2026',
      excerpt: 'Troubleshoot common AC issues with our guide to quick fixes before calling a technician.',
      category: 'Troubleshooting',
    },
  ];

  const faqs = [
    {
      q: 'How often should I service my AC?',
      a: 'We recommend servicing your AC at least twice a year - before summer and before winter seasons. More frequent maintenance (quarterly) is ideal for commercial systems.',
    },
    {
      q: 'What should I do if my AC is making strange noises?',
      a: 'Strange noises could indicate a mechanical issue or loose parts. Turn off your AC and contact us immediately for professional diagnosis.',
    },
    {
      q: 'How long do AC units typically last?',
      a: 'With proper maintenance, most AC units last 10-15 years. Some can go longer with excellent care and regular servicing.',
    },
    {
      q: 'What is the cost of AC installation?',
      a: 'Installation costs vary based on unit type, home size, and complexity. We provide free quotes after assessment.',
    },
    {
      q: 'Do you offer emergency repair services?',
      a: 'Yes! We offer 24/7 emergency repair services. Call 285612078 anytime, even on weekends and holidays.',
    },
    {
      q: 'What warranty do you provide?',
      a: 'We provide manufacturer warranty on new units plus our service warranty on installation workmanship.',
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
