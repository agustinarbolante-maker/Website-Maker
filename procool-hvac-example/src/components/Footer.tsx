export default function Footer() {
  return (
    <footer className="bg-primary text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="text-white font-bold font-heading text-lg mb-4">
              ProCool HVAC
            </h4>
            <p className="text-sm leading-relaxed">
              Professional HVAC solutions for residential and commercial properties in Metro Manila.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-bold font-heading mb-4">Services</h5>
            <ul className="text-sm space-y-2">
              <li><a href="#services" className="hover:text-accent transition-colors">Installation</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Maintenance</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Emergency Repair</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">System Upgrade</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-white font-bold font-heading mb-4">Support</h5>
            <ul className="text-sm space-y-2">
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-bold font-heading mb-4">Contact</h5>
            <ul className="text-sm space-y-2">
              <li>
                <a href="tel:+63212345678" className="hover:text-accent transition-colors">
                  📞 +63 (2) 1234-5678
                </a>
              </li>
              <li>
                <a href="mailto:info@procool-hvac.com" className="hover:text-accent transition-colors">
                  ✉️ info@procool-hvac.com
                </a>
              </li>
              <li>📍 Metro Manila, Philippines</li>
              <li>⏰ 24/7 Emergency Service</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2026 ProCool HVAC. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
