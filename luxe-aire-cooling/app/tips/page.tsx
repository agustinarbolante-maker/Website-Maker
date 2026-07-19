'use client';

import Link from 'next/link';

export default function Tips() {

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

      {/* Tips Content */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">AC Maintenance Tips</h2>
          <div className="space-y-8">
            <div className="p-8 bg-white rounded-xl border-2 border-slate-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">[PLACEHOLDER: Tip Title 1]</h3>
              <p className="text-slate-600 leading-relaxed">[PLACEHOLDER: Tip description and details]</p>
            </div>
            <div className="p-8 bg-white rounded-xl border-2 border-slate-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">[PLACEHOLDER: Tip Title 2]</h3>
              <p className="text-slate-600 leading-relaxed">[PLACEHOLDER: Tip description and details]</p>
            </div>
            <div className="p-8 bg-white rounded-xl border-2 border-slate-200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">[PLACEHOLDER: Tip Title 3]</h3>
              <p className="text-slate-600 leading-relaxed">[PLACEHOLDER: Tip description and details]</p>
            </div>
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
