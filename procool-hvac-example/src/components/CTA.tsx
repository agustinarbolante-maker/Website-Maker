'use client'

export default function CTA() {
  const handleEmail = () => {
    window.location.href = 'mailto:info@procool-hvac.com';
  };

  const handleCall = () => {
    window.location.href = 'tel:+63212345678';
  };

  const handleBook = () => {
    window.location.href = 'mailto:info@procool-hvac.com?subject=Service%20Booking%20Request&body=I%20would%20like%20to%20schedule%20an%20HVAC%20service%20appointment.%20Please%20let%20me%20know%20available%20times.';
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-primary to-slate-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Ready to Experience Superior Climate Control?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Contact ProCool HVAC today to schedule your consultation or emergency repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email CTA */}
          <div className="grid-item p-8 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20 rounded-xl text-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="text-2xl font-bold font-heading text-white mb-3">
              Email Us
            </h3>
            <p className="text-gray-200 mb-4">
              Send us your inquiry and we'll respond within 2 hours.
            </p>
            <button
              onClick={handleEmail}
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer border-none"
            >
              Send Email
            </button>
          </div>

          {/* Phone CTA */}
          <div className="grid-item p-8 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20 rounded-xl text-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold font-heading text-white mb-3">
              Call Us
            </h3>
            <p className="text-gray-200 mb-4">
              Speak directly with our team. Available 24/7 for emergencies.
            </p>
            <button
              onClick={handleCall}
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer border-none"
            >
              +63 (2) 1234-5678
            </button>
          </div>

          {/* Booking CTA */}
          <div className="grid-item p-8 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-20 rounded-xl text-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-2xl font-bold font-heading text-white mb-3">
              Book Online
            </h3>
            <p className="text-gray-200 mb-4">
              Schedule your service appointment at your convenience.
            </p>
            <button
              onClick={handleBook}
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer border-none"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center text-gray-200">
          <p className="text-sm mb-2">🚀 Same-day appointments available</p>
          <p className="text-sm">💼 Serving residential & commercial clients</p>
        </div>
      </div>
    </section>
  )
}
