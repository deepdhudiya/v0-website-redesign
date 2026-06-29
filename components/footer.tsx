"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Linkedin, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react"

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
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Top Section - Company Info & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-12 md:mb-16 lg:mb-20">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Creating Tomorrow&apos;s Entertainment, Today.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              Dhudiya Entertainment is a portfolio company of iconic entertainment brands delivering multi-platform, multi-generational experiences across television, movies, music, games, and digital media.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@dhudiya.com">info@dhudiya.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            {/* Social Links */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Connect With Us</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-foreground hover:bg-foreground hover:text-background text-muted-foreground transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <form className="space-y-3">
              <label className="text-xs uppercase tracking-widest font-semibold text-foreground block">
                Subscribe for Updates
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground focus:ring-1 focus:ring-foreground/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-border via-border to-transparent mb-12 md:mb-16 lg:mb-20" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 mb-12 md:mb-16 lg:mb-20">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Brands</h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 md:mb-10 lg:mb-12" />

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground"
        >
          <p>© {currentYear} Dhudiya Entertainment Private Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Made with passion in India</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <a href="#" className="hover:text-foreground transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
