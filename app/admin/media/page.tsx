"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Plus, ArrowLeft, Trash2 } from "lucide-react"

export default function AdminMediaPage() {
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
            <Plus className="w-4 h-4" />
            Upload Media
          </button>
        </motion.div>

        <h1 className="text-4xl font-bold text-foreground mb-8">Media Library</h1>
        <p className="text-muted-foreground mb-8">Upload and manage images, logos, and media files for your website.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border-2 border-dashed border-border rounded-lg p-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Drag and drop your files here or click to upload</p>
          <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Select Files
          </button>
        </motion.div>
      </div>
    </div>
  )
}
