"use client"

import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Featured
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Recent explorations</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "Kinetic Typography",
              category: "Interactive Experience",
              year: "2024",
            },
            {
              number: "02",
              title: "Generative Patterns",
              category: "Visual System",
              year: "2024",
            },
            {
              number: "03",
              title: "Spatial Interface",
              category: "3D Navigation",
              year: "2023",
            },
          ].map((project, i) => (
            <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string }
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/5 md:py-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-all duration-300 group-hover:text-accent group-hover:scale-110 md:text-base">
          {project.number}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-all duration-300 group-hover:translate-x-2 group-hover:text-foreground md:text-3xl lg:text-4xl">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 transition-colors duration-300 group-hover:text-foreground/70 md:text-sm">
            {project.category}
          </p>
        </div>
      </div>
      <span className="font-mono text-xs text-foreground/30 transition-all duration-300 group-hover:text-foreground/50 md:text-sm">
        {project.year}
      </span>
    </div>
  )
}
