"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/page-layout"
import { brands } from "@/lib/brands-data"

export function BrandsGrid() {
  return (
    <>
      {/* Intro Section */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              With our industry-leading scale, we attract the best talent in media and entertainment. 
              Our brands deliver multi-platform, multi-generational, and multicultural experiences that 
              shape the entertainment landscape in India and globally.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                id={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-3xl p-8 md:p-10 hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-secondary rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <brand.icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {brand.tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                    {brand.name}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {brand.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {brand.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-secondary text-xs font-medium text-foreground rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/brands/${brand.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors mt-auto"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <SectionHeader
            title="One Network."
            highlight="Infinite Possibilities."
            description="Our diverse portfolio of brands works together to create comprehensive entertainment experiences, from film to music to gaming."
            centered
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative">
              {/* Central Logo */}
              <div className="w-32 h-32 bg-primary text-primary-foreground rounded-full flex items-center justify-center z-10 relative">
                <span className="text-5xl font-serif font-bold">D</span>
              </div>

              {/* Orbiting Brand Icons */}
              <div className="absolute inset-0 w-80 h-80 -left-24 -top-24">
                {brands.slice(0, 6).map((brand, index) => {
                  const angle = (index * 60) * (Math.PI / 180)
                  const radius = 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <motion.div
                      key={brand.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="absolute w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                      }}
                    >
                      <brand.icon className="w-5 h-5 text-foreground" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
