"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Linkedin, Instagram, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "#" },
  ],
  brands: [
    { label: "Dhudiya Pictures", href: "/brands#pictures" },
    { label: "Dhudiya Music Group", href: "/brands#music" },
    { label: "Dhudiya Games", href: "/brands#games" },
    { label: "Phantastic Studioz", href: "/brands#phantastic" },
  ],
  resources: [
    { label: "Contact Us", href: "/contact" },
    { label: "Support", href: "/support" },
    { label: "Help & FAQ", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "https://policies.dhudiya.com/privacy-policy/", external: true },
    { label: "Terms of Use", href: "https://policies.dhudiya.com/terms-of-use/", external: true },
    { label: "Cookie Policy", href: "#", external: true },
    { label: "Accessibility", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/Dhudiya/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/dhudiyaent", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/dhudiyaent", label: "Twitter" },
  { icon: Linkedin, href: "https://in.linkedin.com/company/dhudiya", label: "LinkedIn" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-20 md:py-24 lg:py-28">
          
          {/* Top Section - Brand Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-28"
          >
            <div className="max-w-4xl">
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Dhudiya Entertainment is a powerhouse of iconic brands creating unforgettable content across film, music, games, and digital experiences. We connect cultures, inspire creativity, and bring stories to life globally.
              </p>
              <div className="h-px bg-gradient-to-r from-border via-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-24">
            
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-8">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Brands */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-8">Brands</h4>
              <ul className="space-y-4">
                {footerLinks.brands.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-8">Resources</h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-8">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-border" />

        {/* Footer Bottom */}
        <div className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            
            {/* Left - Copyright */}
            <div>
              <p className="text-xs text-muted-foreground">
                © {currentYear} Dhudiya Entertainment Private Ltd.<br className="hidden sm:block" />
                All rights reserved.
              </p>
            </div>

            {/* Center - Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  whileHover={{ scale: 1.15, color: "var(--color-primary)" }}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Right - Additional Link */}
            <motion.a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
              whileHover={{ x: 2 }}
            >
              Sitemap
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
