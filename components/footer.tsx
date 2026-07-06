"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Linkedin, Instagram, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Our Brands", href: "/brands" },
    { label: "Careers", href: "/careers" },
  ],
  brands: [
    { label: "Dhudiya Pictures", href: "/brands#pictures" },
    { label: "Dhudiya Music Group", href: "/brands#music" },
    { label: "Dhudiya Games", href: "/brands#games" },
    { label: "Phantastic Studioz", href: "/brands#phantastic" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Help & FAQ", href: "/support" },
    { label: "Privacy Policy", href: "https://policies.dhudiya.com/privacy-policy/" },
    { label: "Terms of Use", href: "https://policies.dhudiya.com/terms-of-use/" },
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
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Dhudiya
              </span>
              <span className="text-xl font-light tracking-tight text-muted-foreground ml-1">
                Entertainment
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              A powerful portfolio of iconic entertainment brands. We bring people, 
              technology, and the best storytellers together to drive culture and 
              meaningful connection.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Brands
            </h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.href.startsWith("http") && (
                      <ArrowUpRight className="w-3 h-3" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news and updates from Dhudiya Entertainment.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 bg-background border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              TM & {currentYear} Dhudiya Entertainment Private Ltd. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              All trademarks are the property of their respective owners.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
