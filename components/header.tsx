"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-center p-6">
      {/* Logo */}
      <div className="absolute left-6">
        <Link href="/" className="text-white text-xl font-light hover:text-white/80 transition-colors">
          HASHSHOP Inc.
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <Link
          href="/about"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          ABOUT
        </Link>
        <a
          href="/#services-section"
          onClick={(e) => {
            e.preventDefault()
            const element = document.getElementById('services-section')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            } else {
              window.location.href = '/#services-section'
            }
          }}
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          SERVICES
        </a>
        <Link
          href="/careers"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          CAREERS
        </Link>
        <Link
          href="/contact"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          CONTACT US
        </Link>
      </nav>

    </header>
  )
}
