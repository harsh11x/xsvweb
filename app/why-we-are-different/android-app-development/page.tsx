"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react"

export default function AndroidAppDevelopmentPage() {
  const { ref, isVisible } = useReveal(0.2)

  const advantages = [
    "Native Android apps built with Kotlin and Jetpack Compose for optimal performance and modern UI",
    "Deep integration with Android ecosystem—Material Design, Google Services, and platform-specific features",
    "Optimized for all Android versions and screen sizes, ensuring compatibility across the widest range of devices",
    "Proven track record of successful Play Store launches with high ratings and user satisfaction",
    "Advanced architecture patterns ensuring scalability, maintainability, and long-term success",
  ]

  return (
    <PageLayout title="Android App Development">
      <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Our Android app development stands out from the competition through native excellence, deep platform integration, and a commitment to delivering exceptional user experiences that perform flawlessly across the entire Android ecosystem.
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="mb-8 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Why Our Android Apps Are Better
            </h2>
            <div className="space-y-6">
              {advantages.map((advantage, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-700 hover:border-foreground/30 hover:bg-card/40 md:p-8 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" />
                  <p className="text-base leading-relaxed text-foreground/90 md:text-lg">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className={`rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } transition-all duration-700`}
            style={{ transitionDelay: "800ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Ready to Build Your Android App?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's create an Android app that stands out from the competition.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

