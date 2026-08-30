"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function OurWorkPage() {
  const { ref, isVisible } = useReveal(0.2)

  const projects = [
    {
      number: "01",
      title: "Remap Studios",
      category: "AI / Deep Tech Platform",
      year: "2025",
      description: "An elite, enterprise-grade AI machine unlearning platform engineered to surgically excise redundant neural pathways. Achieving an unprecedented 50% reduction in model weight and a 42% decrease in compute latency—all while preserving 99.2% accuracy. Designed exclusively for top-tier research labs demanding uncompromising efficiency.",
      link: "https://remapstudios.vercel.app/",
      technologies: ["Machine Learning", "Neural Architecture", "Python", "HuggingFace"],
    },
    {
      number: "02",
      title: "Zephyrn",
      category: "Encrypted Communications",
      year: "2025",
      description: "The pinnacle of zero-knowledge encrypted communications. Zephyrn delivers impenetrable end-to-end encryption across high-fidelity calls, messaging, and large file transfers. By ensuring keys never leave the device, unauthorized access becomes a mathematical impossibility. Built for enterprises that require absolute, uncompromising privacy.",
      link: "https://zephywebsite.vercel.app/",
      technologies: ["E2E Encryption", "Zero Knowledge", "WebRTC", "Real-time Comms"],
    },
    {
      number: "03",
      title: "Punjab Heritage",
      category: "Premium E-commerce",
      year: "2025",
      description: "A luxury e-commerce boutique curating the finest handcrafted Punjabi leather juttis and exquisite phulkari textiles. We connect discerning global clientele with master artisans, offering a seamless, premium shopping experience characterized by rich heritage storytelling and flawless pan-India logistics.",
      link: "https://punjabiecom.vercel.app/",
      technologies: ["E-commerce", "Product Showcase", "Payments", "Inventory"],
    },
    {
      number: "04",
      title: "UniTap",
      category: "Campus Fintech",
      year: "2025",
      description: "A sophisticated campus fintech ecosystem transforming university commerce. Leveraging state-of-the-art RFID technology, UniTap enables instant, frictionless cashless transactions while providing administrators with a powerful, real-time analytics dashboard to monitor institutional spending with absolute precision.",
      link: "https://unitap-beta.vercel.app/",
      technologies: ["RFID", "Fintech", "Analytics", "Payment Systems"],
    },
    {
      number: "05",
      title: "PulseCal",
      category: "Healthcare SaaS",
      year: "2024",
      description: "A premium healthcare SaaS ecosystem trusted by over 500 leading medical providers. PulseCal unifies complex scheduling, secure telemedicine, and intelligent billing into a beautifully intuitive, HIPAA-compliant interface—empowering clinics with AI-driven efficiency and unparalleled operational control.",
      link: "https://www.pulsecal.com/",
      technologies: ["Telemedicine", "HIPAA", "AI Scheduling", "Analytics"],
    },
    {
      number: "06",
      title: "Cultural Hatti",
      category: "Heritage Fashion E-commerce",
      year: "2024",
      description: "An exclusive heritage fashion destination showcasing the extraordinary artistry of India's master craftspeople. Featuring a curated selection of luxurious handwoven sarees, bespoke jewelry, and timeless accessories—delivered with world-class service and immersive, high-fashion editorial storytelling.",
      link: "https://www.culturalhatti.com/",
      technologies: ["E-commerce", "Product Catalog", "Payments", "Logistics"],
    },
    {
      number: "07",
      title: "Walk In Square",
      category: "Premium Retail Platform",
      year: "2024",
      description: "An upscale retail development and property management platform. Walk In Square combines elegant digital storefronts with an advanced analytics suite for elite tenant management—redefining the operational standards and customer engagement models for modern luxury shopping destinations.",
      link: "https://walkinsquare.vercel.app/",
      technologies: ["Retail Platform", "Analytics", "Dashboard", "UX Design"],
    },
  ]

  return (
    <PageLayout title="Our Work">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Explore our portfolio of meticulously crafted digital solutions spanning AI platforms, encrypted communications,
              enterprise SaaS, fintech, and luxury e-commerce. Each project reflects our unwavering commitment to precision,
              innovation, and delivering results that redefine industry standards.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              From deep-tech AI optimization to heritage fashion e-commerce, from zero-knowledge security systems to
              healthcare platforms trusted by hundreds of providers — our work demonstrates a caliber of execution
              that consistently positions our clients ahead of the curve.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-6 md:space-y-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group flex flex-col gap-4 border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/5 md:flex-row md:items-center md:justify-between md:gap-8 md:py-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="flex flex-1 items-start gap-4 md:items-center md:gap-8">
                  <span className="font-mono text-sm text-foreground/30 transition-all duration-300 group-hover:text-accent group-hover:scale-110 md:text-base">
                    {project.number}
                  </span>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="font-sans text-2xl font-light text-foreground transition-all duration-300 group-hover:translate-x-2 group-hover:text-foreground md:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                        >
                          <ArrowUpRight className="h-5 w-5 text-foreground/60 transition-colors hover:text-foreground" />
                        </Link>
                      )}
                    </div>
                    <p className="mb-2 font-mono text-xs text-foreground/50 transition-colors duration-300 group-hover:text-foreground/70 md:text-sm">
                      {project.category}
                    </p>
                    <p className="mb-3 max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-foreground/5 px-2 py-1 text-xs text-foreground/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs text-foreground/30 transition-all duration-300 group-hover:text-foreground/50 md:text-sm">
                  {project.year}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`mt-24 rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              } transition-all duration-700`}
            style={{ transitionDelay: `${600 + projects.length * 100}ms` }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Have a Vision Worth Executing?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let&apos;s collaborate to build something that sets a new standard.
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
