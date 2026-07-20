'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headingRef.current || !subtitleRef.current || !ctaRef.current) return

    // Ensure elements are visible
    if (headingRef.current) headingRef.current.style.opacity = '1'
    if (subtitleRef.current) subtitleRef.current.style.opacity = '1'
    if (ctaRef.current) ctaRef.current.style.opacity = '1'

    const tl = gsap.timeline()

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )

    // Floating animation for the background element
    gsap.to('.hero-bg-accent', {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-primary via-slate-900 to-slate-800 overflow-hidden pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl hero-bg-accent" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-400 opacity-5 rounded-full blur-3xl" />

      <div ref={heroRef} className="section-container relative z-10 flex flex-col justify-center py-24">
        <div className="max-w-3xl">
          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-black font-heading text-white mb-6 leading-tight"
            style={{ fontWeight: 700, fontFamily: '"Poppins", sans-serif' }}
          >
            Climate Control,<br />
            <span className="text-accent">Perfected</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light"
          >
            Professional HVAC solutions for residential and commercial properties. Expert installation, maintenance, and 24/7 emergency repairs in Metro Manila.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-8 py-4">
              Schedule Consultation
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              📞 +63 (2) 1234-5678
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>500+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
