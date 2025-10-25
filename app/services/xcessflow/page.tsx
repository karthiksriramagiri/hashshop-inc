"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useRef } from "react"

export default function XcessflowPage() {
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

      <div className="relative min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950">
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

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-8">
              <span className="text-purple-200 text-sm font-light">INVENTORY LIQUIDATION PLATFORM</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-light text-white mb-8">
              We Manage Your <span className="font-semibold text-purple-300">Overstock and Returns</span>
            </h1>

            <p className="text-xl font-light text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              By maximizing recovery and resale opportunities, we convert what would be losses into new revenue streams.
              No more wasted inventory—just seamless solutions to unlock value and keep your business moving forward.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-500 text-white font-medium text-sm transition-all duration-200 hover:bg-purple-600 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="https://www.xcessflow.com/"
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
              <div className="text-5xl font-bold text-purple-300 mb-3">20% Min</div>
              <div className="text-white/70">Guaranteed ROI</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-indigo-300 mb-3">60/40</div>
              <div className="text-white/70">Profit Share Model</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-white mb-3">FlowSync</div>
              <div className="text-white/70">WMS Platform</div>
            </div>
          </div>
        </section>

        {/* Why Choose XcessFlow */}
        <section className="relative z-20 px-8 py-24 bg-gradient-to-b from-transparent to-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Why Choose <span className="font-semibold text-purple-300">XcessFlow</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Transform your excess inventory into revenue with our comprehensive solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Unlock Cash Flow</h3>
                <p className="text-white/70 leading-relaxed">
                  Transform your store returns, damaged goods, and excess inventory into real money, opening a hidden
                  revenue stream for your business.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Maximize Recovery</h3>
                <p className="text-white/70 leading-relaxed">
                  Liquidate excess stock and optimize the value of returned or unsellable items, ensuring nothing goes
                  to waste—and you recoup lost value.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Boost Profits</h3>
                <p className="text-white/70 leading-relaxed">
                  Every dollar recovered is a dollar you can reinvest. Turn lost inventory into new opportunities,
                  scaling your business to the max.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Access Top Deals</h3>
                <p className="text-white/70 leading-relaxed">
                  Join our communities to gain access to our amazing deals with high quality products at the cheapest
                  prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-20 px-8 py-24 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Comprehensive <span className="font-semibold text-purple-300">Solutions</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From FBA automation to liquidation, we offer specialized services tailored to your inventory needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">FBA Automation</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  End-to-end Amazon FBA automation service with guaranteed minimum 20% ROI and complete supply chain
                  documentation.
                </p>
                <div className="text-xs text-purple-300 font-medium">20% Min ROI Guaranteed</div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m-8-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Distribution</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Supply manufacturers and distributors with high-quality products at competitive prices with exclusive
                  deals and full manifests.
                </p>
                <div className="text-xs text-indigo-300 font-medium">Exclusive Wholesale Deals</div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Wholesale</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Access our extensive network of wholesale buyers ready to purchase your excess inventory in bulk with
                  best price negotiations.
                </p>
                <div className="text-xs text-purple-300 font-medium">Bulk Purchase Network</div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Liquidation</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Quickly convert excess inventory into cash with data-driven pricing strategies to maximize recovery
                  value when time is critical.
                </p>
                <div className="text-xs text-indigo-300 font-medium">Fast Cash Conversion</div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">FBA & WFS Prep Service</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Specialized prep services ensuring products meet all Amazon FBA and Walmart WFS requirements including
                  packaging, labeling, and palletization.
                </p>
                <div className="text-xs text-purple-300 font-medium">Compliance Guaranteed</div>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-white mb-3">FBA/WFS Auto Removal</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Automate removal of returns and excess inventory from fulfillment centers with a 60/40 profit share
                  model maximizing your returns.
                </p>
                <div className="text-xs text-indigo-300 font-medium">60/40 Profit Share</div>
              </div>
            </div>
          </div>
        </section>

        {/* FlowSync Technology */}
        <section className="relative z-20 px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-md border border-white/20">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                Powered by <span className="font-medium">FlowSync</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 max-w-3xl">
                Our all-in-one Warehouse Management System with omnichannel listing capabilities and comprehensive
                pick-and-pack shipping solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Real-time Inventory Tracking</h3>
                    <p className="text-sm text-white/60">
                      Track inventory across multiple warehouses with live updates and automated alerts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Omnichannel Listing</h3>
                    <p className="text-sm text-white/60">
                      List and manage products across all marketplaces from one unified dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Pick-and-Pack Shipping</h3>
                    <p className="text-sm text-white/60">
                      Comprehensive shipping solutions with automated label generation and carrier selection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Advanced Analytics</h3>
                    <p className="text-sm text-white/60">
                      Revenue forecasting, performance metrics, and actionable insights to optimize operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative z-20 px-8 py-24 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                How <span className="font-semibold text-purple-300">XcessFlow</span> Works
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Three simple steps to transform your excess inventory into revenue
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Send Us Your Inventory</h3>
                <p className="text-white/70 leading-relaxed">
                  Ship your overstock, returns, or excess inventory to our facility. We handle everything from receipt
                  to processing.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">We Maximize Recovery</h3>
                <p className="text-white/70 leading-relaxed">
                  Our team evaluates and processes your inventory using data-driven strategies to maximize recovery
                  value through our distribution channels.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Get Paid</h3>
                <p className="text-white/70 leading-relaxed">
                  Receive payment for your recovered inventory value. Track everything in real-time through our FlowSync
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-20 px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Ready to Transform Your <span className="font-semibold text-purple-300">Inventory Management?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Contact us today to learn how XcessFlow can help you convert excess inventory into revenue and streamline
              your operations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-purple-500 text-white font-medium text-lg transition-all duration-200 hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              Get Started
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
