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
      title: "Punjabi Jutti & Fulkari",
      category: "E-commerce Platform",
      year: "2024",
      description: "A comprehensive e-commerce solution for traditional Punjabi clothing and textiles, featuring seamless shopping experiences and secure payment processing.",
      link: "https://punjabijuttiandfulkari.com",
      technologies: ["E-commerce", "Product Management", "Payments"],
    },
    {
      number: "02",
      title: "Zephyr & Securities",
      category: "Security Platform",
      year: "2024",
      description: "Advanced secure communication platform with end-to-end encryption, designed for businesses prioritizing data protection and privacy.",
      link: "https://zephyrnsecurities.com",
      technologies: ["Encryption", "Security", "Real-time Communication"],
    },
    {
      number: "03",
      title: "Kinetic Typography",
      category: "Interactive Experience",
      year: "2024",
      description: "An innovative web experience showcasing dynamic typography and motion design, pushing the boundaries of digital storytelling.",
      technologies: ["Animation", "WebGL", "Interactive Design"],
    },
    {
      number: "04",
      title: "Generative Patterns",
      category: "Visual System",
      year: "2024",
      description: "A creative exploration of algorithmic design and generative art, creating unique visual patterns that adapt and evolve.",
      technologies: ["Generative Design", "Creative Coding", "Visual Systems"],
    },
    {
      number: "05",
      title: "Spatial Interface",
      category: "3D Navigation",
      year: "2023",
      description: "Revolutionary 3D navigation system that transforms how users interact with digital content, creating immersive browsing experiences.",
      technologies: ["3D Design", "WebGL", "User Experience"],
    },
  ]

  return (
    <PageLayout title="Our Work">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Explore our portfolio of digital solutions spanning web development, mobile apps, branding, and innovative digital experiences. Each project represents our commitment to excellence, creativity, and delivering results that matter.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              From e-commerce platforms to secure communication systems, from experimental design explorations to production-ready applications—our work demonstrates the breadth of our capabilities and our passion for pushing digital boundaries.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-6 md:space-y-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group flex flex-col gap-4 border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/5 md:flex-row md:items-center md:justify-between md:gap-8 md:py-8 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
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
            className={`mt-24 rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } transition-all duration-700`}
            style={{ transitionDelay: `${600 + projects.length * 100}ms` }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's collaborate to bring your vision to life.
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

