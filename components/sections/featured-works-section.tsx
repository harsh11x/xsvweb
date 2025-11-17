"use client"

import { useReveal } from "@/hooks/use-reveal"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function FeaturedWorksSection() {
  const { ref, isVisible } = useReveal(0.2)

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
      title: "Zephyr & Securities",
      description: "Highly secure communication platform with advanced encryption and decryption capabilities",
      category: "Security",
      link: "https://zephyrnsecurities.com",
      image: "/secure-communication-platform-encryption-technolog.jpg",
      technologies: ["Encryption", "Security", "Communication"],
    },
  ]

  return (
    <section ref={ref} id="featured" className="relative w-full px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 sm:mb-12 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-3 font-sans text-3xl font-light leading-[1.2] tracking-tight text-foreground sm:text-4xl sm:mb-4 md:text-5xl lg:text-6xl">
            <span className="text-balance">Featured Work</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base md:text-lg lg:text-xl">
            Discover the digital solutions we've crafted for forward-thinking businesses. From comprehensive e-commerce platforms that drive sales to secure communication systems that protect sensitive data, each project represents our commitment to excellence, innovation, and delivering measurable results.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12">
          {works.map((work, index) => (
            <Link
              key={work.id}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-foreground/30 hover:bg-card/50 hover:shadow-2xl hover:shadow-foreground/10 active:scale-[0.98] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-foreground/5 sm:h-56 md:h-64 lg:h-80">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="relative p-5 sm:p-6 md:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-accent/20 px-2.5 py-1 text-xs font-medium text-accent transition-all duration-300 group-hover:bg-accent/40 sm:px-3">
                    {work.category}
                  </span>
                </div>

                <h3 className="mb-2 font-sans text-xl font-semibold text-foreground transition-all duration-300 group-hover:translate-x-1 sm:text-2xl md:text-3xl">
                  {work.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-foreground/70 sm:mb-6 sm:text-base">{work.description}</p>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {work.technologies.map((tech, i) => (
                    <span
                      key={tech}
                      className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/70 transition-all duration-300 group-hover:bg-foreground/10 group-hover:text-foreground/90"
                      style={{
                        transitionDelay: `${i * 30}ms`,
                      }}
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
          ))}
        </div>
      </div>
    </section>
  )
}
