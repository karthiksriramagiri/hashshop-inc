"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { ArrowUpRight } from "lucide-react"


export default function ServicesSection() {
  const { t } = useLanguage()
  
  const services = [
    {
      name: t('ogeo'),
      description: t('ogeoDescription'),
      url: "https://www.ogeo.ai/",
      slug: "ogeo",
      badge: t('ogeoBadge'),
      logo: "/images/ogeo-logo.png",
    },
    {
      name: t('ssello'),
      description: t('sselloDescription'),
      url: "https://www.ssello.com/",
      slug: "ssello",
      badge: t('sselloBadge'),
      logo: "/images/ssello-logo.png",
    },
    {
      name: t('dropmateAutomation'),
      description: t('dropmateAutomationDescription'),
      url: "https://dropmate.pro/",
      slug: "dropmate-automation",
      badge: t('dropmateAutomationBadge'),
      logo: "/images/dropmate-logo.png",
    },
    {
      name: t('dropmate3pl'),
      description: t('dropmate3plDescription'),
      url: "https://www.dropmate3pl.com/",
      slug: "dropmate3pl",
      badge: t('dropmate3plBadge'),
      logo: "/images/dropmate3pl-logo.png",
    },
    {
      name: t('xcessflow'),
      description: t('xcessflowDescription'),
      url: "https://www.xcessflow.com",
      slug: "xcessflow",
      badge: t('xcessflowBadge'),
      logo: "/images/xcessflow-logo.png",
    },
    {
      name: t('pickori'),
      description: t('pickoriDescription'),
      url: "https://www.pickoristore.com/",
      slug: "pickori",
      badge: t('pickoriBadge'),
      logo: "/images/pickori-logo.png",
    },
    {
      name: t('swiftbuy'),
      description: t('swiftbuyDescription'),
      url: "https://swiftbuy.ai/",
      slug: "swiftbuy",
      badge: t('swiftbuyBadge'),
      logo: "/images/swiftbuy-logo.png",
    },
    {
      name: t('urbanAndMore'),
      description: t('urbanAndMoreDescription'),
      url: "https://www.urbanandmore.com/",
      slug: "urban-and-more",
      badge: t('urbanAndMoreBadge'),
      logo: "/images/urban-and-more-logo.png",
    },
  ]
  
  return (
    <section id="services-section" className="relative z-20 px-8 py-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
          {t('ourServices')} <span className="font-medium italic instrument">{t('servicesTitle')}</span>
        </h2>
        <p className="text-sm font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
          {t('servicesDescription')}
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        <div className="flex overflow-x-auto gap-4 pb-4 px-4 md:px-0 md:contents scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.15] shadow-lg flex-shrink-0 w-80 md:w-auto md:flex-shrink"
            >
            <div className="flex flex-col h-full">
              <div
                className={`h-10 flex items-center ${
                  service.slug === "xcessflow" ||
                  service.slug === "ogeo" ||
                  service.slug === "ssello" ||
                  service.slug === "pickori" ||
                  service.slug === "swiftbuy" ||
                  service.slug === "urban-and-more"
                    ? "justify-center"
                    : ""
                }`}
              >
                <Image
                  src={service.logo || "/placeholder.svg"}
                  alt={`${service.name} logo`}
                  width={120}
                  height={40}
                  className={`${
                    service.slug === "xcessflow"
                      ? "h-48 w-auto"
                      : service.slug === "urban-and-more"
                        ? "h-16 w-auto"
                        : "h-8 w-auto"
                  } object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-lg`}
                />
              </div>

              <p className="text-sm font-light text-white/60 leading-relaxed mb-4 flex-grow mt-4">{service.description}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">{t('learnMore')}</span>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>

      {/* Client Success Stories */}
      <div className="mt-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t('clientSuccessStories')} <span className="font-medium italic instrument">{t('successStories')}</span>
          </h3>
          <p className="text-sm font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t('successStoriesDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.3M</div>
            <div className="text-sm text-white/70 mb-3">Revenue Recovered</div>
            <p className="text-xs text-white/60 leading-relaxed">
              "XcessFlow helped us recover 85% of our overstock inventory value that was previously written off as losses."
            </p>
            <div className="text-xs text-white/50 mt-3">- Electronics Retailer, California</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-3xl font-bold text-blue-400 mb-2">340%</div>
            <div className="text-sm text-white/70 mb-3">Sales Growth</div>
            <p className="text-xs text-white/60 leading-relaxed">
              "ssello's LATAM expansion strategy increased our market reach and revenue by 340% in just 8 months."
            </p>
            <div className="text-xs text-white/50 mt-3">- Fashion Brand, New York</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
            <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
            <div className="text-sm text-white/70 mb-3">Efficiency Gain</div>
            <p className="text-xs text-white/60 leading-relaxed">
              "DropMate's automation reduced our operational costs by 92% while scaling our Amazon business 5x."
            </p>
            <div className="text-xs text-white/50 mt-3">- Home Goods Seller, Texas</div>
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="mt-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t('careers')}
          </h3>
          <p className="text-sm font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t('careersDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <a href="/careers" className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group block">
            <div className="text-lg font-semibold text-white mb-2">Sales Representative</div>
            <div className="text-sm text-white/70 mb-3">Remote • Full-time</div>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              Drive growth by building relationships with e-commerce sellers and helping them scale their businesses.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">Sales</span>
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded-full">CRM</span>
              <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">E-commerce</span>
            </div>
            <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">{t('viewDetails')}</div>
          </a>

          <a href="/careers" className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group block">
            <div className="text-lg font-semibold text-white mb-2">AI Engineer</div>
            <div className="text-sm text-white/70 mb-3">Remote • Full-time</div>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              Develop cutting-edge AI solutions for inventory management, pricing optimization, and predictive analytics.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded-full">Python</span>
              <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-300 rounded-full">TensorFlow</span>
              <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">ML</span>
            </div>
            <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">{t('viewDetails')}</div>
          </a>

          <a href="/careers" className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group block">
            <div className="text-lg font-semibold text-white mb-2">Backend Engineer</div>
            <div className="text-sm text-white/70 mb-3">Remote • Full-time</div>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              Build scalable backend systems that power our e-commerce ecosystem and handle millions of transactions.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded-full">Node.js</span>
              <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">PostgreSQL</span>
              <span className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">AWS</span>
            </div>
            <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">{t('viewDetails')}</div>
          </a>
        </div>

        <div className="text-center">
          <a 
            href="/careers" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white font-medium text-sm"
          >
{t('viewAllOpenPositions')}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-24">
        <p className="text-xs font-light text-white/50 mb-4">
          Empowering sellers → Optimizing operations → Expanding markets → Reinventing commerce
        </p>
      </div>
    </section>
  )
}

