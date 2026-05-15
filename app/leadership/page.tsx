import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { LeadershipContent } from "./leadership-content"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Leadership | Dhudiya Entertainment",
  description: "Meet the leadership team behind Dhudiya Entertainment, driving innovation and creativity in India's entertainment industry.",
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our"
        highlight="Leadership"
        description="Meet the visionaries driving Dhudiya Entertainment's mission to be one of the world's leading producers of entertainment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Company", href: "/about" },
          { label: "Leadership" },
        ]}
      />
      <LeadershipContent />
      <CTASection />
      <Footer />
    </main>
  )
}
