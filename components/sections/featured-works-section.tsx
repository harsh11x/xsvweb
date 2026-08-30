"use client"

import { useReveal } from "@/hooks/use-reveal"
import Link from "next/link"
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

export function FeaturedWorksSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const works = [
    {
      id: 1,
      title: "Remap Studios",
      description: "An elite, enterprise-grade AI machine unlearning platform engineered to surgically excise redundant neural pathways. Achieving an unprecedented 50% reduction in model weight and a 42% decrease in compute latency—all while preserving 99.2% accuracy. Designed exclusively for top-tier research labs demanding uncompromising efficiency.",
      category: "AI / Deep Tech",
      link: "https://remapstudios.vercel.app/",
      image: "/projects/remap_studios.png",
      technologies: ["Machine Learning", "Neural Architecture", "Python", "HuggingFace"],
    },
    {
      id: 2,
      title: "Zephyrn",
      description: "The pinnacle of zero-knowledge encrypted communications. Zephyrn delivers impenetrable end-to-end encryption across high-fidelity calls, messaging, and large file transfers. By ensuring keys never leave the device, unauthorized access becomes a mathematical impossibility. Built for enterprises that require absolute, uncompromising privacy.",
      category: "Security / Encryption",
      link: "https://zephywebsite.vercel.app/",
      image: "/projects/zephyrn.png",
      technologies: ["E2E Encryption", "Zero Knowledge", "WebRTC", "Real-time Comms"],
    },
    {
      id: 3,
      title: "Punjab Heritage",
      description: "A luxury e-commerce boutique curating the finest handcrafted Punjabi leather juttis and exquisite phulkari textiles. We connect discerning global clientele with master artisans, offering a seamless, premium shopping experience characterized by rich heritage storytelling and flawless pan-India logistics.",
      category: "E-commerce / Heritage",
      link: "https://punjabiecom.vercel.app/",
      image: "/projects/punjab_heritage.png",
      technologies: ["E-commerce", "Product Showcase", "Payments", "Inventory"],
    },
    {
      id: 4,
      title: "UniTap",
      description: "A sophisticated campus fintech ecosystem transforming university commerce. Leveraging state-of-the-art RFID technology, UniTap enables instant, frictionless cashless transactions while providing administrators with a powerful, real-time analytics dashboard to monitor institutional spending with absolute precision.",
      category: "Fintech / EdTech",
      link: "https://unitap-beta.vercel.app/",
      image: "/projects/unitap.png",
      technologies: ["RFID", "Fintech", "Analytics", "Payment Systems"],
    },
    {
      id: 5,
      title: "PulseCal",
      description: "A premium healthcare SaaS ecosystem trusted by over 500 leading medical providers. PulseCal unifies complex scheduling, secure telemedicine, and intelligent billing into a beautifully intuitive, HIPAA-compliant interface—empowering clinics with AI-driven efficiency and unparalleled operational control.",
      category: "Healthcare / SaaS",
      link: "https://www.pulsecal.com/",
      image: "/projects/pulsecal.png",
      technologies: ["Telemedicine", "HIPAA", "AI Scheduling", "Analytics"],
    },
    {
      id: 6,
      title: "Cultural Hatti",
      description: "An exclusive heritage fashion destination showcasing the extraordinary artistry of India's master craftspeople. Featuring a curated selection of luxurious handwoven sarees, bespoke jewelry, and timeless accessories—delivered with world-class service and immersive, high-fashion editorial storytelling.",
      category: "E-commerce / Fashion",
      link: "https://www.culturalhatti.com/",
      image: "/projects/cultural_hatti.png",
      technologies: ["E-commerce", "Product Catalog", "Payments", "Logistics"],
    },
    {
      id: 7,
      title: "Walk In Square",
      description: "An upscale retail development and property management platform. Walk In Square combines elegant digital storefronts with an advanced analytics suite for elite tenant management—redefining the operational standards and customer engagement models for modern luxury shopping destinations.",
      category: "Retail / Real Estate",
      link: "https://walkinsquare.vercel.app/",
      image: "/projects/walk_in_square.png",
      technologies: ["Retail Platform", "Analytics", "Dashboard", "UX Design"],
    },
  ]

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section ref={ref} id="featured" className="relative w-full px-4 py-24 md:px-4 md:py-32 lg:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="mb-4 font-sans text-5xl font-light leading-[1.2] tracking-tight text-foreground md:text-6xl">
                <span className="text-balance">Featured Work</span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                A curated showcase of high-calibre digital products we&apos;ve engineered for discerning brands —
                from deep-tech platforms to luxury e-commerce experiences.
              </p>
            </div>

            {/* Navigation Buttons (Desktop) */}
            <div className="hidden gap-3 md:flex">
              <button
                onClick={scrollPrev}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm transition-all hover:bg-foreground hover:text-background"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                onClick={scrollNext}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-background/50 backdrop-blur-sm transition-all hover:bg-foreground hover:text-background"
                aria-label="Next slide"
              >
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={`overflow-hidden transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          ref={emblaRef}
        >
          <div className="flex touch-pan-y gap-8">
            {works.map((work) => (
              <div key={work.id} className="min-w-0 flex-[0_0_100%]">
                <Link
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-3xl border border-foreground/10 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-foreground/30 hover:bg-card/50"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image (Left Side) */}
                    <div className="relative aspect-video w-full overflow-hidden bg-foreground/5 md:aspect-auto md:w-3/5">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent md:bg-gradient-to-r" />
                    </div>

                    {/* Content (Right Side) */}
                    <div className="relative flex flex-col justify-center p-6 md:w-2/5 md:p-10 lg:p-12">
                      <div className="mb-6 flex items-center gap-2">
                        <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent transition-all duration-300 group-hover:bg-accent/40">
                          {work.category}
                        </span>
                      </div>

                      <h3 className="mb-4 font-sans text-3xl font-semibold text-foreground transition-all duration-300 group-hover:translate-x-1 md:text-4xl">
                        {work.title}
                      </h3>

                      <p className="mb-8 text-base leading-relaxed text-foreground/70 md:text-lg">
                        {work.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-8 flex flex-wrap gap-2">
                        {work.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 font-sans text-lg font-semibold text-foreground transition-all duration-300 group-hover:gap-3">
                        Visit Project
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-foreground" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
