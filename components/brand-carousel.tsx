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

    const timer = setTimeout(() => {
      const carousel = document.getElementById("brand-carousel")
      if (carousel) {
        carousel.scrollLeft += 1
      }
    }, 20)

    return () => clearTimeout(timer)
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
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
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
              <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Logo placeholder with fallback */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3C/svg%3E"
                    }}
                  />
                </div>

                {/* Brand Info */}
                <h3 className="font-semibold text-center text-sm sm:text-base text-foreground line-clamp-2 mb-2">
                  {brand.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  {brand.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center">
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            Auto-scrolling carousel • Hover or touch to pause
          </p>
        </div>
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
