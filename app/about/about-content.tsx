"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/page-layout"
import { Target, Eye, Heart } from "lucide-react"

export function AboutContent() {
  return (
    <>
      {/* Introduction */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-6 leading-relaxed">
                Hello, we are <span className="text-muted-foreground">Dhudiya Entertainment</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dhudiya Entertainment Pvt. Ltd. is a film studio and entertainment company in India, 
                  founded by Deep Dhudiya in 2015. The studio&apos;s activities span across creative development, 
                  marketing, distribution, licensing, merchandising, and other activities of the motion picture 
                  industry worldwide.
                </p>
                <p>
                  We are Gujarat&apos;s leading communication and entertainment company, utilizing strategy integration, 
                  innovation, and technology to provide unique experiences to clients around the globe.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <span className="text-4xl font-serif font-bold">D</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Since 2015</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Story"
            title="About The"
            highlight="Company"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Dhudiya Entertainment is a brainchild of Deep Dhudiya, founded in 2015, that has become 
                  a phenomenon in the entertainment industry. We have indefatigably worked towards making 
                  Dhudiya Entertainment, Gujarat&apos;s leading communication and entertainment company.
                </p>
                <p>
                  Headquartered in Ahmedabad, India, with universal contacts and workplaces over the world, 
                  our studio&apos;s activities span across creative development, marketing, distribution, licensing, 
                  merchandising, and other activities of the motion picture industry worldwide.
                </p>
                <p>
                  We are an associate partner with the first short film &quot;TAXII&quot;. In 2016, we launched our own 
                  music label called Dhudiya Music and published our first music album &quot;Duru Duru&quot;.
                </p>
                <p>
                  Dhudiya Entertainment is in the business of fabricating experiences. Our belief is that an 
                  event may be forgotten, but an experience will be long-lasting. We are pioneers in events, 
                  exhibitions, activations, television, PR & digital space, playing a key role in shaping 
                  the Gujarati entertainment industry in India and globally.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To be one of the world's leading producers and providers of entertainment and information, developing the most creative, innovative, and profitable entertainment experiences worldwide.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To shape the entertainment landscape by engaging audiences through ventures in development, marketing, distribution, and a wide array of global entertainment initiatives.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "We believe in creativity, innovation, and building lasting relationships. The culture at Dhudiya ensures legendary service and unforgettable experiences for our clients.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-xl mb-6">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
