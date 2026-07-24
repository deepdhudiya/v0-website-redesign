import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { CTASection } from "@/components/cta-section"
import { brands, getBrand } from "@/lib/brands-data"

export function generateStaticParams() {
  return brands.map((brand) => ({ id: brand.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const brand = getBrand(id)
  if (!brand) return {}
  return {
    title: `${brand.name} | Dhudiya Entertainment`,
    description: brand.description,
  }
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const brand = getBrand(id)
  if (!brand) notFound()

  const Icon = brand.icon

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title={brand.name}
        highlight={brand.tagline}
        description={brand.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="w-20 h-20 flex items-center justify-center bg-secondary rounded-2xl mb-8">
                <Icon className="w-10 h-10 text-foreground" />
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>{brand.description}</p>
                <p>
                  As part of the Dhudiya Entertainment network, {brand.name}{" "}
                  benefits from our integrated approach to content creation and
                  distribution. We combine creative excellence with strategic
                  insight to deliver experiences that resonate with audiences
                  worldwide.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  What we do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brand.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 bg-card border border-border rounded-xl p-4"
                    >
                      <span className="w-8 h-8 flex items-center justify-center bg-secondary rounded-lg shrink-0">
                        <Check className="w-4 h-4 text-foreground" />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-3xl p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Explore more
                </h3>
                <div className="space-y-3">
                  {brands
                    .filter((b) => b.id !== brand.id)
                    .slice(0, 4)
                    .map((other) => {
                      const OtherIcon = other.icon
                      return (
                        <Link
                          key={other.id}
                          href={`/brands/${other.id}`}
                          className="group flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                        >
                          <span className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg shrink-0">
                            <OtherIcon className="w-5 h-5 text-foreground" />
                          </span>
                          <span className="text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                            {other.name}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/brands"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to all brands
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
