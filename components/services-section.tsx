"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useRef, useEffect } from "react"

const services = [
  {
    name: "ogeo",
    description: "GEO analytics solution for Shopify sellers",
    url: "https://www.ogeo.ai/",
    slug: "ogeo",
    badge: "Analytics",
    logo: "/images/ogeo-logo.png",
  },
  {
    name: "ssello",
    description: "LATAM accelerator for global brands",
    url: "https://www.ssello.com/",
    slug: "ssello",
    badge: "LATAM",
    logo: "/images/ssello-logo.png",
  },
  {
    name: "DropMate Automation",
    description: "Amazon & Walmart seller's Operation Partner",
    url: "https://dropmate.pro/",
    slug: "dropmate-automation",
    badge: "Authorized Partner",
    logo: "/images/dropmate-logo.png",
  },
  {
    name: "DropMate3PL",
    description: "Fulfillment & warehousing for online sellers",
    url: "https://www.dropmate3pl.com/",
    slug: "dropmate3pl",
    badge: "WA & GA",
    logo: "/images/dropmate3pl-logo.png",
  },
  {
    name: "xcessflow",
    description: "Overstock & return liquidation platform",
    url: "https://www.xcessflow.com",
    slug: "xcessflow",
    badge: "Liquidation",
    logo: "/images/xcessflow-logo.png",
  },
  {
    name: "pickori",
    description: "K-Fashion & Beauty retail brand",
    url: "https://www.pickoristore.com/",
    slug: "pickori",
    badge: "Online & Offline",
    logo: "/images/pickori-logo.png",
  },
  {
    name: "SwiftBuy",
    description: "Major Appliances & Electronic Commercial Store",
    url: "https://swiftbuy.ai/",
    slug: "swiftbuy",
    badge: "B2B",
    logo: "/images/swiftbuy-logo.png",
  },
  {
    name: "Urban&More",
    description: "Major Appliances, Automotive & Electronic Retail",
    url: "https://www.urbanandmore.com/",
    slug: "urban-and-more",
    badge: "B2C",
    logo: "/images/urban-and-more-logo.png",
  },
]

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isUserScrollingRef = useRef(false)
  const isHoveringRef = useRef(false)
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const isMobileRef = useRef(false)
  const scrollSpeedRef = useRef(0.5) // pixels per frame - adjust for speed
  const lastScrollLeftRef = useRef(0)
  const startAutoScrollRef = useRef<(() => void) | null>(null)

  // Check if mobile device
  const checkIsMobile = () => {
    if (typeof window !== 'undefined') {
      isMobileRef.current = window.innerWidth < 768 // md breakpoint
    }
    return isMobileRef.current
  }

  // Auto-scroll function
  useEffect(() => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    checkIsMobile()

    // Continuous smooth scrolling function
    const startAutoScroll = () => {
      if (!isMobileRef.current || isUserScrollingRef.current) return

      // Clear any existing animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      const animate = () => {
        if (!container || isUserScrollingRef.current || !isMobileRef.current || isHoveringRef.current) {
          animationFrameRef.current = null
          return
        }

        const maxScroll = container.scrollWidth - container.clientWidth
        const currentScroll = container.scrollLeft

        // If we've reached the end, just pause (don't loop back)
        if (currentScroll >= maxScroll - 1) {
          animationFrameRef.current = null
          return
        }

        // Smoothly scroll right continuously from current position
        const newScroll = currentScroll + scrollSpeedRef.current
        container.scrollLeft = newScroll
        lastScrollLeftRef.current = newScroll
        animationFrameRef.current = requestAnimationFrame(animate)
      }

      // Start animation from current position
      setTimeout(() => {
        if (isMobileRef.current && !isUserScrollingRef.current && !isHoveringRef.current) {
          animationFrameRef.current = requestAnimationFrame(animate)
        }
      }, 500)
    }

    // Store function in ref for access from hover handlers
    startAutoScrollRef.current = startAutoScroll

    // Handle user scroll interaction
    const handleScroll = () => {
      if (!isMobileRef.current) return

      const currentScroll = container.scrollLeft
      const expectedScroll = lastScrollLeftRef.current
      const scrollDiff = Math.abs(currentScroll - expectedScroll)

      // Only pause if scroll changed significantly more than expected (user-initiated)
      // This accounts for the small increment we're doing programmatically
      if (scrollDiff > scrollSpeedRef.current * 2) {
        isUserScrollingRef.current = true

        // Clear existing timer
        if (scrollTimerRef.current) {
          clearTimeout(scrollTimerRef.current)
        }

        // Clear animation frame
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
          animationFrameRef.current = null
        }

        // Update last scroll position to current (resume from where user scrolled)
        lastScrollLeftRef.current = currentScroll

        // Resume auto-scroll after 2 seconds of inactivity from current position
        scrollTimerRef.current = setTimeout(() => {
          isUserScrollingRef.current = false
          startAutoScroll()
        }, 2000)
      }
    }

    // Handle window resize
    const handleResize = () => {
      const wasMobile = isMobileRef.current
      checkIsMobile()

      // If switching from mobile to desktop or vice versa
      if (wasMobile !== isMobileRef.current) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
          animationFrameRef.current = null
        }
        if (scrollTimerRef.current) {
          clearTimeout(scrollTimerRef.current)
          scrollTimerRef.current = null
        }
        isUserScrollingRef.current = false

        if (isMobileRef.current) {
          startAutoScroll()
        }
      }
    }

    // Start auto-scroll on mobile
    if (isMobileRef.current) {
      startAutoScroll()
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current)
      }
    }
  }, [])

  return (
    <section id="services-section" className="relative z-20 px-8 py-24 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
          Our <span className="font-medium italic instrument">Services</span>
        </h2>
        <p className="text-sm font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
          Building tools and services that power the next generation of global online selling
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 px-4 md:px-0 md:contents scrollbar-hide" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.15] shadow-lg flex-shrink-0 w-80 md:w-auto md:flex-shrink"
              onMouseEnter={() => {
                if (isMobileRef.current) {
                  isHoveringRef.current = true
                  // Pause auto-scroll
                  if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current)
                    animationFrameRef.current = null
                  }
                }
              }}
              onMouseLeave={() => {
                if (isMobileRef.current) {
                  isHoveringRef.current = false
                  // Resume auto-scroll if not user scrolling
                  if (!isUserScrollingRef.current && startAutoScrollRef.current) {
                    // Start from current position
                    const container = scrollContainerRef.current
                    if (container) {
                      lastScrollLeftRef.current = container.scrollLeft
                    }
                    startAutoScrollRef.current()
                  }
                }
              }}
            >
            <div className="flex flex-col h-full">
              <div
                className={`h-10 flex items-center ${
                  service.slug === "xcessflow" ||
                  service.slug === "ogeo" ||
                  service.slug === "ssello" ||
                  service.slug === "pickori" ||
                  service.slug === "swiftbuy" ||
                  service.slug === "urban-and-more" ||
                  service.slug === "dropmate-automation" ||
                  service.slug === "dropmate3pl"
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
                <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">Learn more</span>
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
            Client <span className="font-medium italic instrument">Success Stories</span>
          </h3>
          <p className="text-sm font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            Real results from businesses that trust our ecosystem
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
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-sm text-white/70 mb-3">New Markets</div>
            <p className="text-xs text-white/60 leading-relaxed">
              "ssello's LATAM expansion strategy helped us enter 15+ new markets across Latin America in just 8 months."
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
            Join Our <span className="font-medium italic instrument">Team</span>
          </h3>
          <p className="text-sm font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            Build the future of e-commerce with us. We're looking for passionate individuals to join our growing team.
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
            <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">View Details →</div>
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
            <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">View Details →</div>
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
            <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">View Details →</div>
          </a>
        </div>

        <div className="text-center">
          <a 
            href="/careers" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white font-medium text-sm"
          >
            View All Open Positions
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

export { services }
