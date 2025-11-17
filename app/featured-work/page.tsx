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
      title: "Punjabi Jutti & Fulkari",
      description: "A comprehensive e-commerce platform showcasing authentic Punjabi traditional clothing and beautifully embroidered textiles. This project demonstrates our expertise in building scalable online stores that celebrate cultural heritage while providing modern shopping experiences.",
      category: "E-commerce",
      link: "https://punjabijuttiandfulkari.com",
      image: "/punjabi-traditional-clothing-ecommerce-store.jpg",
      technologies: ["E-commerce", "Product Showcase", "Payment Integration", "Inventory Management"],
      highlights: [
        "Seamless shopping experience across all devices",
        "Secure payment processing and checkout flow",
        "Comprehensive product catalog with high-quality imagery",
        "User-friendly navigation and search functionality",
      ],
    },
    {
      id: 2,
      title: "Zephyr & Securities",
      description: "A highly secure communication platform featuring advanced encryption and decryption capabilities. Built with security as the foundation, this platform enables safe, private communications for businesses and individuals who prioritize data protection.",
      category: "Security Platform",
      link: "https://zephyrnsecurities.com",
      image: "/secure-communication-platform-encryption-technolog.jpg",
      technologies: ["Encryption", "Security", "Real-time Communication", "Data Protection"],
      highlights: [
        "End-to-end encryption for all communications",
        "Advanced security protocols and compliance",
        "Intuitive interface for complex security features",
        "Scalable architecture for growing user bases",
      ],
    },
  ]

  return (
    <PageLayout title="Featured Work">
      <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Our featured projects represent the pinnacle of our work—solutions that combine innovative design, robust functionality, and strategic thinking. Each project tells a story of collaboration, creativity, and commitment to excellence.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              From e-commerce platforms that drive sales to secure communication systems that protect sensitive data, these projects showcase our ability to deliver results across diverse industries and use cases.
            </p>
          </div>

          {/* Works */}
          <div className="space-y-24">
            {works.map((work, index) => (
              <div
                key={work.id}
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
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
            className={`mt-24 rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } transition-all duration-700`}
            style={{ transitionDelay: "600ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Ready to Create Something Amazing?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's discuss how we can bring your vision to life.
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

