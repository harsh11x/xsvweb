"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react"

export default function iOSAppDevelopmentPage() {
  const { ref, isVisible } = useReveal(0.2)

  const advantages = [
    "Native iOS development with Swift and SwiftUI, delivering buttery-smooth performance and native feel",
    "Strict adherence to Apple's Human Interface Guidelines, creating intuitive experiences users expect",
    "Seamless integration with iOS ecosystem—Core Data, CloudKit, Apple Pay, and latest iOS features",
    "Expert navigation through App Store review process with 100% approval rate on first submission",
    "Optimized for iPhone and iPad with responsive layouts that adapt beautifully to every screen size",
  ]

  return (
    <PageLayout title="iOS App Development">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Our iOS app development exceeds industry standards through native excellence, meticulous attention to Apple's design principles, and a proven track record of creating apps that users love and App Store reviewers approve.
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="mb-8 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Why Our iOS Apps Are Better
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
              Ready to Build Your iOS App?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's create an iOS app that meets Apple's highest standards and delights your users.
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

