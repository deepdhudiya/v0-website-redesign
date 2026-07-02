"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Plus, Edit, Trash2, ArrowLeft } from "lucide-react"

const sampleBrands = [
  { id: "1", name: "Dhudiya Pictures", slug: "dhudiya-pictures", description: "Motion picture production company" },
  { id: "2", name: "Dhudiya Music Group", slug: "dhudiya-music-group", description: "Record label and music distribution" },
  { id: "3", name: "Dhudiya Games", slug: "dhudiya-games", description: "Video game development studio" },
]

export default function AdminBrandsPage() {
  const [brands, setBrands] = useState(sampleBrands)
  const [isCreating, setIsCreating] = useState(false)

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
          <button
            onClick={() => setIsCreating(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Brand
          </button>
        </motion.div>

        <h1 className="text-4xl font-bold text-foreground mb-8">Manage Brands</h1>

        {/* Brands Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-lg overflow-hidden"
        >
          <table className="w-full">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Brand Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Slug</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand, index) => (
                <motion.tr
                  key={brand.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{brand.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{brand.slug}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{brand.description}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-red-500 hover:bg-secondary rounded transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  )
}
