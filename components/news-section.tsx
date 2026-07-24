"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { SectionHeader } from "./page-layout"
import { newsArticles } from "@/lib/news-data"

const newsItems = newsArticles.slice(0, 2)

export function NewsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            eyebrow="Latest Updates"
            title="Find out"
            highlight="more."
            description="Stay updated with the latest news, announcements, and stories from across the Dhudiya Entertainment network."
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              View All News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/news/${item.id}`}>
                <div className="group h-full bg-card border border-border rounded-2xl p-8 hover:border-foreground/20 hover:shadow-lg transition-all duration-300 hover-lift">
                  {/* Category & Date */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-secondary text-xs font-medium text-foreground rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-3 group-hover:text-muted-foreground transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
