"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Briefcase, HelpCircle, MessageCircle, Send, CheckCircle } from "lucide-react"

export function ContactContent() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormStatus("sent")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setFormStatus("idle"), 3000)
  }

  const contactInfo = [
    {
      icon: Briefcase,
      title: "Fresh Ideas",
      description: "We're always looking for new content and creative partnerships.",
      items: [
        { label: "General enquiries", value: "helpdesk@dhudiya.com", type: "email" },
      ],
    },
    {
      icon: Mail,
      title: "Careers",
      description: "Join our team of creative professionals.",
      items: [
        { label: "Career opportunities", value: "careers@dhudiya.com", type: "email" },
      ],
    },
    {
      icon: HelpCircle,
      title: "Support",
      description: "Get help with your questions and concerns.",
      items: [
        { label: "Help & FAQ", value: "/support", type: "link" },
        { label: "Live Chat", value: "/support", type: "link" },
      ],
    },
  ]

  return (
    <section className="section-padding pt-0">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-serif font-medium text-foreground mb-2">
                Send us a message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    placeholder="Tell us about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "idle" && (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  {formStatus === "sending" && (
                    <>
                      Sending...
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    </>
                  )}
                  {formStatus === "sent" && (
                    <>
                      Message Sent!
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-xl">
                    <info.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {info.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {info.description}
                </p>
                <ul className="space-y-2">
                  {info.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{item.label}:</span>
                      {item.type === "email" ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <a
                          href={item.value}
                          className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                        >
                          Visit
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary text-primary-foreground rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">
                Headquarters
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Ahmedabad, Gujarat, India
              </p>
              <p className="text-sm text-primary-foreground/70">
                With universal contacts and workplaces around the world, we&apos;re always close to you.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
