"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Smartphone, Code, Zap, Shield, Store, ArrowRight, Rocket, CheckCircle2 } from "lucide-react"

export default function AppDevelopmentPage() {
  const { ref, isVisible } = useReveal(0.2)

  const services = [
    {
      icon: Smartphone,
      title: "iOS App Development",
      description: "Native iOS apps built with Swift and SwiftUI that deliver exceptional performance and user experience. We follow Apple's Human Interface Guidelines to create intuitive, beautiful apps that feel native to the platform. From concept to App Store launch, we handle every step.",
    },
    {
      icon: Code,
      title: "Android App Development",
      description: "Powerful Android applications using Kotlin and Jetpack Compose. We optimize for various screen sizes and Android versions, ensuring your app works flawlessly across the Android ecosystem. Material Design principles guide our UI/UX decisions.",
    },
    {
      icon: Rocket,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native and Flutter. We create apps that run seamlessly on both iOS and Android, reducing development time and costs while maintaining native performance and user experience.",
    },
    {
      icon: Store,
      title: "App Store Optimization",
      description: "Get your app discovered and downloaded. We optimize your app listing with compelling descriptions, screenshots, keywords, and ASO strategies that improve visibility and conversion rates in both the App Store and Google Play.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast apps that use minimal resources. We optimize code, reduce app size, implement efficient caching, and ensure smooth animations. Performance testing and profiling ensure your app runs flawlessly on all devices.",
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Secure apps that protect user data. We implement encryption, secure authentication, and follow security best practices. Post-launch, we provide maintenance, updates, and feature enhancements to keep your app current and secure.",
    },
  ]

  const platforms = [
    {
      name: "iOS",
      description: "Native apps for iPhone and iPad using Swift, SwiftUI, and the latest iOS features. Optimized for performance and App Store guidelines.",
    },
    {
      name: "Android",
      description: "Native Android apps built with Kotlin and modern Android development practices. Supporting all Android versions and device types.",
    },
    {
      name: "React Native",
      description: "Cross-platform development that shares code between iOS and Android while maintaining near-native performance and user experience.",
    },
    {
      name: "Flutter",
      description: "Google's framework for building beautiful, fast apps that run on iOS, Android, web, and desktop from a single codebase.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your app idea, target users, and business goals. We create detailed wireframes, user flows, and technical specifications that serve as the blueprint for development.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create pixel-perfect UI designs and interactive prototypes. We test user flows and iterate until the experience is intuitive and delightful. Design systems ensure consistency throughout the app.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers write clean, maintainable code following best practices. We implement features incrementally, test continuously, and ensure quality at every step. Regular builds keep you involved throughout the process.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We handle App Store submissions, manage the review process, and ensure a smooth launch. Post-launch, we monitor performance, fix issues, and implement updates to keep your app thriving.",
    },
  ]

  return (
    <PageLayout title="Mobile App Development">
      <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Transform your ideas into powerful mobile applications that users love. We build native and cross-platform apps that combine beautiful design, exceptional performance, and intuitive user experiences. From startups to enterprises, we deliver apps that drive engagement and business results.
            </p>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Whether you need an iOS app, Android app, or a cross-platform solution, we have the expertise to bring your vision to life. Our apps are built with scalability in mind, using modern technologies and best practices that ensure long-term success and easy maintenance.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Build Your Mobile App
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>

          {/* Services */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Our App Development Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={i}
                    className={`group transition-all duration-700 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                    style={{ transitionDelay: `${100 + i * 100}ms` }}
                  >
                    <div className="relative rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-500 group-hover:border-foreground/30 group-hover:bg-card/40 md:p-8">
                      <div className="mb-4 inline-flex rounded-lg bg-foreground/5 p-3 transition-all duration-300 group-hover:bg-foreground/10 group-hover:scale-110">
                        <IconComponent className="h-6 w-6 text-pink-500" />
                      </div>
                      <h3 className="mb-3 font-sans text-xl font-semibold text-foreground md:text-2xl">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Technologies We Use
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {platforms.map((platform, i) => (
                <div
                  key={i}
                  className={`rounded-xl border border-foreground/10 bg-card/10 backdrop-blur-sm p-6 transition-all duration-500 hover:border-foreground/20 hover:bg-card/20 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${700 + i * 100}ms` }}
                >
                  <h3 className="mb-2 font-sans text-xl font-semibold text-foreground">
                    {platform.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Our Development Process
            </h2>
            <div className="space-y-12">
              {process.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-6 transition-all duration-700 md:flex-row md:gap-12 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${1100 + i * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="mb-2 font-mono text-sm text-foreground/60">{item.step}</div>
                    <div className="h-px w-16 bg-foreground/30" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 font-sans text-2xl font-semibold text-foreground md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className={`rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } transition-all duration-700`}
            style={{ transitionDelay: "1700ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Ready to Build Your App?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's turn your app idea into reality. Contact us to discuss your project.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Start Your App Project
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

