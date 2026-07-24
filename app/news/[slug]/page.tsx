import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { CTASection } from "@/components/cta-section"
import { getNewsArticle, newsArticles } from "@/lib/news-data"

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} | Dhudiya Entertainment`,
    description: article.excerpt,
  }
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) notFound()

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.title },
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary text-xs font-medium text-foreground rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <div className="aspect-[16/9] bg-gradient-to-br from-secondary to-muted rounded-3xl mb-10 flex items-center justify-center">
            <span className="text-6xl font-serif font-bold text-muted-foreground/30">
              D
            </span>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>{article.excerpt}</p>
            <p>
              This marks another significant milestone for Dhudiya Entertainment
              as we continue to expand our reach and deliver world-class
              entertainment experiences to audiences across India and the world.
              Our commitment to innovation, creativity, and excellence remains
              at the core of everything we do.
            </p>
            <p>
              Stay connected with us for more updates as we continue to grow and
              shape the entertainment landscape. For the latest news and
              announcements, follow our social channels and check back on our
              news page.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to all news
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
