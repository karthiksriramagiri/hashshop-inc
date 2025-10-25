"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"

export default function ShaderShowcase() {
  return (
    <ShaderBackground>
      <Header />
      <div className="min-h-screen relative flex items-center">
        <HeroContent />
      </div>
      <ServicesSection />
      <Footer />
    </ShaderBackground>
  )
}
