"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const brands = [
  {
    name: "Dhudiya Pictures",
    logo: "https://dhudiya.com/themes/images/brands/pictures.png",
    description: "Film & Entertainment"
  },
  {
    name: "Dhudiya Music Group",
    logo: "https://dhudiya.com/themes/images/brands/music.png",
    description: "Music & Audio"
  },
  {
    name: "Dhudiya Games",
    logo: "https://dhudiya.com/themes/images/brands/games.png",
    description: "Gaming & Interactive"
  },
  {
    name: "Phantastic Studioz",
    logo: "https://dhudiya.com/themes/images/brands/phantastic.png",
    description: "Animation & VFX"
  },
  {
    name: "Dhudiya Interactive",
    logo: "https://dhudiya.com/themes/images/brands/interactive.png",
    description: "Digital Products"
  },
  {
    name: "Dhudiya Publishing",
    logo: "https://dhudiya.com/themes/images/brands/publishing.png",
    description: "Books & Publishing"
  },
]

export function BrandCarousel() {
  const [autoScroll, setAutoScroll] = useState(true)

  useEffect(() => {
    if (!autoScroll) return

    const carousel = document.getElementById("brand-carousel")
    if (!carousel) return

    let currentScroll = 0
    let direction = 1 // 1 for forward, -1 for backward

    const scroll = () => {
      if (!autoScroll || !carousel) return

      currentScroll += direction * 1.5
      carousel.scrollLeft = currentScroll

      // Reset scroll for infinite loop
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 50) {
        currentScroll = 0
        carousel.scrollLeft = 0
      }

      requestAnimationFrame(scroll)
    }

    const animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [autoScroll])

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-r from-background via-secondary/30 to-background overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
            Our Brand Family
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            A diverse portfolio of iconic entertainment brands creating compelling content and experiences across multiple platforms.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          id="brand-carousel"
          className="flex gap-8 sm:gap-10 md:gap-12 overflow-x-auto pb-4 scroll-smooth justify-center"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)}
          onTouchStart={() => setAutoScroll(false)}
          onTouchEnd={() => setAutoScroll(true)}
        >
          {/* Duplicate brands for infinite loop effect */}
          {[...brands, ...brands].map((brand, index) => (
            <motion.div
              key={`${brand.name}-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 group"
            >
              {/* Logo only - no card background */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center overflow-hidden hover:opacity-80 transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3C/svg%3E"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Brands Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 flex items-center justify-center"
        >
          <a
            href="/brands"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            View All Brands
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        #brand-carousel::-webkit-scrollbar {
          height: 4px;
        }
        #brand-carousel::-webkit-scrollbar-track {
          background: transparent;
        }
        #brand-carousel::-webkit-scrollbar-thumb {
          background: rgba(var(--primary), 0.3);
          border-radius: 2px;
        }
        #brand-carousel::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--primary), 0.5);
        }
      `}</style>
    </section>
  )
}
