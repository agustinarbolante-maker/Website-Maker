import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">NEMV HVAC</h3>
            <p className="text-sm text-on-primary/80 mb-4">
              Professional heating, ventilation, and air conditioning services for your comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-accent transition-colors">
                  Tips & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <a href="tel:+639175410002" className="hover:text-accent transition-colors">
                  +63 917 541 0002
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <a href="mailto:nemvindustrialphil@yahoo.com" className="hover:text-accent transition-colors">
                  nemvindustrialphil@yahoo.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={18} className="flex-shrink-0 text-accent" />
                <span>2271 Cervera St, La Paz, Makati</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <Clock size={18} className="flex-shrink-0 text-accent" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-on-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-on-primary/80">
            <p>&copy; {currentYear} NEMV HVAC. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
