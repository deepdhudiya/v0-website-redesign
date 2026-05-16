"use client"

import Link from "next/link"
import Image from "next/image"
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
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-6">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-4 lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-4 sm:mb-5">
              <Image
                src="https://dhudiya.com/themes/images/logo.svg"
                alt="Dhudiya Entertainment"
                width={180}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-sm mb-3 sm:mb-4">
              A powerful portfolio of iconic entertainment brands. We bring people, 
              technology, and the best storytellers together to drive culture and 
              meaningful connection.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300"
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
            className="col-span-1 md:col-span-1 lg:col-span-2"
          >
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
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
            className="col-span-1 md:col-span-1 lg:col-span-2"
          >
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4 uppercase tracking-wider">
              Brands
            </h4>
            <ul className="space-y-2 sm:space-y-3">
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
            className="col-span-2 md:col-span-2 lg:col-span-2"
          >
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3">
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


        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left order-2 sm:order-1">
              TM & {currentYear} Dhudiya Entertainment Private Ltd. All Rights Reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right order-1 sm:order-2">
              All trademarks are the property of their respective owners.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
