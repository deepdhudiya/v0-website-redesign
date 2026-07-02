"use client"

import Link from "next/link"
import { BrandCarousel } from "./brand-carousel"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function BrandFamily() {
  return (
    <section className="bg-background border-t border-border">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">OUR BRAND FAMILY</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
                Names you trust.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Discover the diverse portfolio of Dhudiya Entertainment's premier brands, each dedicated to creating exceptional entertainment experiences across film, music, gaming, and digital media.
              </p>
            </div>
            <Link href="/brands" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors whitespace-nowrap group">
              <span className="font-medium">View All Brands</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Brand Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BrandCarousel />
        </motion.div>
      </div>
    </section>
  )
}
