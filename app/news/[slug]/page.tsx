"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const articleData = {
  slug: "dhudiya-announces-new-film",
  title: "Dhudiya Announces New Blockbuster Film Project",
  author: "Dhudiya Communications",
  publishedAt: "July 2, 2026",
  category: "News",
  featuredImage: "https://via.placeholder.com/1200x600?text=Article+Hero",
  excerpt: "Dhudiya Entertainment is thrilled to announce the production of its next major film project featuring top-tier talent and cutting-edge filmmaking technology.",
  content: `Dhudiya Entertainment is thrilled to announce the production of its next major film project, marking a significant milestone in our commitment to delivering world-class entertainment. This ambitious production will feature top-tier talent and cutting-edge filmmaking technology.

Our team has been working tirelessly to bring this vision to life. The project combines innovative storytelling with remarkable cinematography, promising audiences an unforgettable experience.

"This film represents our dedication to pushing creative boundaries and delivering content that resonates with audiences worldwide," said a studio spokesperson.

The production will span multiple locations across India and international destinations, showcasing the diverse landscapes that will serve as the backdrop for this epic narrative.

We are excited to share more details about the cast, crew, and release date in the coming months. Stay tuned for exclusive updates and behind-the-scenes content.

This announcement comes as part of Dhudiya's continued expansion into premium content creation across all media platforms.`
}

export default function ArticleDetailPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/news" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-2xl overflow-hidden border border-border"
        >
          <Image
            src={articleData.featuredImage}
            alt={articleData.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {articleData.category}
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-foreground mb-6">{articleData.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{articleData.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{articleData.publishedAt}</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl prose prose-invert"
        >
          {articleData.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
      </div>
      <Footer />
    </>
  )
}
