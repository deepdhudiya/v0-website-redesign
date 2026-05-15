import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { NewsList } from "./news-list"

export const metadata: Metadata = {
  title: "News | Dhudiya Entertainment",
  description: "Stay updated with the latest news, announcements, and stories from Dhudiya Entertainment and all our brands.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Latest"
        highlight="News"
        description="Stay updated with the latest announcements, partnerships, and stories from across the Dhudiya Entertainment network."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      />
      <NewsList />
      <Footer />
    </main>
  )
}
