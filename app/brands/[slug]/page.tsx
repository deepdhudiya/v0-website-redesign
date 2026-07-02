"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Globe, Linkedin, Facebook, Instagram, Twitter, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const brandData = {
  slug: "dhudiya-pictures",
  name: "Dhudiya Pictures",
  logo: "https://via.placeholder.com/200x100?text=Dhudiya+Pictures",
  website: "https://www.dhudiyapictures.com",
  email: "contact@dhudiyapictures.com",
  about: "Dhudiya Pictures is a leading motion picture production company dedicated to creating world-class cinema. With a portfolio of critically acclaimed films and box office hits, we continue to push the boundaries of storytelling and filmmaking excellence.",
  socialLinks: [
    { platform: "facebook", url: "https://facebook.com/dhudiyapictures", icon: Facebook },
    { platform: "instagram", url: "https://instagram.com/dhudiyapictures", icon: Instagram },
    { platform: "twitter", url: "https://twitter.com/dhudiyapic", icon: Twitter },
    { platform: "linkedin", url: "https://linkedin.com/company/dhudiya-pictures", icon: Linkedin },
  ],
}

export default function BrandDetailPage() {
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
          <Link href="/brands" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Brands
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 border-b border-border mb-12"
        >
          <div className="flex items-center justify-center">
            <div className="w-full max-w-xs h-48 bg-secondary rounded-lg flex items-center justify-center border border-border">
              <Image
                src={brandData.logo}
                alt={brandData.name}
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-foreground mb-4">{brandData.name}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              {brandData.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              <a
                href={`mailto:${brandData.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>{brandData.email}</span>
              </a>
              <a
                href={brandData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="w-5 h-5 text-primary" />
                <span>Visit Website</span>
              </a>
            </div>

            <a
              href={brandData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore Brand
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">About the Brand</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {brandData.about}
          </p>
        </motion.div>
      </div>
      </div>
      <Footer />
    </>
  )
}
