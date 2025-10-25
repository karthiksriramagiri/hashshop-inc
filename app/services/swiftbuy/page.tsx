"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function SwiftBuyPage() {
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
    <div className="relative min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500" />
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
              <span className="text-blue-200 text-xs font-light">B2B</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              <span className="font-medium">SwiftBuy</span>
            </h1>

            <p className="text-xl font-light text-white/80 leading-relaxed mb-8">
              A Shopify-powered B2B marketplace specializing in major appliances and commercial electronics. We deliver
              competitive wholesale pricing, fast shipping, and volume discounts tailored for your business needs.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-500 text-white font-medium text-sm transition-all duration-200 hover:bg-blue-600 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="https://swiftbuy.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-950 font-medium text-sm transition-all duration-200 hover:bg-blue-50 shadow-lg hover:shadow-xl"
              >
                Visit Store
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">Best Pricing Guaranteed</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Competitive wholesale pricing on major appliances and commercial electronics. We work directly with
                manufacturers to bring you the best deals in the market.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">Fast Shipping</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Quick turnaround times with expedited shipping options. Most orders ship promptly, ensuring your
                business stays running smoothly without delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">Volume Pricing Available</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Special pricing for bulk orders and high-volume customers. Reach out to us to discuss custom pricing
                tailored to your business requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">Business Account Setup</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Easy business account creation with tax ID verification. Get access to wholesale pricing and volume
                discounts within 24-48 hours.
              </p>
            </div>
          </div>
        </div>


        {/* Product Categories */}
        <section className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 mb-24">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            Product <span className="font-medium">Categories</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Major Appliances</h3>
              <p className="text-sm text-white/60">
                Refrigerators, washers, dryers, ranges, dishwashers, and more from top brands.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Commercial Electronics</h3>
              <p className="text-sm text-white/60">
                Displays, POS systems, office equipment, and commercial-grade electronics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">HVAC Systems</h3>
              <p className="text-sm text-white/60">
                Commercial heating, ventilation, and air conditioning equipment and parts.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Kitchen Equipment</h3>
              <p className="text-sm text-white/60">
                Commercial kitchen appliances, prep equipment, and food service solutions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Commercial Laundry</h3>
              <p className="text-sm text-white/60">
                Industrial washers, dryers, and commercial laundry equipment for businesses.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-medium text-white mb-2">Refrigeration</h3>
              <p className="text-sm text-white/60">
                Commercial refrigerators, freezers, and cold storage solutions.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 mb-24">
          <h2 className="text-4xl font-light text-white mb-12 text-center">
            How <span className="font-medium">It Works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Create Business Account</h3>
              <p className="text-white/70 leading-relaxed">
                Sign up with your business information and tax ID. Verification typically takes 24-48 hours.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Browse & Order</h3>
              <p className="text-white/70 leading-relaxed">
                Access our full B2B catalog with wholesale pricing. Add items to cart and checkout with your preferred
                payment method.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Receive & Grow</h3>
              <p className="text-white/70 leading-relaxed">
                Get fast delivery and dedicated support. As your business grows, reach out to us for better pricing and
                terms.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 mb-24">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm border border-white/10 text-center">
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Get <span className="font-medium">Started?</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss volume pricing, custom terms, and how SwiftBuy can help your business grow.
            </p>
            <a
              href="https://swiftbuy.ai/pages/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-500 text-white font-medium text-sm transition-all duration-200 hover:bg-blue-600 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">10K+</div>
            <div className="text-sm text-white/60">Products Available</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-3xl font-bold text-indigo-300 mb-2">1000+</div>
            <div className="text-sm text-white/60">Business Customers</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
            <div className="text-3xl font-bold text-white mb-2">Fast</div>
            <div className="text-sm text-white/60">Shipping Available</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
