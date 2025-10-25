"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useRef } from "react"

export default function OgeoPage() {
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

      <div className="relative min-h-screen bg-gradient-to-br from-sky-950 via-slate-900 to-indigo-950">
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
            <div className="mb-8">
              <Image src="/images/ogeo-logo.png" alt="ogeo" width={200} height={60} className="mx-auto h-12 w-auto" />
            </div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/30 mb-8">
              <span className="text-sky-200 text-sm font-light">GENERATIVE ENGINE OPTIMIZATION</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-light text-white mb-8">
              Optimize for <span className="font-semibold text-sky-300">AI-Powered Search</span>
              <br />
              <span className="text-5xl md:text-6xl">with ogeo</span>
            </h1>

            <p className="text-xl font-light text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              Advanced GEO analytics for Shopify stores. With ChatGPT and Shopify's new partnership, AI assistants are
              the future of e-commerce. Stay ahead with automated optimization, competitor analysis, and revenue
              maximization powered by AI.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sky-500 text-white font-medium text-sm transition-all duration-200 hover:bg-sky-600 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="https://www.ogeo.ai/"
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
              <div className="text-5xl font-bold text-sky-300 mb-3">10K+</div>
              <div className="text-white/70">Products Optimized</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-indigo-300 mb-3">18%</div>
              <div className="text-white/70">Avg Revenue Increase</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-white mb-3">24/7</div>
              <div className="text-white/70">AI Monitoring</div>
            </div>
          </div>
        </section>

        {/* Platform Features with Images */}
        <section className="relative z-20 px-8 py-24 bg-gradient-to-b from-transparent to-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Complete <span className="font-semibold text-sky-300">GEO Platform</span> for Shopify
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Everything you need to dominate AI-powered search and maximize your Shopify store's revenue.
              </p>
            </div>

            {/* Products Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h3 className="text-3xl font-light text-white mb-6">
                  <span className="font-semibold text-sky-300">AI Product Optimization</span>
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Automatically optimize your product catalog for AI search engines. Track optimization status, monitor
                  sales performance, and see which products are ranking in LLM responses.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Real-time AI optimization status for every product</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Track total sales and inventory value</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>One-click bulk optimization across your catalog</span>
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
                  src="/images/ogeo-products.png"
                  alt="ogeo Products Management"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* AI Models Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div
                ref={(el) => {
                  imageRefs.current[1] = el
                }}
                className="flip-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:order-1"
              >
                <Image
                  src="/images/ogeo-models.png"
                  alt="ogeo AI Models Tracking"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="lg:order-2">
                <h3 className="text-3xl font-light text-white mb-6">
                  <span className="font-semibold text-indigo-300">Multi-LLM Competitor Analysis</span>
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Track how your products rank across GPT-4, Claude, Gemini, Perplexity, and more. Monitor competitor
                  mentions and optimize your store to outrank them in AI-generated recommendations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Track rankings across 8+ major AI models</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Custom search prompts to test product visibility</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Rankings preview showing competitive positioning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dashboard Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h3 className="text-3xl font-light text-white mb-6">
                  <span className="font-semibold text-sky-300">Comprehensive Analytics Dashboard</span>
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Monitor your AI search performance with detailed analytics. Track visibility trends, sentiment scores,
                  position rankings, and compare against competitors in real-time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Visibility trending and performance metrics over time</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Competitive insights comparing you with similar platforms</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg className="w-6 h-6 text-sky-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Revenue overview and LLM ranking for products</span>
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
                  src="/images/ogeo-dashboard.png"
                  alt="ogeo Analytics Dashboard"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Blogs Feature */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div
                ref={(el) => {
                  imageRefs.current[3] = el
                }}
                className="flip-card rounded-2xl overflow-hidden shadow-2xl border border-white/10 lg:order-1"
              >
                <Image
                  src="/images/ogeo-blogs.png"
                  alt="ogeo Automated Blogging"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="lg:order-2">
                <h3 className="text-3xl font-light text-white mb-6">
                  <span className="font-semibold text-indigo-300">Automated AI Blog Generation</span>
                </h3>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Generate SEO-optimized blog content automatically. Our AI creates engaging articles that drive organic
                  traffic, improve domain authority, and ensure your store appears in AI assistant responses.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Auto-generate and publish optimized blog posts</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Track views, AI optimization status, and performance</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <svg
                      className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>100K+ total views across AI-optimized content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Revolution Section */}
        <section className="relative z-20 px-8 py-24 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 backdrop-blur-md border border-white/20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-light text-white mb-6">
                  The Future of E-commerce is <span className="font-semibold">AI-Powered</span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  With ChatGPT and Shopify's groundbreaking partnership, AI assistants are becoming the new storefront.
                  Millions of customers will discover and purchase products through conversational AI. Are you ready?
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-sky-300 mb-2">70%</div>
                    <div className="text-sm text-white/70">of consumers will use AI for shopping by 2026</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-300 mb-2">5x</div>
                    <div className="text-sm text-white/70">higher conversion rates with AI optimization</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">Now</div>
                    <div className="text-sm text-white/70">is the time to get ahead of the competition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative z-20 px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                How <span className="font-semibold text-sky-300">ogeo</span> Works
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Four simple steps to dominate AI-powered search and maximize revenue
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Connect Shopify</h3>
                <p className="text-white/70 leading-relaxed">
                  One-click integration with your Shopify store. Our AI immediately begins analyzing your products and
                  identifying optimization opportunities.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI Analysis</h3>
                <p className="text-white/70 leading-relaxed">
                  Our algorithms analyze your products, competitors, and LLM performance across 8+ AI models to identify
                  revenue opportunities.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Auto-Optimize</h3>
                <p className="text-white/70 leading-relaxed">
                  Automated optimization of titles, descriptions, and content. AI-generated blogs keep your store fresh
                  and visible to AI assistants.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 font-bold text-xl mb-6">
                  4
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Maximize Revenue</h3>
                <p className="text-white/70 leading-relaxed">
                  Watch your rankings improve across AI assistants, driving more traffic and sales from the future of
                  e-commerce discovery.
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
