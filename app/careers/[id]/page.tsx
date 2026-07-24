import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Briefcase, MapPin, Clock, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-layout"
import { getJobOpening, openings } from "@/lib/careers-data"

export function generateStaticParams() {
  return openings.map((job) => ({ id: job.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const job = getJobOpening(id)
  if (!job) return {}
  return {
    title: `${job.title} | Careers at Dhudiya Entertainment`,
    description: `Apply for ${job.title} at Dhudiya Entertainment. ${job.department} · ${job.location} · ${job.type}.`,
  }
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const job = getJobOpening(id)
  if (!job) notFound()

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title={job.title}
        highlight={job.department}
        description={`Join the ${job.department} team and help us create world-class entertainment experiences.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: job.title },
        ]}
      />

      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  {job.department}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {job.type}
                </span>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <h2 className="text-2xl font-serif font-medium text-foreground">
                  About the role
                </h2>
                <p>
                  We are looking for a passionate and talented {job.title} to
                  join our {job.department} team. In this role, you will
                  contribute to projects that shape the entertainment landscape
                  in India and globally, working alongside a team of creative
                  professionals dedicated to excellence.
                </p>
                <h2 className="text-2xl font-serif font-medium text-foreground">
                  What you will do
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Collaborate with cross-functional teams to deliver
                    world-class entertainment experiences.
                  </li>
                  <li>
                    Bring creative ideas to life across multiple platforms and
                    formats.
                  </li>
                  <li>
                    Contribute to the creative direction and quality of our
                    projects.
                  </li>
                  <li>
                    Work in a fast-paced, collaborative environment that values
                    innovation.
                  </li>
                </ul>
                <h2 className="text-2xl font-serif font-medium text-foreground">
                  What we are looking for
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Proven experience in a similar role within the entertainment
                    or media industry.
                  </li>
                  <li>Strong creative and technical skills.</li>
                  <li>Excellent communication and collaboration abilities.</li>
                  <li>A passion for storytelling and entertainment.</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-3xl p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Apply for this role
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Send us your resume and a short note about why you would be a
                  great fit.
                </p>
                <Link
                  href="mailto:careers@dhudiya.com"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Apply Now
                </Link>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Role details
                  </h4>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Department</dt>
                      <dd className="font-medium text-foreground">
                        {job.department}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Location</dt>
                      <dd className="font-medium text-foreground">
                        {job.location}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Type</dt>
                      <dd className="font-medium text-foreground">
                        {job.type}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/careers"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to all positions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
