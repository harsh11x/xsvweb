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
      description: "An elite, enterprise-grade AI machine unlearning platform engineered to surgically excise redundant neural pathways. Achieving an unprecedented 50% reduction in model weight and a 42% decrease in compute latency—all while preserving 99.2% accuracy. Designed exclusively for top-tier research labs demanding uncompromising efficiency.",
      category: "AI / Deep Tech",
      link: "https://remapstudios.vercel.app/",
      image: "/projects/remap_studios.png",
      technologies: ["Machine Learning", "Neural Architecture", "Python", "HuggingFace"],
      highlights: [
        "Unprecedented surgical neuron removal with 99.2% accuracy retention",
        "Up to 50% reduction in model weight and 42% compute latency savings",
        "State-of-the-art interactive architecture explorer for real-time benchmark analysis",
        "Exclusive desktop application and web sandbox for hands-on, elite model optimization",
      ],
    },
    {
      id: 2,
      title: "Zephyrn",
      description: "The pinnacle of zero-knowledge encrypted communications. Zephyrn delivers impenetrable end-to-end encryption across high-fidelity calls, messaging, and large file transfers. By ensuring keys never leave the device, unauthorized access becomes a mathematical impossibility. Built for enterprises that require absolute, uncompromising privacy.",
      category: "Security / Encryption",
      link: "https://zephywebsite.vercel.app/",
      image: "/projects/zephyrn.png",
      technologies: ["E2E Encryption", "Zero Knowledge", "WebRTC", "Real-time Comms"],
      highlights: [
        "Pioneering zero-knowledge architecture rendering data access mathematically impossible",
        "Flawless end-to-end encryption across calls, messaging, and large-scale file transfers",
        "Uncompromised security: cryptographic keys remain strictly on the user's device",
        "Elite enterprise-grade security unified with consumer-grade aesthetic simplicity",
      ],
    },
    {
      id: 3,
      title: "Punjab Heritage",
      description: "A luxury e-commerce boutique curating the finest handcrafted Punjabi leather juttis and exquisite phulkari textiles. We connect discerning global clientele with master artisans, offering a seamless, premium shopping experience characterized by rich heritage storytelling and flawless pan-India logistics.",
      category: "E-commerce / Heritage",
      link: "https://punjabiecom.vercel.app/",
      image: "/projects/punjab_heritage.png",
      technologies: ["E-commerce", "Product Showcase", "Payments", "Inventory"],
      highlights: [
        "Exclusive curation of artisan-crafted, luxury Punjabi leather juttis",
        "Immersive editorial storytelling rich with centuries-old heritage narratives",
        "Frictionless, premium pan-India checkout and delivery infrastructure",
        "High-fidelity visual aesthetics and responsive design tailored for the modern consumer",
      ],
    },
    {
      id: 4,
      title: "UniTap",
      description: "A sophisticated campus fintech ecosystem transforming university commerce. Leveraging state-of-the-art RFID technology, UniTap enables instant, frictionless cashless transactions while providing administrators with a powerful, real-time analytics dashboard to monitor institutional spending with absolute precision.",
      category: "Fintech / EdTech",
      link: "https://unitap-beta.vercel.app/",
      image: "/projects/unitap.png",
      technologies: ["RFID", "Fintech", "Analytics", "Payment Systems"],
      highlights: [
        "State-of-the-art RFID-based frictionless student wallet ecosystem",
        "Real-time, sophisticated vendor approval and sales analytics dashboard",
        "Unified, premium platform experience for elite administrators, vendors, and students",
        "Advanced risk monitoring and high-precision spending insights for university operations",
      ],
    },
    {
      id: 5,
      title: "PulseCal",
      description: "A premium healthcare SaaS ecosystem trusted by over 500 leading medical providers. PulseCal unifies complex scheduling, secure telemedicine, and intelligent billing into a beautifully intuitive, HIPAA-compliant interface—empowering clinics with AI-driven efficiency and unparalleled operational control.",
      category: "Healthcare / SaaS",
      link: "https://www.pulsecal.com/",
      image: "/projects/pulsecal.png",
      technologies: ["Telemedicine", "HIPAA", "AI Scheduling", "Analytics"],
      highlights: [
        "Exclusively trusted by 500+ top-tier healthcare providers and leading institutions",
        "Advanced AI-powered scheduling infrastructure reducing no-shows by an unprecedented 60%",
        "Flawless, high-fidelity HIPAA-compliant secure video consultations",
        "Unified ecosystem integrating patient records, billing, and intelligent queue management",
      ],
    },
    {
      id: 6,
      title: "Cultural Hatti",
      description: "An exclusive heritage fashion destination showcasing the extraordinary artistry of India's master craftspeople. Featuring a curated selection of luxurious handwoven sarees, bespoke jewelry, and timeless accessories—delivered with world-class service and immersive, high-fashion editorial storytelling.",
      category: "E-commerce / Fashion",
      link: "https://www.culturalhatti.com/",
      image: "/projects/cultural_hatti.png",
      technologies: ["E-commerce", "Product Catalog", "Payments", "Logistics"],
      highlights: [
        "Curated network of 100+ verified master artisans across 29 Indian states",
        "Exclusive heritage fashion: bespoke sarees, designer suits, and fine artisan jewelry",
        "Complimentary pan-India logistics paired with an absolute authentic craftsmanship guarantee",
        "Immersive, high-fashion editorial storytelling focused on rich cultural heritage",
      ],
    },
    {
      id: 7,
      title: "Walk In Square",
      description: "An upscale retail development and property management platform. Walk In Square combines elegant digital storefronts with an advanced analytics suite for elite tenant management—redefining the operational standards and customer engagement models for modern luxury shopping destinations.",
      category: "Retail / Real Estate",
      link: "https://walkinsquare.vercel.app/",
      image: "/projects/walk_in_square.png",
      technologies: ["Retail Platform", "Analytics", "Dashboard", "UX Design"],
      highlights: [
        "High-end platform designed exclusively for premium retail property development",
        "Elegant digital storefronts paired with sophisticated tenant management tools",
        "Advanced data analytics dashboards delivering unparalleled operational insights",
        "Refined visitor engagement tools setting a new benchmark for luxury retail spaces",
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
