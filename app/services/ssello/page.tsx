"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useRef } from "react"

export default function sselloPage() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("flip-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes flipIn {
          from {
            transform: perspective(1000px) rotateY(-90deg);
            opacity: 0;
          }
          to {
            transform: perspective(1000px) rotateY(0);
            opacity: 1;
          }
        }

        .flip-card {
          opacity: 0;
          transform: perspective(1000px) rotateY(-90deg);
          transition: none;
        }

        .flip-card.flip-in {
          animation: flipIn 0.8s ease-out forwards;
        }
      `}</style>

      <div className="relative min-h-screen bg-gradient-to-br from-amber-950 via-slate-900 to-orange-950">
        <Header />

        {/* Hero Section */}
        <section className="relative z-20 px-8 py-24 max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors mb-12 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex justify-center mb-8">
              <Image src="/images/ssello-logo.png" alt="ssello" width={300} height={100} className="h-16 w-auto" />
            </div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 mb-8">
              <span className="text-amber-200 text-sm font-light">LATAM E-COMMERCE ENGINE</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-light text-white mb-8">
              Expand into <span className="font-semibold text-amber-300">Latin America</span>
              <br />
              <span className="text-5xl md:text-6xl">with one click</span>
            </h1>

            <p className="text-xl font-light text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              Complete e-commerce solution for ambitious brands. Expand your reach through 15+ marketplaces, manage
              operations seamlessly, and accelerate growth in Latin America's fastest-growing markets.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-medium text-sm transition-all duration-200 hover:bg-amber-600 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="https://www.ssello.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm transition-all duration-200 hover:bg-white/20 border border-white/20"
              >
                Visit Website
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-amber-300 mb-3">700M+</div>
              <div className="text-white/70">Active Consumers</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-orange-300 mb-3">15+</div>
              <div className="text-white/70">Top Marketplaces</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-white mb-3">5+</div>
              <div className="text-white/70">Countries</div>
            </div>
          </div>
        </section>

        {/* Platform Features with Images */}
        <section className="relative z-20 px-8 py-24 bg-gradient-to-b from-transparent to-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Everything you need to <span className="font-semibold text-amber-300">expand globally</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From market access to dashboard management, we provide the complete solution for your LATAM expansion.
              </p>
            </div>

            {/* Dashboard Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h3 className="text-3xl font-light text-white mb-6">
                  <span className="font-semibold text-amber-300">Unified Dashboard</span> for Complete Control
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Manage sales, orders, inventory, and payments from our easy-to-use central dashboard. Monitor
                  performance across all channels, track inventory in real-time, and process orders efficiently.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Real-time business performance analytics</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Track revenue, sales, and orders at a glance</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Seller Pulse score to monitor your performance</span>
                  </li>
                </ul>
              </div>
              <div
                ref={(el) => {
                  imageRefs.current[0] = el
                }}
                className="flip-card rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image
                  src="/images/ssello-dashboard.png"
                  alt="ssello Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Products Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div
                ref={(el) => {
                  imageRefs.current[1] = el
                }}
                className="flip-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:order-1"
              >
                <Image
                  src="/images/ssello-products.png"
                  alt="ssello Products Management"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="lg:order-2">
                <h3 className="text-3xl font-light text-white mb-6">
                  <span className="font-semibold text-orange-300">Product Management</span> Made Simple
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Manage your inventory and product listings across all marketplaces from one central location. Add new
                  products, track inventory value, and monitor stock levels effortlessly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Bulk upload products across all marketplaces</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Real-time inventory value tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Low stock alerts and automated reordering</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Balance Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h3 className="text-3xl font-light text-white mb-6">
                  <span className="font-semibold text-green-300">Financial Management</span> at Your Fingertips
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Track your earnings, payouts, and financial performance with complete transparency. Download
                  statements, view transaction history, and manage your balance across all marketplaces.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Available, pending, and reserved balance tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Detailed transaction history and payout records</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Downloadable financial statements</span>
                  </li>
                </ul>
              </div>
              <div
                ref={(el) => {
                  imageRefs.current[2] = el
                }}
                className="flip-card rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image
                  src="/images/ssello-balance.png"
                  alt="ssello Balance Management"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Orders Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div
                ref={(el) => {
                  imageRefs.current[3] = el
                }}
                className="flip-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:order-1"
              >
                <Image
                  src="/images/ssello-orders.png"
                  alt="ssello Orders Management"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="lg:order-2">
                <h3 className="text-3xl font-light text-white mb-6">
                  <span className="font-semibold text-blue-300">Order Management</span> Across LATAM
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Manage and track customer orders from Brazil, Mexico, Argentina, Chile, and beyond. Monitor shipping
                  status, handle fulfillment, and ensure timely delivery across all LATAM markets.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Track orders across multiple LATAM countries</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Real-time shipping status and carrier tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Bulk shipping and export capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplaces Section */}
        <section className="relative z-20 px-8 py-24 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Sell across <span className="font-semibold text-amber-300">15+ Top Marketplaces</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Connect with 700M+ consumers through one unified platform. From the United States to Brazil and Mexico,
                we've got your store covered.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "Amazon US", country: "United States" },
                { name: "Walmart US", country: "United States" },
                { name: "Amazon Brazil", country: "Brazil" },
                { name: "Amazon Mexico", country: "Mexico" },
                { name: "MercadoLibre", country: "LATAM" },
                { name: "Shopee", country: "LATAM" },
                { name: "TikTok Shop", country: "LATAM" },
                { name: "Coppel", country: "Mexico" },
                { name: "Liverpool", country: "Mexico" },
                { name: "Falabella", country: "Chile & Peru" },
                { name: "Americanas", country: "Brazil" },
                { name: "Casas Bahia", country: "Brazil" },
                { name: "Magazine Luiza", country: "Brazil" },
                { name: "Claro Shop", country: "LATAM" },
                { name: "Walmart Mexico", country: "Mexico" },
              ].map((marketplace, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200 text-center"
                >
                  <div className="text-white font-medium mb-2">{marketplace.name}</div>
                  <div className="text-white/50 text-sm">{marketplace.country}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative z-20 px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                How <span className="font-semibold text-amber-300">ssello</span> Works
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Three simple steps to expand your business across Latin America
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Connect Your Store</h3>
                <p className="text-white/70 leading-relaxed">
                  Sign up and connect your existing store or create a new one. Our platform integrates seamlessly with
                  your current operations.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-300 font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">List Your Products</h3>
                <p className="text-white/70 leading-relaxed">
                  Upload your products once and we automatically list them across all 15+ marketplaces with optimized
                  descriptions and pricing.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center text-green-300 font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Start Selling</h3>
                <p className="text-white/70 leading-relaxed">
                  Ship to your nearest location and we handle the rest. Track everything from our unified dashboard and
                  watch your business grow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
