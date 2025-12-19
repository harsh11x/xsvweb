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
      title: "Punjabi Jutti & Fulkari",
      description: "E-commerce platform showcasing authentic Punjabi traditional clothing and embroidered textiles",
      category: "E-commerce",
      link: "https://punjabijuttiandfulkari.com",
      image: "/punjabi-traditional-clothing-ecommerce-store.jpg",
      technologies: ["E-commerce", "Product Showcase", "Payments"],
    },
    {
      id: 2,
      title: "Zephyrn Securities",
      description: "Highly secure communication platform with advanced encryption and decryption capabilities",
      category: "Security",
      link: "https://zephyrnsecurities.com",
      image: "/secure-communication-platform-encryption-technolog.jpg",
      technologies: ["Encryption", "Security", "Communication"],
    },
    {
      id: 3,
      title: "PulseCal",
      description: "Healthcare management platform integrating smart scheduling, telemedicine, and unified patient records",
      category: "Healthcare",
      link: "https://pulsecal.com",
      image: "https://www.pulsecal.com/og.png",
      technologies: ["Telemedicine", "Management", "Analytics"],
    },
    {
      id: 4,
      title: "PawPerfect",
      description: "Premium pet grooming service platform offering online booking for baths, cuts, and specialized treatments",
      category: "Services",
      link: "https://petgrooming-three.vercel.app",
      image: "/placeholder.svg",
      technologies: ["Booking", "Services", "Care"],
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
    onSelect() // Initial check

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
                Discover the digital solutions we've crafted for forward-thinking businesses.
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
                        {work.technologies.map((tech, i) => (
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
