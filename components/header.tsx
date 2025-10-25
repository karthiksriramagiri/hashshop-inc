"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative z-30 flex items-center justify-center p-4 sm:p-6">
      {/* Logo */}
      <div className="absolute left-4 sm:left-6">
        <Link href="/" className="text-white text-lg sm:text-xl font-light hover:text-white/80 transition-colors">
          HASHSHOP Inc.
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-2">
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

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="absolute right-4 sm:right-6 md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-white/10 md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              ABOUT
            </Link>
            <a
              href="/#services-section"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                const element = document.getElementById('services-section')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/#services-section'
                }
              }}
              className="text-white/80 hover:text-white text-sm font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              SERVICES
            </a>
            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              CAREERS
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm font-light px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
