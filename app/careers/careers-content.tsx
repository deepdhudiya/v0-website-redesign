"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin, Briefcase, Clock, Star, Users, Lightbulb, Trophy } from "lucide-react"
import { SectionHeader } from "@/components/page-layout"
import { openings } from "@/lib/careers-data"

const benefits = [
  {
    icon: Star,
    title: "Creativity First",
    description: "Work on innovative projects that push creative boundaries across entertainment.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Join a team of passionate professionals who support and inspire each other.",
  },
  {
    icon: Lightbulb,
    title: "Growth Opportunities",
    description: "Continuous learning and career development in a fast-growing industry.",
  },
  {
    icon: Trophy,
    title: "Industry Impact",
    description: "Be part of projects that shape the entertainment landscape in India and beyond.",
  },
]

export function CareersContent() {
  return (
    <>
      {/* Benefits Section */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Why Join Us"
            title="Build Your Career"
            highlight="With Us"
            description="At Dhudiya Entertainment, we believe in nurturing talent and creating an environment where creativity thrives."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-foreground/20 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-xl mb-4">
                  <benefit.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Open Positions"
            title="Current"
            highlight="Opportunities"
            description="Explore our open positions and find your perfect role in the entertainment industry."
          />

          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/careers/${job.id}`}>
                  <div className="group bg-card border border-border rounded-2xl p-6 hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                        Apply Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* General Application */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Don&apos;t see the right role? We&apos;re always interested in hearing from talented individuals.
            </p>
            <Link
              href="mailto:careers@dhudiya.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
