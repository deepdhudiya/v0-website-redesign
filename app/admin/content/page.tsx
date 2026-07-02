"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Save, ArrowLeft } from "lucide-react"

export default function AdminContentPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between mb-8"
        >
          <Link href="/admin" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </motion.div>

        <h1 className="text-4xl font-bold text-foreground mb-8">Site Content</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { label: "Homepage Hero Title", section: "hero" },
            { label: "Homepage Hero Subtitle", section: "hero_subtitle" },
            { label: "About Section Title", section: "about_title" },
            { label: "Footer Description", section: "footer_desc" },
          ].map((item) => (
            <div key={item.section} className="bg-card border border-border rounded-lg p-6">
              <label className="block text-sm font-medium text-foreground mb-3">{item.label}</label>
              <textarea
                defaultValue="Edit your content here..."
                className="w-full h-24 px-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
