import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary" style={{ fontFamily: '"Poppins", sans-serif' }}>
          ProCool
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/services" className="text-secondary hover:text-accent transition-colors">Services</Link>
          <Link href="/why-us" className="text-secondary hover:text-accent transition-colors">Why Us</Link>
          <Link href="/faq" className="text-secondary hover:text-accent transition-colors">FAQ</Link>
          <Link href="/contact" className="text-secondary hover:text-accent transition-colors">Contact</Link>
        </div>

        <div className="flex gap-4">
          <a href="tel:+63212345678" className="btn-secondary text-sm">
            📞 Call Now
          </a>
          <Link href="/contact" className="btn-primary text-sm">
            Book Service
          </Link>
        </div>
      </nav>
    </header>
  )
}
