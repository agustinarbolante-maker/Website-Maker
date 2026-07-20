'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLMainElement>(null)

  useEffect(() => {
    // Stagger animations for grid items on scroll
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.92,
        y: 16,
        duration: 0.4,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 60%',
          toggleActions: 'play none none none',
        },
        ease: 'back.out(1.4)',
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <Header />
      <main ref={mainRef} className="overflow-x-hidden">
        <Hero />
        <Services />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
