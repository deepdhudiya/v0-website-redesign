import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact Us | Dhudiya Entertainment",
  description: "Get in touch with Dhudiya Entertainment. We're always looking for fresh ideas, talented individuals, and new partnerships.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Touch With"
        highlight="Us"
        description="We're always in search of new content, fresh ideas, and talented individuals. Let's create something extraordinary together."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactContent />
      <Footer />
    </main>
  )
}
