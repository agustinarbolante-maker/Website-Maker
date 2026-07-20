import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary" style={{ fontFamily: '"Poppins", sans-serif' }}>
          ProCool
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#services" className="text-secondary hover:text-accent transition-colors cursor-pointer">Services</a>
          <a href="#features" className="text-secondary hover:text-accent transition-colors cursor-pointer">Why Us</a>
          <a href="#faq" className="text-secondary hover:text-accent transition-colors cursor-pointer">FAQ</a>
          <a href="#contact" className="text-secondary hover:text-accent transition-colors cursor-pointer">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="tel:+63212345678" className="btn-secondary text-sm">
            📞 Call Now
          </a>
          <button className="btn-primary text-sm">
            Book Service
          </button>
        </div>
      </nav>
    </header>
  )
}
