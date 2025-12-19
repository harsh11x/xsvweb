"use client"

import { useReveal } from "@/hooks/use-reveal"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

export function FeaturedWorksSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
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

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

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
            <div className="hidden gap-2 md:flex">
              {/* Optional: Add prev/next buttons here if requested, currently user asked for indicators */}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={`overflow-hidden transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          ref={emblaRef}
        >
          <div className="flex touch-pan-y gap-6 md:gap-8">
            {works.map((work) => (
              <div key={work.id} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_50%]">
                <Link
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-foreground/10 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-foreground/30 hover:bg-card/50"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-foreground/5">
                    <img
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent transition-all duration-300 group-hover:bg-accent/40">
                        {work.category}
                      </span>
                    </div>

                    <h3 className="mb-2 font-sans text-2xl font-semibold text-foreground transition-all duration-300 group-hover:translate-x-1 md:text-3xl">
                      {work.title}
                    </h3>

                    <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-foreground/70 md:text-base">
                      {work.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {work.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={tech}
                          className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 font-sans font-semibold text-foreground transition-all duration-300 group-hover:gap-3">
                      Visit Project
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
