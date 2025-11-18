"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Globe, CheckCircle2, ArrowRight } from "lucide-react"

export default function WebsiteDevelopmentPage() {
  const { ref, isVisible } = useReveal(0.2)

  const advantages = [
    "Lightning-fast websites loading in under 2 seconds, optimized for Core Web Vitals and SEO rankings",
    "Built with Next.js and React for unmatched performance, scalability, and developer experience",
    "Mobile-first responsive design that looks stunning and functions flawlessly on every device",
    "SEO-optimized from day one with semantic HTML, structured data, and technical excellence",
    "Custom solutions tailored to your business needs, not cookie-cutter templates—every site is unique",
  ]

  return (
    <PageLayout title="Website Development">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Our website development surpasses competitors through cutting-edge technology, exceptional performance optimization, and custom solutions that are specifically designed to drive your business results.
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="mb-8 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Why Our Websites Are Better
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
              Ready to Build Your Website?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's create a website that outperforms the competition and drives real results.
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

