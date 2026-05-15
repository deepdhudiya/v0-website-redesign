"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface StatItemProps {
  value: number
  suffix?: string
  label: string
}

function StatItem({ value, suffix = "", label }: StatItemProps) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

const stats = [
  { value: 2015, suffix: "", label: "Founded" },
  { value: 7, suffix: "+", label: "Brand Portfolio" },
  { value: 48, suffix: "", label: "Creative Team" },
  { value: 50, suffix: "M+", label: "Global Reach" },
]

export function StatsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatItem value={stat.value} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
