import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BrandFamily } from "@/components/brand-family"
import { NewsSection } from "@/components/news-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandFamily />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
