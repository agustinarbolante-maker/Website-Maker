export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Homeowner, Makati',
      content: 'ProCool HVAC installed our system last summer. Professional, punctual, and they explained everything clearly. Best investment for our home.',
      rating: 5,
    },
    {
      name: 'Juan Dela Cruz',
      role: 'Building Manager, BGC',
      content: 'Their emergency repair service saved us during a critical day. Response was immediate and the technician was highly skilled. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Patricia Reyes',
      role: 'Office Manager, Ortigas',
      content: 'We switched to ProCool for maintenance and our energy bills dropped by 20%. Great service, great results.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Join hundreds of satisfied customers across Metro Manila
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="grid-item p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-secondary mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold font-heading text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-secondary">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
