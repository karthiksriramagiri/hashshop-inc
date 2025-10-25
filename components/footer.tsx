"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950 backdrop-blur-sm overflow-hidden">
      {/* Footer Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="text-white text-xl font-light hover:text-white/80 transition-colors mb-4 block">
              HASHSHOP Inc.
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              Empowering businesses to thrive in the digital marketplace through innovative e-commerce solutions, 
              strategic partnerships, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:official@hashshopinc.com"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:+14255349380"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/xcessflow" className="text-white/60 hover:text-white text-sm transition-colors">
                  XcessFlow
                </Link>
              </li>
              <li>
                <Link href="/services/ssello" className="text-white/60 hover:text-white text-sm transition-colors">
                  ssello
                </Link>
              </li>
              <li>
                <Link href="/services/ogeo" className="text-white/60 hover:text-white text-sm transition-colors">
                  ogeo
                </Link>
              </li>
              <li>
                <Link href="/services/pickori" className="text-white/60 hover:text-white text-sm transition-colors">
                  Pickori
                </Link>
              </li>
              <li>
                <Link href="/services/swiftbuy" className="text-white/60 hover:text-white text-sm transition-colors">
                  SwiftBuy
                </Link>
              </li>
              <li>
                <Link href="/services/urban-and-more" className="text-white/60 hover:text-white text-sm transition-colors">
                  Urban & More
                </Link>
              </li>
              <li>
                <Link href="/services/dropmate-automation" className="text-white/60 hover:text-white text-sm transition-colors">
                  DropMate Automation
                </Link>
              </li>
              <li>
                <Link href="/services/dropmate3pl" className="text-white/60 hover:text-white text-sm transition-colors">
                  DropMate 3PL
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/60 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-xs mb-4 md:mb-0">
              © 2025 HASHSHOP Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/40 hover:text-white/60 text-xs transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white/60 text-xs transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
