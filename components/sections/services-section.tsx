"use client"

import type React from "react"

import { useReveal } from "@/hooks/use-reveal"
import { Globe, Share2, Palette, Smartphone, CheckCircle2 } from "lucide-react"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  const services = [
    {
      title: "Website Building",
      description: "We architect high-performance web platforms built on modern stacks — Next.js, React, TypeScript — that load in milliseconds, rank effortlessly on search engines, and convert with precision. Every site is engineered to be as fast as it is beautiful, as functional as it is elegant.",
      icon: Globe,
      features: ["Next.js / React / TypeScript", "Sub-second Load Times", "SEO by Default", "Scalable Architecture"],
      color: "text-blue-500",
    },
    {
      title: "Social Media Marketing",
      description: "We craft data-driven social media strategies that don't just generate impressions — they generate revenue. From content creation to community management, we build magnetic brand presences that convert followers into loyal customers and amplify your market position.",
      icon: Share2,
      features: ["Data-Driven Strategy", "Revenue-Focused Campaigns", "Real-time Analytics", "Community Building"],
      color: "text-emerald-500",
    },
    {
      title: "Branding & Design",
      description: "We create brand identities that command attention and inspire trust. From luxury-grade visual systems to comprehensive brand guidelines, we build cohesive identities that tell your story with authority and leave a lasting, indelible impression on your audience.",
      icon: Palette,
      features: ["Logo & Identity", "Brand Guidelines", "Visual Systems", "Design Language"],
      color: "text-amber-500",
    },
    {
      title: "Mobile App Development",
      description: "We engineer native and cross-platform mobile applications that deliver buttery-smooth performance, stunning interfaces, and intuitive user experiences. From iOS to Android, we build apps that users can't put down and businesses can't do without.",
      icon: Smartphone,
      features: ["iOS & Android Native", "Cross-platform (React Native)", "Real-time Systems", "App Store Optimisation"],
      color: "text-pink-500",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-4 py-20 md:px-4 md:py-24 lg:px-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Our Services
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Precision-crafted capabilities that deliver results
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-12">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: {
    title: string
    description: string
    icon: React.ComponentType<any>
    features: string[]
    color: string
  }
  index: number
  isVisible: boolean
}) {
  const IconComponent = service.icon

  return (
    <div
      className={`group transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="relative rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-500 group-hover:border-foreground/30 group-hover:bg-card/40 md:p-8">
        {/* Line animation */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
          <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
        </div>

        <div className="mb-4 inline-flex rounded-lg bg-foreground/5 p-3 transition-all duration-300 group-hover:bg-foreground/10 group-hover:scale-110">
          <IconComponent className={`h-6 w-6 transition-transform duration-300 ${service.color}`} />
        </div>

        <h3 className="mb-3 font-sans text-2xl font-semibold text-foreground transition-all duration-300 group-hover:translate-x-1 md:text-3xl">
          {service.title}
        </h3>
        <p className="mb-6 max-w-sm text-sm leading-relaxed text-foreground/80 transition-colors duration-300 group-hover:text-foreground/90 md:text-base">
          {service.description}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-foreground/70 transition-all duration-300 group-hover:text-foreground/80"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
