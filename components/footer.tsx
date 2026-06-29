"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Linkedin, Instagram, Twitter, Facebook, Mail, MapPin, Globe } from "lucide-react"

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

// Global network data - cities/regions where Dhudiya operates
const globalPresence = [
  { city: "Mumbai", region: "India", position: "top-1/3 left-1/2" },
  { city: "Delhi", region: "India", position: "top-1/4 left-1/2" },
  { city: "Los Angeles", region: "USA", position: "top-1/2 left-1/4" },
  { city: "London", region: "UK", position: "top-1/4 left-2/3" },
  { city: "Singapore", region: "Asia", position: "top-2/3 left-2/3" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background border-t border-border/50">
      {/* Global Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg className="absolute -top-1/2 -left-1/2 w-full h-full min-w-max" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          {/* Simplified world map outline */}
          <defs>
            <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Decorative grid lines */}
          <g stroke="url(#globeGradient)" strokeWidth="1" strokeDasharray="4,4">
            <line x1="0" y1="200" x2="1200" y2="200" />
            <line x1="0" y1="400" x2="1200" y2="400" />
            <line x1="0" y1="600" x2="1200" y2="600" />
            <line x1="200" y1="0" x2="200" y2="800" />
            <line x1="400" y1="0" x2="400" y2="800" />
            <line x1="600" y1="0" x2="600" y2="800" />
            <line x1="800" y1="0" x2="800" y2="800" />
            <line x1="1000" y1="0" x2="1000" y2="800" />
          </g>
          
          {/* Connection lines between cities */}
          <g stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.2" fill="none">
            <path d="M 600 250 Q 750 200 900 300" />
            <path d="M 600 250 Q 300 150 150 280" />
            <path d="M 600 250 Q 700 400 750 500" />
          </g>
        </svg>

        {/* Floating gradient orbs for global theme */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
            
            {/* Left Column - Branding & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Global Entertainment</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
                  Entertainment Without Borders
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                  Dhudiya Entertainment brings world-class content to audiences across the globe, creating stories that resonate everywhere while celebrating local culture.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="mailto:info@dhudiya.com"
                  whileHover={{ y: -4 }}
                  className="group p-4 bg-secondary/40 border border-border hover:border-primary/50 rounded-lg backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Email us</p>
                  <p className="text-xs font-medium text-foreground truncate">info@dhudiya.com</p>
                </motion.a>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="group p-4 bg-secondary/40 border border-border rounded-lg backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Headquarters</p>
                  <p className="text-xs font-medium text-foreground">Mumbai, India</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Social & Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              {/* Social Section */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Connect Globally</h3>
                <div className="flex flex-wrap gap-3">
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
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 flex items-center justify-center rounded-lg border border-border bg-secondary/30 hover:text-primary-foreground text-muted-foreground transition-all duration-300 backdrop-blur-sm"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Global Stats */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Our Reach</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: "50+", label: "Countries" },
                    { number: "100M+", label: "Audiences" },
                    { number: "500+", label: "Productions" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 * idx }}
                      className="text-center"
                    >
                      <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12 md:mb-16" />

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 md:mb-16">
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <h4 className="text-xs uppercase tracking-widest font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      {link.external && <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 md:mb-10" />

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-muted-foreground"
          >
            <p>© {currentYear} Dhudiya Entertainment Private Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Proudly creating content globally</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <a href="#" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                Sitemap
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
