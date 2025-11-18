"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Palette, Eye, Layers, FileText, Sparkles, ArrowRight, Target } from "lucide-react"

export default function BrandingPage() {
  const { ref, isVisible } = useReveal(0.2)

  const services = [
    {
      icon: Eye,
      title: "Logo Design & Identity",
      description: "A logo is more than a symbol—it's the face of your brand. We create distinctive, memorable logos that capture your essence and resonate with your audience. From concept to final design, we ensure your logo works across all mediums and scales beautifully.",
    },
    {
      icon: Palette,
      title: "Visual Identity Systems",
      description: "Consistent visual language across all touchpoints. We develop comprehensive brand guidelines including color palettes, typography, imagery styles, and design patterns. Every element is carefully chosen to reinforce your brand's personality and values.",
    },
    {
      icon: Layers,
      title: "Brand Strategy",
      description: "Before we design, we strategize. We dive deep into your market, competitors, and target audience to develop a brand positioning that sets you apart. Our strategic foundation ensures every design decision serves your business objectives.",
    },
    {
      icon: FileText,
      title: "Brand Guidelines",
      description: "Comprehensive brand books that ensure consistency across all applications. We document everything from logo usage to voice and tone, giving your team the tools to maintain brand integrity as you grow. Clear, actionable guidelines that anyone can follow.",
    },
    {
      icon: Sparkles,
      title: "Brand Refresh & Rebranding",
      description: "Evolving your brand without losing what makes it special. We help established brands modernize their identity while preserving brand equity. Thoughtful updates that keep you relevant and competitive in changing markets.",
    },
    {
      icon: Target,
      title: "Packaging & Print Design",
      description: "Bring your brand to life in the physical world. We design packaging, business cards, brochures, and print materials that make a lasting impression. Every detail is considered to create cohesive brand experiences offline and online.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Brand Discovery",
      description: "We start with workshops and research to understand your business, values, goals, and market position. This deep understanding forms the foundation of your brand identity.",
    },
    {
      step: "02",
      title: "Strategy & Positioning",
      description: "We develop your brand strategy, defining your unique value proposition, target audience, and competitive differentiation. This strategic framework guides all design decisions.",
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Our designers create visual concepts that bring your brand strategy to life. We iterate and refine until we've captured the perfect expression of your brand identity.",
    },
    {
      step: "04",
      title: "Implementation & Guidelines",
      description: "We deliver comprehensive brand guidelines and assets, ensuring your team can consistently apply your new identity across all channels and touchpoints.",
    },
  ]

  return (
    <PageLayout title="Branding & Design">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Your brand is more than your logo—it's the complete experience your customers have with your business. We create cohesive, memorable brand identities that resonate with your audience, differentiate you from competitors, and build lasting emotional connections.
            </p>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              From startups establishing their first identity to established companies ready for a refresh, we craft brands that tell your story, reflect your values, and drive business results. Every color, font, and visual element is chosen with intention and purpose.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Build Your Brand Identity
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>

          {/* Services */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Our Branding Services
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
                        <IconComponent className="h-6 w-6 text-amber-500" />
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

          {/* Process */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Our Branding Process
            </h2>
            <div className="space-y-12">
              {process.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-6 transition-all duration-700 md:flex-row md:gap-12 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${700 + i * 150}ms` }}
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
            style={{ transitionDelay: "1300ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Ready to Build Your Brand?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's create a brand identity that captures your essence and drives your business forward.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Start Your Brand Journey
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

