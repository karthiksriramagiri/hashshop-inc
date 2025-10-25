"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DropMate3PLPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
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
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <Header />

      <main className="relative z-20 px-8 py-16 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors mb-12 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 mb-6">
              <span className="text-emerald-200 text-xs font-light">WA & GA</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              <span className="font-medium">DropMate3PL</span>
            </h1>

            <p className="text-2xl font-light text-white/90 leading-relaxed mb-4">
              Revolutionizing E-commerce Fulfillment
            </p>

            <p className="text-lg font-light text-white/70 leading-relaxed mb-8">
              Supercharge your e-commerce with smart fulfillment. DropMate delivers seamless 3PL services and 2-step
              dropshipping solutions that scale with your business. No order limits, no hidden fees.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-white font-medium text-sm transition-all duration-200 hover:bg-emerald-600 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="https://www.dropmate3pl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-emerald-950 font-medium text-sm transition-all duration-200 hover:bg-emerald-50 shadow-lg hover:shadow-xl"
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
              <h3 className="text-lg font-medium text-white mb-3">NO Order Limits</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Unlike other services, we don't restrict your order volume, allowing your business to scale without
                constraints. Grow as fast as you want without hitting artificial caps.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">NO Storage Fees for 3 Months</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Get started without immediate storage costs - we offer free storage for your first 3 months with us.
                Build momentum without worrying about warehousing fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">Same Day Shipping Guaranteed</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Orders confirmed before 3PM PST are guaranteed to ship the same day, improving your customer experience
                and satisfaction rates dramatically.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-lg font-medium text-white mb-3">NO Integration Fees</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We don't charge integration or software usage fees, making our service more accessible and
                cost-effective for your business.
              </p>
            </div>
          </div>
        </div>
        {/* </CHANGE> */}

        <section className="fade-in-section opacity-0 transition-all duration-1000 mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4">
            Our <span className="font-medium">Services</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive fulfillment solutions tailored to your business needs with transparent pricing and exceptional
            support.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">3PL Service</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Our comprehensive 3PL service handles your entire fulfillment process with precision and care.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Receiving & Storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Pick, Pack & Ship</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Returns Management</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">2-Step Dropshipping</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Our innovative 2-Step Dropshipping service bridges the gap between traditional dropshipping and 3PL
                fulfillment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Purchasing Service</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Repackaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Transaction Transparency</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">FBA/WFS Prep Service</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Our specialized preparation services ensure your products meet all Amazon FBA and Walmart WFS
                requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Marketplace Compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Inspection & Quality Control</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Seamless Integration</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Full Integration</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Our services seamlessly integrate with your existing systems through our powerful OMS/WMS platform.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Real-time inventory synchronization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">Automatic order routing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/60">No integration fees</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        <section className="fade-in-section opacity-0 transition-all duration-1000 mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4">
            Our Core <span className="font-medium">Values</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-16 max-w-3xl mx-auto">
            The principles that guide everything we do at DropMate
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Transparency</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Complete transparency in our pricing, processes, and communication. No hidden fees, no surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-400/50 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Reliability</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                We deliver on our promises, ensuring your orders are fulfilled accurately and on time, every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Partnership</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                We see ourselves as an extension of your team, working together to help your business grow and succeed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-400/50 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Innovation</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                We continuously improve our processes and technology to provide the best possible fulfillment solutions.
              </p>
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        <section className="fade-in-section opacity-0 transition-all duration-1000 mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4">
            How DropMate <span className="font-medium">Works</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-16 max-w-3xl mx-auto">
            Our streamlined process makes fulfillment simple, efficient, and scalable for businesses of all sizes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-300">1</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Inventory Receipt</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Send your inventory to our fulfillment centers where we'll receive, inspect, and store it securely.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-400/50 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-300">2</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Order Processing</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                As orders come in from your sales channels, we automatically process them in real-time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-300">3</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Picking & Shipping</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                We pick, pack, and ship your orders with care, using the most cost-effective shipping methods.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-400/50 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-300">4</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Tracking & Analytics</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Monitor inventory levels, order status, and performance metrics through our dashboard.
              </p>
            </div>
          </div>
        </section>

        <section className="fade-in-section opacity-0 transition-all duration-1000 mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-4">
            Our <span className="font-medium">Locations</span>
          </h2>
          <p className="text-lg text-white/60 text-center mb-16 max-w-3xl mx-auto">
            Strategically located fulfillment centers for efficient nationwide delivery
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">Washington (WA) 🇺🇸</h3>
                  <p className="text-white/60 text-sm mb-4">3333 184th ST SW STE S, Lynnwood, WA 98037</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Our West Coast fulfillment center is strategically located in Seattle, Washington, allowing for fast
                    delivery to the western United States and efficient processing of imports from Asia.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">Georgia (GA) 🇺🇸</h3>
                  <p className="text-white/60 text-sm mb-4">3349A Buford Hwy NE, Atlanta, GA 30329</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Our East Coast fulfillment center in Atlanta, Georgia, provides quick access to the eastern United
                    States and efficient shipping to Europe and South America.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        <section className="fade-in-section opacity-0 transition-all duration-1000 mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
            Why Choose <span className="font-medium">DropMate</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Same Day Shipping Guaranteed</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Orders confirmed before 3PM PST are guaranteed to ship the same day, improving your customer experience.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Cheapest 3PL Rate in US</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                We offer the most competitive 3PL rates in the industry, helping you maximize your profit margins.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Dedicated Account Manager</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Every client gets a dedicated account manager to ensure personalized service and support.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">NO Order Limits</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Unlike other services, we don't restrict your order volume, allowing your business to scale without
                constraints.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">NO Storage Fees for 3 Months</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Get started without immediate storage costs - we offer free storage for your first 3 months with us.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">NO Integration Fees</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                We don't charge integration or software usage fees, making our service more accessible and
                cost-effective.
              </p>
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        <section className="fade-in-section opacity-0 transition-all duration-1000">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <div className="text-4xl font-bold text-emerald-300 mb-2">No Limits</div>
              <div className="text-sm text-white/60">Order Volume</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">3 Months</div>
              <div className="text-sm text-white/60">Free Storage</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <div className="text-4xl font-bold text-white mb-2">3PM PST</div>
              <div className="text-sm text-white/60">Same Day Cutoff</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
              <div className="text-4xl font-bold text-emerald-200 mb-2">$0</div>
              <div className="text-sm text-white/60">Integration Fees</div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .fade-in-section {
          transform: translateY(30px);
        }
      `}</style>
      <Footer />
    </div>
  )
}
