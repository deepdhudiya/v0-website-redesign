"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Film, Music, Gamepad2, Mic, BookOpen, Video, Radio } from "lucide-react"
import { SectionHeader } from "./page-layout"

const brands = [
  {
    name: "Dhudiya Pictures",
    description: "Motion picture company bringing cinematic stories to life",
    icon: Film,
    href: "/brands#pictures",
  },
  {
    name: "Dhudiya Music Group",
    description: "Record label and music distribution platform",
    icon: Music,
    href: "/brands#music",
  },
  {
    name: "Dhudiya Games",
    description: "Video game development and publishing studio",
    icon: Gamepad2,
    href: "/brands#games",
  },
  {
    name: "Dhudiya Interactive",
    description: "Interactive entertainment and digital experiences",
    icon: Video,
    href: "/brands#interactive",
  },
  {
    name: "Dhudiya Music Publishing",
    description: "Music rights and publishing services",
    icon: Mic,
    href: "/brands#publishing",
  },
  {
    name: "Phantastic Studioz",
    description: "Visual effects and post-production excellence",
    icon: BookOpen,
    href: "/brands#phantastic",
  },
  {
    name: "Imagery Records",
    description: "Independent music label for emerging artists",
    icon: Radio,
    href: "/brands#imagery",
  },
]

export function BrandFamily() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Our Brand Family"
            title="Names you trust."
            highlight="Content you love."
            description="Dhudiya's premier brands and franchises deliver multi-platform, multi-generational experiences across television, movies, music, and games."
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/brands"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              View All Brands
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={brand.href}>
                <div className="group h-full bg-card border border-border rounded-2xl p-6 hover:border-foreground/20 hover:shadow-lg transition-all duration-300 hover-lift">
                  <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <brand.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Central Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary text-primary-foreground rounded-full">
            <span className="text-2xl font-serif font-bold">D</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            One network. Infinite possibilities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
