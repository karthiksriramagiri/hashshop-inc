"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function HeroContent() {
  const { t } = useLanguage()
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative z-20 max-w-3xl mx-auto px-8 text-center">
      <div>
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">{t('poweringGlobalCommerce')}</span>
        </div>

        <h1 className="text-5xl md:text-7xl md:leading-tight tracking-tight font-light text-white mb-6">
          <span className="font-medium italic instrument">{t('buildingTheFuture')}</span> the Future
          <br />
          <span className="font-light tracking-tight text-white">{t('ofEcommerce')}</span>
        </h1>

        <p className="text-sm font-light text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
          {t('heroDescription')}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="/contact" className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            {t('getStarted')}
          </a>
        </div>

        <button
          onClick={scrollToServices}
          className="mt-12 inline-flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Scroll to services"
        >
          <div className="relative w-20 h-20 flex items-center justify-center">
            <PulsingBorder
              colors={["#BEECFF", "#E77EDC", "#FF4C3E", "#00FF88", "#FFD700", "#FF6B35", "#8A2BE2"]}
              colorBack="#00000000"
              speed={1.5}
              roundness={1}
              thickness={0.1}
              softness={0.2}
              intensity={5}
              spotsPerColor={5}
              spotSize={0.1}
              pulse={0.1}
              smoke={0.5}
              smokeSize={4}
              scale={0.65}
              rotation={0}
              frame={9161408.251009725}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            />
          </div>
        </button>
      </div>
    </main>
  )
}
