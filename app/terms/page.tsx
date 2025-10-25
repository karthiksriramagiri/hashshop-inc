"use client"

import { useEffect, useRef } from "react"
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import Footer from "@/components/footer"

export default function TermsPage() {
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
                Terms of <span className="font-medium">Service</span>
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
                  <h2 className="text-2xl font-medium text-white mb-6">Agreement to Terms</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    By accessing and using the services provided by HASHSHOP Inc. ("Company," "we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Use License</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials on HASHSHOP Inc.'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="text-white/70 leading-relaxed mb-4 list-disc list-inside space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Service Description</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    HASHSHOP Inc. provides comprehensive e-commerce solutions including but not limited to:
                  </p>
                  <ul className="text-white/70 leading-relaxed mb-4 list-disc list-inside space-y-2">
                    <li>Inventory liquidation services (XcessFlow)</li>
                    <li>LATAM e-commerce expansion (ssello)</li>
                    <li>AI-powered analytics (ogeo)</li>
                    <li>K-beauty marketplace (Pickori)</li>
                    <li>B2B marketplace (SwiftBuy)</li>
                    <li>Home and lifestyle products (Urban & More)</li>
                    <li>E-commerce automation (DropMate)</li>
                    <li>3PL fulfillment services (DropMate 3PL)</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">User Accounts</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Payment Terms</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise specified in writing. We reserve the right to change our pricing with 30 days' notice.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Prohibited Uses</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    You may not use our services:
                  </p>
                  <ul className="text-white/70 leading-relaxed mb-4 list-disc list-inside space-y-2">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Intellectual Property</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    The service and its original content, features, and functionality are and will remain the exclusive property of HASHSHOP Inc. and its licensors. The service is protected by copyright, trademark, and other laws.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Termination</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Disclaimer</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
                  </p>
                  <ul className="text-white/70 leading-relaxed mb-4 list-disc list-inside space-y-2">
                    <li>Excludes all representations and warranties relating to this website and its contents</li>
                    <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Governing Law</h2>
                  <p className="text-white/70 leading-relaxed">
                    These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                  <h2 className="text-2xl font-medium text-white mb-6">Changes to Terms</h2>
                  <p className="text-white/70 leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <h2 className="text-2xl font-medium text-white mb-6">Contact Information</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
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
