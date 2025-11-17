"use client"

import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { WorkSection } from "@/components/sections/work-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { MagneticButton } from "@/components/magnetic-button"
import { MobileMenu } from "@/components/mobile-menu"
import { useRef, useEffect, useState } from "react"
import { FeaturedWorksSection } from "@/components/sections/featured-works-section"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <main className="relative w-full overflow-x-hidden bg-background">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#1275d8"
            colorB="#e19136"
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#0066ff"
            upColor="#0066ff"
            downColor="#d1d1d1"
            leftColor="#e19136"
            rightColor="#e19136"
            intensity={0.9}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-4 transition-all duration-1000 sm:px-6 sm:py-6 md:px-12 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 transition-transform active:scale-95"
        >
          <span className="font-sans text-xs font-semibold tracking-tight text-foreground sm:text-sm md:text-base">
            XSV Outdoor Media
          </span>
        </button>

        <div className="hidden items-center gap-4 md:flex lg:gap-8">
          {["Home", "Featured", "Work", "Services", "Pricing", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <MagneticButton
              variant="secondary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
            </MagneticButton>
          </div>
          <MobileMenu />
        </div>
      </nav>

      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Hero Section */}
        <section className="flex min-h-screen w-full flex-col justify-end px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 md:px-12 md:pb-24">
          <div className="mx-auto w-full max-w-3xl">
            <div className="mb-4 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-foreground/20 bg-foreground/15 px-3 py-1.5 backdrop-blur-md duration-700 sm:px-4">
              <p className="font-mono text-xs text-foreground/90">Outdoor Media Marketing</p>
            </div>
            <h1 className="mb-4 animate-in fade-in slide-in-from-bottom-8 font-sans text-4xl font-light leading-[1.1] tracking-tight text-foreground duration-1000 sm:text-5xl sm:mb-6 md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-balance">
                Amplify Your Brand
                <br />
                Across All Platforms
              </span>
            </h1>
            <p className="mb-6 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-base leading-relaxed text-foreground/90 duration-1000 delay-200 sm:mb-8 sm:text-lg md:text-xl">
              <span className="text-pretty">
                We craft exceptional digital experiences that transform businesses. From high-performance websites and mobile applications to strategic social media campaigns and compelling brand identities—we combine creative excellence with technical expertise to deliver solutions that drive measurable results and lasting impact.
              </span>
            </p>
            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-3 duration-1000 delay-300 sm:flex-row sm:items-center sm:gap-4">
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Your Project
              </MagneticButton>
              <MagneticButton
                size="lg"
                variant="secondary"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Services
              </MagneticButton>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500 sm:bottom-8">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <p className="font-mono text-xs text-foreground/80">Scroll to explore</p>
              <div className="flex items-center justify-center">
                <div className="h-5 w-1 animate-pulse rounded-full bg-foreground/80 sm:h-6" />
              </div>
            </div>
          </div>
        </section>

        <section id="featured">
          <FeaturedWorksSection />
        </section>

        <section id="work">
          <WorkSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="about">
          <AboutSection
            scrollToSection={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          />
        </section>
        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </div>
    </main>
  )
}
