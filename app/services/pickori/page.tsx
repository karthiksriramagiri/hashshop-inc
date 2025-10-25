"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useRef } from "react"

export default function PickoriPage() {
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

      <div className="relative min-h-screen bg-gradient-to-br from-pink-950 via-slate-900 to-fuchsia-950">
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
              <Image src="/images/pickori-logo.png" alt="pickori" width={300} height={100} className="h-16 w-auto" />
            </div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30 mb-8">
              <span className="text-pink-200 text-sm font-light">K-BEAUTY MARKETPLACE & RETAIL</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-light text-white mb-8">
              Discover <span className="font-semibold text-pink-300">K-Beauty</span>
              <br />
              <span className="text-5xl md:text-6xl">Online & In-Store</span>
            </h1>

            <p className="text-xl font-light text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
              Curated K-beauty marketplace featuring authentic Korean skincare, makeup, and wellness products. Shop online or visit our physical stores for personalized beauty consultations and exclusive collections.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.pickoristore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-pink-500 text-white font-medium text-sm transition-all duration-200 hover:bg-pink-600 shadow-lg hover:shadow-xl"
              >
                Visit Website
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm transition-all duration-200 hover:bg-white/20 border border-white/20"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-pink-300 mb-3">100+</div>
              <div className="text-white/70">K-Beauty Brands</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-fuchsia-300 mb-3">10+</div>
              <div className="text-white/70">Physical Stores</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-bold text-white mb-3">5K+</div>
              <div className="text-white/70">Happy Customers</div>
            </div>
          </div>
        </section>


        {/* Product Categories Section */}
        <section className="relative z-20 px-8 py-24 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Shop by <span className="font-semibold text-pink-300">Category</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover our carefully curated selection of K-beauty products across all categories, from skincare essentials to makeup must-haves.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Skincare", description: "Cleansers, toners, serums" },
                { name: "Makeup", description: "Foundation, lipstick, eyeshadow" },
                { name: "Hair Care", description: "Shampoo, treatments, styling" },
                { name: "Body Care", description: "Lotions, scrubs, oils" },
                { name: "Men's Care", description: "Grooming essentials" },
                { name: "Tools & Accessories", description: "Beauty tools, applicators" },
                { name: "Wellness", description: "Supplements, aromatherapy" },
                { name: "Limited Edition", description: "Exclusive collections" },
              ].map((category, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200 text-center"
                >
                  <div className="text-white font-medium mb-2">{category.name}</div>
                  <div className="text-white/50 text-sm">{category.description}</div>
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
                How <span className="font-semibold text-pink-300">pickori</span> Works
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Three simple ways to discover and shop authentic K-beauty products
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-300 font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Browse Online</h3>
                <p className="text-white/70 leading-relaxed">
                  Explore our curated collection of authentic K-beauty products online. Read detailed descriptions, reviews, and ingredient lists to find your perfect match.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/30 flex items-center justify-center text-fuchsia-300 font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Visit Our Stores</h3>
                <p className="text-white/70 leading-relaxed">
                  Experience products firsthand at our physical locations. Get personalized consultations from our K-beauty experts and test products before you buy.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Join Our Community</h3>
                <p className="text-white/70 leading-relaxed">
                  Learn from beauty experts, attend workshops, and connect with fellow K-beauty enthusiasts. Stay updated with the latest trends and product launches.
                </p>
              </div>
          </div>
          </div>
        </section>
        <Footer />
        </div>
    </>
  )
}