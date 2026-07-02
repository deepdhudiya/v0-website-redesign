"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Facebook, Youtube } from "lucide-react"

const mainNavLinks = [
  { label: "About", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Impact", href: "#" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
]

const legalLinks = [
  { label: "Terms of Use", href: "https://policies.dhudiya.com/terms-of-use/", external: true },
  { label: "Privacy Policy", href: "https://policies.dhudiya.com/privacy-policy/", external: true },
  { label: "Cookie Policy", href: "#", external: true },
  { label: "Accessibility", href: "#" },
]

const socialLinks = [
  { icon: Linkedin, href: "https://in.linkedin.com/company/dhudiya", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/Dhudiya/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/c/Dhudiya", label: "YouTube" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        
        {/* Top Row - Logo, Navigation, Social */}
        <div className="py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          
          {/* Left - Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="inline-block">
              <Image
                src="https://dhudiya.com/themes/images/logo.svg"
                alt="Dhudiya Entertainment"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Center - Main Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8"
          >
            {mainNavLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Right - Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center md:justify-end gap-4 flex-shrink-0"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom Row - Legal Links */}
        <div className="py-8 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-xs text-muted-foreground">
              COPYRIGHT {currentYear} © DHUDIYA ENTERTAINMENT PRIVATE LTD. ALL RIGHTS RESERVED.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
