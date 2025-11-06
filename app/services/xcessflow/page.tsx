
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
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

        .floating-bg {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-slate-900/90 to-indigo-950/90"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/30 to-transparent"></div>
          
          {/* Floating background orbs */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Additional hero section effects */}
          <div className="absolute top-1/6 left-1/4 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl floating-bg" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-indigo-400/15 rounded-full blur-2xl floating-bg" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-2/3 left-1/6 w-28 h-28 bg-blue-400/20 rounded-full blur-2xl floating-bg" style={{animationDelay: '2.5s'}}></div>
        </div>
        <Header />

        {/* Hero Section */}
        <section className="relative z-20 px-4 sm:px-8 pt-20 sm:pt-24 pb-16 sm:pb-20 lg:pb-24 max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors mb-8 sm:mb-12 text-sm px-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">

            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-6 sm:mb-8 mx-4">
              <span className="text-purple-200 text-xs sm:text-sm font-light">INVENTORY LIQUIDATION PLATFORM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-white mb-6 sm:mb-8 leading-tight px-4">
              We Manage Your <span className="font-semibold text-purple-300">Overstock and Returns</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-light text-white/80 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              By maximizing recovery and resale opportunities, we convert what would be losses into new revenue streams.
              No more wasted inventory—just seamless solutions to unlock value and keep your business moving forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 max-w-md sm:max-w-none mx-auto">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 lg:px-6 py-3 sm:py-4 lg:py-3 rounded-full bg-purple-500 text-white font-medium text-sm lg:text-sm transition-all duration-200 hover:bg-purple-600 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="https://www.xcessflow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 lg:px-6 py-3 sm:py-4 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm lg:text-sm transition-all duration-200 hover:bg-white/20 border border-white/20"
              >
                Visit Website
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-300 mb-2 sm:mb-3">20% Min</div>
              <div className="text-white/70 text-sm sm:text-base">Guaranteed ROI</div>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-300 mb-2 sm:mb-3">48hrs</div>
              <div className="text-white/70 text-sm sm:text-base">Fast Processing</div>
            </div>
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">100%</div>
              <div className="text-white/70 text-sm sm:text-base">Transparent Pricing</div>
            </div>
          </div>
        </section>

        {/* Why Choose XcessFlow */}
        <section className="relative z-20 px-4 sm:px-8 py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-transparent to-slate-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-light text-white mb-4 sm:mb-6 px-4">
                Why Choose <span className="font-semibold text-purple-300">XcessFlow</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-white/70 max-w-3xl mx-auto px-4">
                Transform your excess inventory into revenue with our comprehensive solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-4">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
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
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Unlock Cash Flow</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Transform your store returns, damaged goods, and excess inventory into real money, opening a hidden
                  revenue stream for your business.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
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
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Maximize Recovery</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Liquidate excess stock and optimize the value of returned or unsellable items, ensuring nothing goes
                  to waste—and you recoup lost value.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
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
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Boost Profits</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Every dollar recovered is a dollar you can reinvest. Turn lost inventory into new opportunities,
                  scaling your business to the max.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
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
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Access Top Deals</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Join our communities to gain access to our amazing deals with high quality products at the cheapest
                  prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-20 px-4 sm:px-8 py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-light text-white mb-4 sm:mb-6 px-4">
                Comprehensive <span className="font-semibold text-purple-300">Solutions</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-white/70 max-w-3xl mx-auto px-4">
                From FBA automation to liquidation, we offer specialized services tailored to your inventory needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 text-center">FBA Automation</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-3 sm:mb-4 text-center">
                  End-to-end Amazon FBA automation service with guaranteed minimum 20% ROI and complete supply chain
                  documentation.
                </p>
                <div className="text-xs text-purple-300 font-medium text-center">20% Min ROI Guaranteed</div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m-8-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 text-center">Distribution</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-3 sm:mb-4 text-center">
                  Supply manufacturers and distributors with high-quality products at competitive prices with exclusive
                  deals and full manifests.
                </p>
                <div className="text-xs text-indigo-300 font-medium text-center">Exclusive Wholesale Deals</div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 text-center">Wholesale</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-3 sm:mb-4 text-center">
                  Access our extensive network of wholesale buyers ready to purchase your excess inventory in bulk with
                  best price negotiations.
                </p>
                <div className="text-xs text-purple-300 font-medium text-center">Bulk Purchase Network</div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 text-center">Liquidation</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-3 sm:mb-4 text-center">
                  Quickly convert excess inventory into cash with data-driven pricing strategies to maximize recovery
                  value when time is critical.
                </p>
                <div className="text-xs text-indigo-300 font-medium text-center">Fast Cash Conversion</div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 text-center">FBA & WFS Prep Service</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-3 sm:mb-4 text-center">
                  Specialized prep services ensuring products meet all Amazon FBA and Walmart WFS requirements including
                  packaging, labeling, and palletization.
                </p>
                <div className="text-xs text-purple-300 font-medium text-center">Compliance Guaranteed</div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3 text-center">FBA/WFS Auto Removal</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-3 sm:mb-4 text-center">
                  Automate removal of returns and excess inventory from fulfillment centers with transparent pricing
                  and fast processing to maximize your returns.
                </p>
                <div className="text-xs text-indigo-300 font-medium text-center">Transparent Pricing</div>
              </div>
            </div>
          </div>
        </section>


        {/* How It Works */}
        <section className="relative z-20 px-4 sm:px-8 py-12 sm:py-16 lg:py-20 xl:py-24 bg-slate-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-light text-white mb-4 sm:mb-6 px-4">
                How <span className="font-semibold text-purple-300">XcessFlow</span> Works
              </h2>
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-white/70 max-w-3xl mx-auto px-4">
                Three simple steps to transform your excess inventory into revenue
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                  1
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Send Us Your Inventory</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Ship your overstock, returns, or excess inventory to our facility. We handle everything from receipt
                  to processing.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                  2
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">We Maximize Recovery</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Our team evaluates and processes your inventory using data-driven strategies to maximize recovery
                  value through our distribution channels.
                </p>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                  3
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Get Paid</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Receive payment for your recovered inventory value. Track everything in real-time through our
                  comprehensive dashboard platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-20 px-4 sm:px-8 py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-light text-white mb-4 sm:mb-6 px-4">
              Ready to Transform Your <span className="font-semibold text-purple-300">Inventory Management?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-white/70 mb-8 sm:mb-12 px-4">
              Contact us today to learn how XcessFlow can help you convert excess inventory into revenue and streamline
              your operations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-4 xl:py-5 rounded-full bg-purple-500 text-white font-medium text-sm sm:text-base lg:text-base xl:text-lg transition-all duration-200 hover:bg-purple-600 shadow-lg hover:shadow-xl"
            >
              Get Started
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
