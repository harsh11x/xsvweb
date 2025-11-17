"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { Smartphone, CheckCircle2 } from "lucide-react"

export default function AndroidAppDevelopmentPage() {
  const { ref, isVisible } = useReveal(0.2)

  const advantages = [
    "Native Android apps built with Kotlin and Jetpack Compose for optimal performance and modern UI",
    "Deep integration with Android ecosystem—Material Design, Google Services, and platform-specific features",
    "Optimized for all Android versions and screen sizes, ensuring compatibility across the widest range of devices",
    "Proven track record of successful Play Store launches with high ratings and user satisfaction",
    "Advanced architecture patterns ensuring scalability, maintainability, and long-term success",
    "Custom UI/UX designs that follow Material Design principles while reflecting your brand identity",
    "Seamless integration with Google Play Services including Maps, Analytics, Firebase, and more",
    "Optimized app performance with efficient memory management and battery optimization",
    "Comprehensive testing across multiple Android devices and versions before launch",
    "Post-launch support and maintenance to keep your app updated and bug-free",
  ]

  return (
    <PageLayout title="Android App Development">
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
              <span className="font-mono text-sm text-foreground/60">Native Excellence</span>
            </div>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Our Android app development expertise sets us apart from the competition. We don't just build apps—we craft native Android experiences that leverage the full power of the Android platform.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              From small startups to enterprise-level applications, we deliver Android apps that perform flawlessly, look stunning, and provide exceptional user experiences that keep users engaged.
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-12">
            <h2 className="mb-8 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Why Our Android Development Stands Out
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
              Ready to Build Your Android App?
            </h3>
            <p className="mb-6 text-foreground/80">
              Let's create an Android app that exceeds expectations and drives business results.
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

