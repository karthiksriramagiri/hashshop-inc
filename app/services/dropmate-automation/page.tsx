"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useRef } from "react"

export default function DropMateAutomationPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-orange-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
      </div>

      <Header />

      <main className="relative z-20 px-8 py-16 max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors mb-12 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-6">
              <span className="text-blue-200 text-xs font-light">Authorized Partner</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              <span className="font-medium">DropMate Automation</span>
            </h1>

            <p className="text-xl font-light text-white/80 leading-relaxed mb-8">
              Your trusted Amazon & Walmart seller's operation partner. We streamline your e-commerce operations with
              cutting-edge automation tools and expert support.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-500 text-white font-medium text-sm transition-all duration-200 hover:bg-blue-600 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="https://dropmate.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-950 font-medium text-sm transition-all duration-200 hover:bg-blue-50 shadow-lg hover:shadow-xl"
              >
                Visit Website
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">Official Marketplace Partners</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                As an official Walmart Solution Provider and Amazon SPN Selling Partner, we provide comprehensive seller support, from account
                setup to advanced optimization strategies with direct marketplace access.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">Automation Tools</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Leverage our proprietary automation platform to manage inventory, pricing, orders, and customer service
                across multiple marketplaces seamlessly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">Growth Support</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Our team of e-commerce experts provides strategic guidance to help you scale your business, optimize
                listings, and maximize profitability.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <section className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 mb-24">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            Why Choose <span className="font-medium">DropMate Automation</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-transparent backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Lightning-Fast Automation</h3>
              <p className="text-white/70 leading-relaxed">
                Our advanced automation tools handle inventory syncing, order processing, and repricing in real-time.
                Save hours every day while maintaining perfect accuracy across all your marketplace listings.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-900/40 to-transparent backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Authorized Partner Status</h3>
              <p className="text-white/70 leading-relaxed">
                As an official Amazon and Walmart partner, we have direct access to platform resources, priority
                support, and insider knowledge to help you navigate marketplace policies and maximize your success.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/40 to-transparent backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Maximize Profitability</h3>
              <p className="text-white/70 leading-relaxed">
                Our intelligent repricing algorithms and profit optimization tools ensure you stay competitive while
                maximizing margins. Track every penny with detailed analytics and reporting.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-900/40 to-transparent backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Dedicated Support Team</h3>
              <p className="text-white/70 leading-relaxed">
                Get 24/7 access to our expert support team who understand the ins and outs of Amazon and Walmart
                selling. From technical issues to strategic advice, we're here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 mb-24">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            How It <span className="font-medium">Works</span>
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                <span className="text-blue-300 font-medium">1</span>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-medium text-white mb-2">Connect Your Accounts</h3>
                <p className="text-white/70 leading-relaxed">
                  Securely link your Amazon and Walmart seller accounts to our platform. Our one-click integration
                  process takes just minutes and uses OAuth for maximum security.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center">
                <span className="text-orange-300 font-medium">2</span>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-medium text-white mb-2">Configure Automation Rules</h3>
                <p className="text-white/70 leading-relaxed">
                  Set up your automation preferences including repricing strategies, inventory thresholds, order routing
                  rules, and notification preferences. Our smart defaults get you started quickly.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                <span className="text-blue-300 font-medium">3</span>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-medium text-white mb-2">Let Automation Work</h3>
                <p className="text-white/70 leading-relaxed">
                  Sit back as our platform handles inventory syncing, competitive repricing, order processing, and
                  customer communications automatically. Monitor everything from your unified dashboard.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center">
                <span className="text-orange-300 font-medium">4</span>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-medium text-white mb-2">Scale & Optimize</h3>
                <p className="text-white/70 leading-relaxed">
                  Use our analytics and insights to identify growth opportunities, optimize your product mix, and expand
                  to new categories. Our team provides ongoing strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 mb-24">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            Powerful <span className="font-medium">Features</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Smart Repricing</h3>
              <p className="text-sm text-white/60">
                AI-powered repricing that adjusts to market conditions, competitor moves, and your profit targets in
                real-time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Inventory Sync</h3>
              <p className="text-sm text-white/60">
                Keep inventory levels perfectly synchronized across Amazon, Walmart, and your other sales channels
                automatically.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Order Management</h3>
              <p className="text-sm text-white/60">
                Centralized order processing with automated routing, tracking updates, and customer notifications.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Listing Optimization</h3>
              <p className="text-sm text-white/60">
                SEO-optimized titles, bullet points, and descriptions that improve visibility and conversion rates.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-white/60">
                Comprehensive reporting on sales, profits, inventory turns, and marketplace performance metrics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Multi-Channel Support</h3>
              <p className="text-sm text-white/60">
                Manage Amazon, Walmart, and other marketplaces from a single unified platform.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">500+</div>
            <div className="text-sm text-white/60">Active Sellers</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-3xl font-bold text-orange-300 mb-2">35%</div>
            <div className="text-sm text-white/60">Sales Increase</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-white/60">Support Available</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
