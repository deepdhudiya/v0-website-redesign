import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { CareersContent } from "./careers-content"

export const metadata: Metadata = {
  title: "Careers | Dhudiya Entertainment",
  description: "Join the Dhudiya Entertainment team. Explore career opportunities across film, music, gaming, and entertainment.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Join Our"
        highlight="Team"
        description="We're always looking for talented individuals who share our passion for storytelling and entertainment. Explore opportunities to be part of India's leading entertainment network."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />
      <CareersContent />
      <Footer />
    </main>
  )
}
