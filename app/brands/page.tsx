import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { BrandsGrid } from "./brands-grid"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Our Brands | Dhudiya Entertainment",
  description: "Explore Dhudiya Entertainment's premier brands - Dhudiya Pictures, Music Group, Games, Interactive, and more. Names you trust, content you love.",
}

export default function BrandsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Our"
        highlight="Brands"
        description="Dhudiya's premier brands and franchises are household names. Our brands take pride in bringing the highest-quality content across television, movies, music, and games."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Brands" },
        ]}
      />
      <BrandsGrid />
      <CTASection />
      <Footer />
    </main>
  )
}
