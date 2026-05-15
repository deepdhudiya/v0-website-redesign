"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, ArrowRight, Clock } from "lucide-react"
import { useState } from "react"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured?: boolean
}

const newsArticles: NewsArticle[] = [
  {
    id: "music-publishing-upgrade",
    title: "Music Publishing Is Now Upgraded Into Extreme Level",
    excerpt: "Dhudiya Entertainment is to launch Gujarat's first independent music publishing company on the Music Digital Publishing platform named Dhudiya Music Publishing. It will be the beginning of a new concept on the music digital publishing platform.",
    category: "Business",
    date: "Sep 5, 2020",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: "games-division-launch",
    title: "Dhudiya Entertainment Launches New Games Division to Expand on Diverse Content",
    excerpt: "Dhudiya Games secures multiple distribution deals for mobile games. Dhudiya to leverage latest mobile technologies to provide unique entertainment experience.",
    category: "Business",
    date: "Jul 4, 2018",
    readTime: "3 min read",
    featured: true,
  },
  {
    id: "new-studio-expansion",
    title: "Phantastic Studioz Expands Post-Production Capabilities",
    excerpt: "Our post-production studio has been a part of some world-class film restoration and VFX projects, now expanding to serve global clients.",
    category: "Studios",
    date: "Mar 15, 2019",
    readTime: "5 min read",
  },
  {
    id: "music-label-anniversary",
    title: "Dhudiya Music Celebrates 3 Years of Musical Excellence",
    excerpt: "Since launching in 2016 with 'Duru Duru', Dhudiya Music has become a cornerstone of the Gujarati music industry.",
    category: "Music",
    date: "Jun 20, 2019",
    readTime: "4 min read",
  },
  {
    id: "partnership-announcement",
    title: "Strategic Partnership Announced with International Distributors",
    excerpt: "Dhudiya Entertainment expands global reach with new distribution partnerships in the UK, Middle East, and Southeast Asia.",
    category: "Business",
    date: "Oct 12, 2019",
    readTime: "3 min read",
  },
  {
    id: "talent-acquisition",
    title: "New Creative Leadership Joins Dhudiya Pictures",
    excerpt: "Industry veterans join our film division to lead upcoming projects and expand our creative capabilities.",
    category: "Company",
    date: "Jan 8, 2020",
    readTime: "2 min read",
  },
]

const categories = ["All", "Business", "Music", "Studios", "Company"]

export function NewsList() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory)

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <section className="section-padding pt-0">
      <div className="container-wide">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/news/${article.id}`}>
                  <div className="group h-full bg-card border border-border rounded-3xl overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-300">
                    {/* Featured Image Placeholder */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-serif font-bold text-muted-foreground/30">
                          D
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      {/* Category & Meta */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-secondary text-xs font-medium text-foreground rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-serif font-medium text-foreground mb-3 group-hover:text-muted-foreground transition-colors leading-tight">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/news/${article.id}`}>
                <div className="group h-full bg-card border border-border rounded-2xl p-6 hover:border-foreground/20 hover:shadow-lg transition-all duration-300 hover-lift">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-secondary text-xs font-medium text-foreground rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-medium text-foreground mb-3 group-hover:text-muted-foreground transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span className="text-xs font-medium text-foreground group-hover:text-muted-foreground transition-colors flex items-center gap-1">
                      Read
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary border border-border text-foreground font-medium rounded-full hover:bg-muted transition-all">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  )
}
