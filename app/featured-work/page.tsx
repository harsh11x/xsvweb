"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function FeaturedWorkPage() {
  const { ref, isVisible } = useReveal(0.2)

  const works = [
    {
      id: 1,
      title: "Remap Studios",
      description: "An enterprise-grade AI machine unlearning platform that surgically removes redundant knowledge from neural networks — shrinking model size by up to 50%, slashing compute costs by 42%, and accelerating inference — all without sacrificing accuracy. Built for research labs and companies pushing the boundaries of efficient AI.",
      category: "AI / Deep Tech",
      link: "https://remapstudios.vercel.app/",
      image: "/placeholder.svg",
      technologies: ["Machine Learning", "Neural Architecture", "Python", "HuggingFace"],
      highlights: [
        "Surgical neuron removal with 99.2% accuracy retention",
        "Up to 50% model size reduction and 42% compute cost savings",
        "Interactive architecture explorer and real-time benchmark comparison",
        "Desktop app + web sandbox for hands-on model optimization",
      ],
    },
    {
      id: 2,
      title: "Zephyrn",
      description: "A zero-knowledge encrypted communications platform delivering end-to-end encrypted calls, messages, and file transfers. Keys stay exclusively on the user's device — making data access a mathematical impossibility, not a marketing promise. Engineered for enterprises and individuals who demand absolute privacy.",
      category: "Security / Encryption",
      link: "https://zephywebsite.vercel.app/",
      image: "/zephyrn-showcase.png",
      technologies: ["E2E Encryption", "Zero Knowledge", "WebRTC", "Real-time Comms"],
      highlights: [
        "Zero-knowledge architecture — mathematically impossible data access",
        "End-to-end encrypted calls, messages, and file transfers",
        "Keys remain exclusively on user devices",
        "Enterprise-grade security with consumer-grade simplicity",
      ],
    },
    {
      id: 3,
      title: "Punjab Heritage",
      description: "A premium e-commerce destination for authentic Punjabi handcrafted leather juttis and exquisite phulkari textiles. Every piece is curated from master artisans preserving centuries-old heritage — brought to life with a luxurious shopping experience, immersive product storytelling, and seamless checkout across India.",
      category: "E-commerce / Heritage",
      link: "https://punjabiecom.vercel.app/",
      image: "/punjabi-traditional-clothing-ecommerce-store.jpg",
      technologies: ["E-commerce", "Product Showcase", "Payments", "Inventory"],
      highlights: [
        "Curated collection of artisan-crafted Punjabi leather juttis",
        "Immersive product storytelling with heritage narratives",
        "Seamless pan-India checkout and delivery experience",
        "High-fidelity imagery and responsive design across all devices",
      ],
    },
    {
      id: 4,
      title: "UniTap",
      description: "A smart campus fintech platform revolutionising university payments through RFID-based student wallets. Enables cashless transactions across campus vendors, delivers real-time analytics to administrators, and gives institutions complete visibility into vendor performance and student spending — all from a single dashboard.",
      category: "Fintech / EdTech",
      link: "https://unitap-beta.vercel.app/",
      image: "/placeholder.svg",
      technologies: ["RFID", "Fintech", "Analytics", "Payment Systems"],
      highlights: [
        "RFID-based cashless student wallet system",
        "Real-time vendor approval and sales analytics dashboard",
        "Unified platform for administrators, vendors, and students",
        "Risk monitoring and spending insights for university operations",
      ],
    },
    {
      id: 5,
      title: "PulseCal",
      description: "An enterprise healthcare SaaS platform trusted by 500+ providers, unifying appointment scheduling, telemedicine, patient records, and billing into one intelligent system. HIPAA-compliant architecture with AI-powered no-show reduction, real-time queue management, and actionable analytics — designed to give clinics complete operational control.",
      category: "Healthcare / SaaS",
      link: "https://www.pulsecal.com/",
      image: "/pulsecal-showcase.png",
      technologies: ["Telemedicine", "HIPAA", "AI Scheduling", "Analytics"],
      highlights: [
        "Trusted by 500+ healthcare providers across institutions",
        "AI-powered scheduling reduces no-shows by 60%",
        "Built-in HIPAA-compliant video consultations",
        "Unified patient records, billing, and real-time queue management",
      ],
    },
    {
      id: 6,
      title: "Cultural Hatti",
      description: "A heritage fashion e-commerce platform celebrating India's artisan legacy — handcrafted sarees, designer suits, artisan jewelry, and timeless accessories sourced from 100+ master craftspeople across 29 states. Pan-India free shipping, immersive storytelling, and a shopping experience that honours 5,000 years of cultural craftsmanship.",
      category: "E-commerce / Fashion",
      link: "https://www.culturalhatti.com/",
      image: "/placeholder.svg",
      technologies: ["E-commerce", "Product Catalog", "Payments", "Logistics"],
      highlights: [
        "100+ verified master artisans across 29 Indian states",
        "Heritage fashion: sarees, suits, bags, jewelry, and accessories",
        "Free pan-India shipping with authentic craftsmanship guarantee",
        "Immersive collection storytelling with cultural heritage focus",
      ],
    },
    {
      id: 7,
      title: "Walk In Square",
      description: "A premium retail development platform designed for modern shopping destinations. Combining elegant storefront experiences with sophisticated tenant management, analytics dashboards, and visitor engagement tools — setting a new benchmark for how retail spaces are experienced, managed, and grown.",
      category: "Retail / Real Estate",
      link: "https://walkinsquare.vercel.app/",
      image: "/placeholder.svg",
      technologies: ["Retail Platform", "Analytics", "Dashboard", "UX Design"],
      highlights: [
        "Elegant premium retail storefront experience",
        "Sophisticated tenant and vendor management system",
        "Real-time visitor analytics and engagement dashboards",
        "Modern UX design setting new retail benchmarks",
      ],
    },
  ]

  return (
    <PageLayout title="Featured Work">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Our featured projects represent the pinnacle of our craft — meticulously engineered digital products
              that merge visionary design with uncompromising technical execution. Each project is a testament to our
              relentless pursuit of excellence and our commitment to delivering measurable, transformative results.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              From enterprise AI platforms to luxury e-commerce experiences, from zero-knowledge security systems
              to healthcare SaaS — our portfolio demonstrates an unwavering standard of quality that positions our
              clients at the forefront of their industries.
            </p>
          </div>

          {/* Works */}
          <div className="space-y-24">
            {works.map((work, index) => (
              <div
                key={work.id}
                className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                  {/* Image */}
                  <div className="order-2 md:order-1">
                    <Link
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden rounded-2xl border border-foreground/10 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-foreground/30 hover:bg-card/50"
                    >
                      <div className="relative h-64 w-full overflow-hidden bg-foreground/5 md:h-96">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      </div>
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="order-1 md:order-2">
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                        {work.category}
                      </span>
                    </div>
                    <h2 className="mb-4 font-sans text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
                      {work.title}
                    </h2>
                    <p className="mb-6 text-base leading-relaxed text-foreground/80 md:text-lg">
                      {work.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-tight text-foreground/60">
                        Key Highlights
                      </h3>
                      <ul className="space-y-2">
                        {work.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="mb-3 font-sans text-sm font-semibold uppercase tracking-tight text-foreground/60">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 font-sans font-semibold text-foreground transition-all duration-300 hover:gap-3"
                    >
                      Visit Live Project
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`mt-24 rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              } transition-all duration-700`}
            style={{ transitionDelay: "600ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Ready to Create Something Exceptional?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let&apos;s architect a digital experience that elevates your brand to its highest potential.
            </p>
            <Link
              href="/#contact"
              className="inline-block rounded-full bg-foreground/95 px-8 py-3.5 text-base font-medium text-background transition-all duration-300 hover:bg-foreground hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
