"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { Smartphone, CheckCircle2 } from "lucide-react"

export default function iOSAppDevelopmentPage() {
  const { ref, isVisible } = useReveal(0.2)

  const advantages = [
    "Native iOS development with Swift and SwiftUI, delivering buttery-smooth performance and native feel",
    "Strict adherence to Apple's Human Interface Guidelines, creating intuitive experiences users expect",
    "Seamless integration with iOS ecosystem—Core Data, CloudKit, Apple Pay, and latest iOS features",
    "Expert navigation through App Store review process with 100% approval rate on first submission",
    "Optimized for iPhone and iPad with responsive layouts that adapt beautifully to every screen size",
    "Leverage latest iOS features including Widgets, Shortcuts, Live Activities, and advanced animations",
    "Custom designs that feel native to iOS while maintaining your unique brand identity",
    "Swift-based architecture ensuring code quality, maintainability, and future-proofing",
    "Comprehensive testing on real iOS devices across all screen sizes and iOS versions",
    "Ongoing support and updates to keep your app current with iOS releases and user needs",
  ]

  return (
    <PageLayout title="iOS App Development">
      <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-lg bg-foreground/5 p-3">
              <Smartphone className="h-6 w-6 text-primary" />
              <span className="font-mono text-sm text-foreground/60">Apple Excellence</span>
            </div>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Our iOS app development delivers native experiences that users love. We understand Apple's ecosystem inside and out, ensuring your app feels right at home on iOS devices.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              From concept to App Store launch, we handle every detail with precision and expertise, resulting in iOS apps that perform flawlessly and delight users.
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-12">
            <h2 className="mb-8 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Why Our iOS Development Excels
            </h2>
            <div className="space-y-4">
              {advantages.map((advantage, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 rounded-xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-4 transition-all duration-500 hover:border-foreground/20 hover:bg-card/30 md:p-6 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-foreground/90 md:text-base">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className={`rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } transition-all duration-700`}
            style={{ transitionDelay: "1200ms" }}
          >
            <h3 className="mb-4 font-sans text-2xl font-light tracking-tight text-foreground md:text-3xl">
              Ready to Build Your iOS App?
            </h3>
            <p className="mb-6 text-foreground/80">
              Let's create an iOS app that stands out in the App Store and exceeds user expectations.
            </p>
            <a
              href="/#contact"
              className="inline-block rounded-full bg-foreground/95 px-8 py-3.5 text-base font-medium text-background transition-all duration-300 hover:bg-foreground hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

