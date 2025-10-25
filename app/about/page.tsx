"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"

export default function AboutPage() {
  const fadeInRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    fadeInRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <ShaderBackground>
      <Header />
      
      <main className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div
              ref={(el) => (fadeInRefs.current[0] = el)}
              className="opacity-0 transition-all duration-1000 ease-out"
            >
              <h1 className="text-6xl md:text-7xl font-light text-white mb-8">
                About <span className="font-medium">HASHSHOP Inc.</span>
              </h1>
              <p className="text-xl font-light text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto">
                We're a comprehensive e-commerce solutions company that empowers businesses to thrive in the digital marketplace through innovative technology and strategic partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div
                ref={(el) => (fadeInRefs.current[1] = el)}
                className="opacity-0 transition-all duration-1000 ease-out"
              >
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h2 className="text-3xl font-light text-white mb-6">Our Mission</h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    To democratize e-commerce success by providing cutting-edge tools, seamless automation, and strategic market access that enables businesses of all sizes to compete and thrive in the global marketplace.
                  </p>
                </div>
              </div>
              
              <div
                ref={(el) => (fadeInRefs.current[2] = el)}
                className="opacity-0 transition-all duration-1000 ease-out"
              >
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h2 className="text-3xl font-light text-white mb-6">Our Vision</h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    To become the world's leading e-commerce ecosystem, where every business has access to the tools, insights, and opportunities needed to achieve sustainable growth and market leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              ref={(el) => (fadeInRefs.current[3] = el)}
              className="opacity-0 transition-all duration-1000 ease-out"
            >
              <h2 className="text-4xl font-light text-white mb-8">Our Story</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Founded with a vision to bridge the gap between traditional commerce and the digital future, HASHSHOP Inc. emerged from the recognition that businesses needed more than just tools—they needed a comprehensive ecosystem of solutions.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Our journey began with identifying the pain points that plague modern e-commerce: inventory management challenges, marketplace complexity, geographic limitations, and the need for intelligent automation. We set out to solve these problems not with isolated solutions, but with an integrated approach that addresses every aspect of the e-commerce lifecycle.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Today, we're proud to serve businesses across multiple continents, helping them navigate the complexities of modern commerce while unlocking new opportunities for growth and success.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              ref={(el) => (fadeInRefs.current[4] = el)}
              className="opacity-0 transition-all duration-1000 ease-out text-center mb-16"
            >
              <h2 className="text-4xl font-light text-white mb-8">Our Values</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we serve our clients and partners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div
                ref={(el) => (fadeInRefs.current[5] = el)}
                className="opacity-0 transition-all duration-1000 ease-out"
              >
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Innovation</h3>
                  <p className="text-white/70">
                    We continuously push the boundaries of what's possible in e-commerce, leveraging cutting-edge technology to create solutions that anticipate tomorrow's needs.
                  </p>
                </div>
              </div>
              
              <div
                ref={(el) => (fadeInRefs.current[6] = el)}
                className="opacity-0 transition-all duration-1000 ease-out"
              >
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Reliability</h3>
                  <p className="text-white/70">
                    Our clients depend on us for mission-critical operations. We build robust, scalable solutions that businesses can trust with their most important processes.
                  </p>
                </div>
              </div>
              
              <div
                ref={(el) => (fadeInRefs.current[7] = el)}
                className="opacity-0 transition-all duration-1000 ease-out"
              >
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">Partnership</h3>
                  <p className="text-white/70">
                    We believe in building lasting relationships. Our success is measured by our clients' success, and we're committed to being true partners in their growth journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              ref={(el) => (fadeInRefs.current[8] = el)}
              className="opacity-0 transition-all duration-1000 ease-out"
            >
              <h2 className="text-4xl font-light text-white mb-8">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-white/70 mb-12">
                Join thousands of businesses that trust HASHSHOP Inc. to power their e-commerce success.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
                <a
                  href="/#services-section"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-sm transition-all duration-200 hover:bg-white/20 border border-white/20"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ShaderBackground>
  )
}
