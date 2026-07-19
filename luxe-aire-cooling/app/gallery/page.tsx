'use client';

import Link from 'next/link';

export default function Gallery() {
  const projects = [
    { title: 'Residential Installation', desc: 'Complete AC unit installation for 3-bedroom home' },
    { title: 'Commercial Retrofit', desc: 'Multi-zone system for 500 sqm office space' },
    { title: 'Emergency Repair', desc: 'Compressor replacement and system restart' },
    { title: 'Maintenance Service', desc: 'Quarterly maintenance for building complex' },
    { title: 'Split System Install', desc: 'Modern split AC system with smart controls' },
    { title: 'Industrial Cooling', desc: 'Large capacity cooling for manufacturing facility' },
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
            <Link href="/gallery" className="text-blue-600 font-bold">Gallery</Link>
            <Link href="/tips" className="text-slate-700 hover:text-blue-600 transition font-medium">Tips</Link>
            <Link href="/contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-6xl font-bold mb-4">Our Work</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">See the quality installations and repairs we've completed for satisfied customers</p>
        </div>
      </section>


      {/* Gallery Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl">❄️</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-200">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">2500+</div>
              <p className="text-slate-600 text-lg">Projects Completed</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-slate-600 text-lg">Customer Satisfaction</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-slate-600 text-lg">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-5xl font-bold mb-6">See Your Project Come to Life</h3>
          <p className="text-xl mb-10 opacity-90">Let us handle your AC installation or repair with the same excellence</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition">
            Start Your Project
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
