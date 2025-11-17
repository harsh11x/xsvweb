"use client"

import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { MobileMenu } from "@/components/mobile-menu"
import { Footer } from "@/components/footer"
import { useRef, useEffect, useState, ReactNode } from "react"
import Link from "next/link"

interface PageLayoutProps {
  children: ReactNode
  title?: string
}

export function PageLayout({ children, title }: PageLayoutProps) {
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
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform active:scale-95"
        >
          <span className="font-sans text-xs font-semibold tracking-tight text-foreground sm:text-sm md:text-base">
            XSV Outdoor Media
          </span>
        </Link>

        <div className="hidden items-center gap-4 md:flex lg:gap-8">
          {["Home", "Featured", "Work", "Services", "Pricing", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
              className="group relative font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <MagneticButton
              variant="secondary"
              onClick={() => {
                if (window.location.pathname === "/") {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = "/#contact"
                }
              }}
            >
              Get Started
            </MagneticButton>
          </div>
          <MobileMenu />
        </div>
      </nav>

      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {title && (
          <section className="flex min-h-[50vh] w-full flex-col justify-center px-4 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16 md:px-12 md:pt-32 md:pb-24 md:min-h-[60vh]">
            <div className="mx-auto w-full max-w-4xl">
              <h1 className="mb-4 animate-in fade-in slide-in-from-bottom-8 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground duration-1000 sm:text-4xl sm:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
                {title}
              </h1>
            </div>
          </section>
        )}
        {children}
        <Footer />
      </div>
    </main>
  )
}

