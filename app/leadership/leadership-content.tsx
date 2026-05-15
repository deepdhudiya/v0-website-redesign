"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"
import { SectionHeader } from "@/components/page-layout"

const leaders = [
  {
    name: "Deep Dhudiya",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur who founded Dhudiya Entertainment in 2015, transforming it into Gujarat's leading entertainment company. Deep's passion for storytelling and innovation drives the company's mission to create world-class entertainment experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Executive Team",
    role: "Leadership Council",
    bio: "Our executive team brings together decades of experience across film, music, gaming, and digital entertainment. Together, they guide our brands to deliver exceptional content to audiences worldwide.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

export function LeadershipContent() {
  return (
    <section className="section-padding pt-0">
      <div className="container-wide">
        <SectionHeader
          eyebrow="The Team"
          title="Visionaries Behind"
          highlight="Dhudiya"
          description="Our leadership team combines creativity, business acumen, and a deep understanding of the entertainment industry."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-3xl overflow-hidden"
            >
              {/* Avatar Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="w-32 h-32 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <span className="text-5xl font-serif font-bold">
                    {leader.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {leader.role}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={leader.social.linkedin}
                    className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={leader.social.twitter}
                    className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <SectionHeader
            title="Our Leadership"
            highlight="Philosophy"
            description="The culture and the people at Dhudiya Entertainment ensure that we don't just deliver satisfactory service—we create legendary experiences for our clients."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Innovation",
                description: "We continuously invest in the latest products and services, keeping us fresh in an ever-evolving industry.",
              },
              {
                title: "Excellence",
                description: "We persistently seek alpha in all activities, recognized for our creativity, visual aesthetics, and high production value.",
              },
              {
                title: "Relationships",
                description: "We treasure the opportunity to build lasting relationships with our partners, talent, and audiences worldwide.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
