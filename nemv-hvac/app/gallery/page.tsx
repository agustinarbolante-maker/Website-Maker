'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ImageOff } from 'lucide-react';

export default function Gallery() {
  const gallery = [
    { id: 1, title: 'AC Unit Installation', category: 'Installation' },
    { id: 2, title: 'Ventilation System', category: 'Ventilation' },
    { id: 3, title: 'Ductwork Setup', category: 'Ductwork' },
    { id: 4, title: 'Commercial HVAC', category: 'Commercial' },
    { id: 5, title: 'Maintenance Service', category: 'Maintenance' },
    { id: 6, title: 'System Upgrade', category: 'Installation' },
    { id: 7, title: 'Unit Replacement', category: 'Installation' },
    { id: 8, title: 'Air Filter Service', category: 'Maintenance' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-on-primary py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Gallery</h1>
            <p className="text-lg text-on-primary/90">
              Browse our portfolio of completed HVAC installations and services
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gallery.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-muted border border-border hover:border-accent transition-all duration-200"
                >
                  {/* Placeholder Image */}
                  <div className="aspect-square bg-gradient-to-br from-muted to-border flex items-center justify-center">
                    <div className="text-center">
                      <ImageOff size={40} className="mx-auto text-secondary/50 mb-2" />
                      <p className="text-sm text-secondary/70">Project Image</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-on-primary/80 text-sm">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Professional Quality Installations</h2>
            <p className="text-center text-secondary mb-8 text-lg">
              Each project in our gallery demonstrates our commitment to quality workmanship and customer satisfaction.
              From small residential upgrades to large commercial installations, we take pride in every job.
            </p>
            <div className="bg-white rounded-lg shadow-sm border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Request a Photo Consultation</h3>
              <p className="text-secondary mb-6">
                See examples of work similar to your project. Our gallery is constantly updated with new installations and services.
              </p>
              <Link
                href="/contact#booking"
                className="inline-block px-6 py-3 bg-accent text-on-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-on-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your HVAC System?</h2>
            <p className="text-lg text-on-primary/90 mb-8">
              Contact us to discuss your HVAC needs and see how we can help.
            </p>
            <Link
              href="/contact#booking"
              className="inline-block px-8 py-3 bg-accent text-on-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
