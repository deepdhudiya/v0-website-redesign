import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { AboutContent } from "./about-content"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us | Dhudiya Entertainment",
  description: "Learn about Dhudiya Entertainment, Gujarat's leading entertainment company founded by Deep Dhudiya in 2015. We bring creativity, innovation, and technology together.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Who We"
        highlight="Are"
        description="Gujarat's leading Entertainment Company that integrates strategy, innovation, and technology to provide unique experiences worldwide."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutContent />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
