"use client"

import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: () => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left side - Story */}
          <div>
            <div
              className={`mb-6 transition-all duration-700 sm:mb-8 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-2xl font-light leading-[1.1] tracking-tight text-foreground sm:text-3xl sm:mb-4 md:text-5xl lg:text-6xl xl:text-7xl">
                Delivering Digital
                <br />
                Excellence for
                <br />
                <span className="text-foreground/40">Your Business</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 sm:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg">
                XSV Outdoor Media is a full-service digital marketing agency specializing in web development, mobile app building, social media marketing, and comprehensive branding solutions. We transform businesses through innovative digital experiences that drive growth and build lasting customer relationships.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 sm:text-base md:text-lg">
                With a proven track record of delivering exceptional results, we combine creative vision with technical expertise to help businesses establish and enhance their online presence. From startups launching their first website to established companies modernizing their digital strategy, we're your trusted partner in digital excellence.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-12">
            {[
              { value: "500+", label: "Projects", sublabel: "Delivered successfully" },
              { value: "5", label: "Years", sublabel: "In digital marketing" },
              { value: "100+", label: "Happy Clients", sublabel: "Across industries" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex items-baseline gap-3 border-l border-foreground/30 pl-3 transition-all duration-700 sm:gap-4 sm:pl-4 md:gap-8 md:pl-8 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${300 + i * 150}ms`,
                }}
              >
                <div className="text-2xl font-light text-foreground sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">{stat.value}</div>
                <div>
                  <div className="font-sans text-sm font-light text-foreground sm:text-base md:text-xl">{stat.label}</div>
                  <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 sm:gap-4 md:mt-16 ${
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
