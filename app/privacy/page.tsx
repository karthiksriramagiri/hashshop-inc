"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"

export default function PrivacyPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <div
              ref={(el) => (fadeInRefs.current[0] = el)}
              className="opacity-0 transition-all duration-1000 ease-out"
            >
              <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
                Privacy <span className="font-medium">Policy</span>
              </h1>
              <p className="text-lg font-light text-white/80 leading-relaxed">
                Last updated: January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div
              ref={(el) => (fadeInRefs.current[1] = el)}
              className="opacity-0 transition-all duration-1000 ease-out"
            >
              <div className="prose prose-invert max-w-none">
                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Introduction</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    HASHSHOP Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Information We Collect</h2>
                  <h3 className="text-xl font-medium text-white mb-4">Personal Information</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="text-white/70 leading-relaxed mb-4 list-disc list-inside space-y-2">
                    <li>Register for an account</li>
                    <li>Contact us through our website</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Use our services</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p className="text-white/70 leading-relaxed">
                    This information may include your name, email address, phone number, company information, and other details you choose to provide.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">How We Use Your Information</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="text-white/70 leading-relaxed mb-4 list-disc list-inside space-y-2">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Improve, personalize, and expand our services</li>
                    <li>Understand and analyze how you use our services</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you for customer service and support</li>
                    <li>Send you marketing and promotional communications</li>
                    <li>Process transactions and send related information</li>
                    <li>Find and prevent fraud</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Information Sharing and Disclosure</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="text-white/70 leading-relaxed mb-4 list-disc list-inside space-y-2">
                    <li>With service providers who assist us in operating our website and conducting our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Data Security</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Your Rights</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="text-white/70 leading-relaxed mb-4 list-disc list-inside space-y-2">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to restrict processing of your information</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Cookies and Tracking Technologies</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Changes to This Privacy Policy</h2>
                  <p className="text-white/70 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h2 className="text-2xl font-medium text-white mb-6">Contact Us</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="text-white/70 leading-relaxed">
                    <p>Email: official@hashshopinc.com</p>
                    <p>Phone: +1 (425) 534-9380</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ShaderBackground>
  )
}
