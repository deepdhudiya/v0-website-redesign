"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Package, ImageIcon, BarChart3 } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { label: "Total Brands", value: "6", icon: Package },
    { label: "Articles", value: "12", icon: FileText },
    { label: "Media Files", value: "34", icon: ImageIcon },
  ]

  const menuItems = [
    { label: "Manage Brands", href: "/admin/brands", icon: Package },
    { label: "Manage Articles", href: "/admin/articles", icon: FileText },
    { label: "Media Library", href: "/admin/media", icon: ImageIcon },
    { label: "Site Content", href: "/admin/content", icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground mb-12">Manage all content for Dhudiya Entertainment</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-primary opacity-20" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link href={item.href}>
                  <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</h3>
                        <p className="text-sm text-muted-foreground">Manage and organize {item.label.toLowerCase()}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
