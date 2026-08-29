"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: () => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-4 py-20 md:px-4 md:py-24 lg:px-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                We Don't Just Build.
                <br />
                We Engineer
                <br />
                <span className="text-foreground/40">Digital Dominance.</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                We are a premium digital product studio specialising in enterprise-grade web platforms, native mobile applications, encrypted communications systems, AI-powered solutions, and luxury e-commerce experiences. Every product we ship is engineered to the highest standard — because our clients deserve nothing less.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                With a portfolio spanning deep-tech AI, healthcare SaaS, campus fintech, and heritage fashion — we bring a rare combination of technical depth and creative vision. We don't chase trends; we set them. And we don't just deliver projects — we deliver competitive advantages.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-12">
            {[
              { value: "500+", label: "Projects", sublabel: "Delivered to exacting standards" },
              { value: "7", label: "Industries", sublabel: "AI, Health, Fintech, Retail & more" },
              { value: "98%", label: "Client Retention", sublabel: "They come back because we deliver" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${300 + i * 150}ms`,
                }}
              >
                <div className="text-3xl font-light text-foreground md:text-6xl lg:text-7xl">{stat.value}</div>
                <div>
                  <div className="font-sans text-base font-light text-foreground md:text-xl">{stat.label}</div>
                  <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.()}>
            Start a Project
          </MagneticButton>
          <MagneticButton
            size="lg"
            variant="secondary"
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Our Work
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
