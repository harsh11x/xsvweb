"use client"

import { useReveal } from "@/hooks/use-reveal"
import Link from "next/link"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 sm:mb-12 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-3xl font-light tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Featured
          </h2>
          <p className="font-mono text-xs text-foreground/60 sm:text-sm md:text-base">/ Recent explorations</p>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "Android App Development",
              category: "Native Excellence",
              year: "2024",
              slug: "android-app-development",
            },
            {
              number: "02",
              title: "iOS App Development",
              category: "Apple Excellence",
              year: "2024",
              slug: "ios-app-development",
            },
            {
              number: "03",
              title: "Website Development",
              category: "Digital Excellence",
              year: "2024",
              slug: "website-development",
            },
          ].map((project, i) => (
            <Link
              key={i}
              href={`/why-we-are-different/${project.slug}`}
              className={`group flex min-h-[60px] items-center justify-between border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/5 active:bg-foreground/10 sm:py-6 md:py-8 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="flex flex-1 items-baseline gap-3 sm:gap-4 md:gap-8">
                <span className="font-mono text-xs text-foreground/30 transition-all duration-300 group-hover:text-accent group-hover:scale-110 sm:text-sm md:text-base">
                  {project.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 font-sans text-lg font-light text-foreground transition-all duration-300 group-hover:translate-x-2 group-hover:text-foreground sm:text-xl sm:mb-1 md:text-2xl lg:text-3xl xl:text-4xl">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-foreground/50 transition-colors duration-300 group-hover:text-foreground/70 sm:text-sm">
                    {project.category}
                  </p>
                </div>
              </div>
              <span className="ml-4 flex-shrink-0 font-mono text-xs text-foreground/30 transition-all duration-300 group-hover:text-foreground/50 sm:text-sm">
                {project.year}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
