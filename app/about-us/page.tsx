"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export default function AboutUsPage() {
  const { ref, isVisible } = useReveal(0.2)

  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "We don't approximate — we engineer. Every line of code, every design decision, every architectural choice is made with surgical precision to deliver products that perform flawlessly under real-world conditions.",
    },
    {
      icon: Lightbulb,
      title: "Relentless Innovation",
      description: "We operate at the bleeding edge of technology — from AI model optimization to zero-knowledge encryption. Our clients benefit from capabilities that most agencies can't even conceptualize, let alone execute.",
    },
    {
      icon: Users,
      title: "Strategic Partnership",
      description: "We don't take orders — we architect advantages. Every engagement is a strategic collaboration where we challenge assumptions, push boundaries, and deliver outcomes that fundamentally shift our clients' competitive position.",
    },
    {
      icon: Award,
      title: "Uncompromising Standards",
      description: "Quality is not negotiable. From enterprise-grade security to luxury-grade aesthetics, we maintain standards that others consider excessive — because our clients deserve products that set benchmarks, not follow them.",
    },
  ]

  const stats = [
    { value: "500+", label: "Projects Delivered", sublabel: "To exacting standards" },
    { value: "7", label: "Industries Served", sublabel: "AI, Health, Fintech & more" },
    { value: "98%", label: "Client Retention", sublabel: "They come back because we deliver" },
    { value: "100%", label: "Commitment", sublabel: "To excellence, always" },
  ]

  return (
    <PageLayout title="About Us">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              We are XSV Outdoor Media — a premium digital product studio specialising in enterprise-grade web platforms,
              native mobile applications, encrypted communications systems, AI-powered solutions, and luxury e-commerce
              experiences. We don't chase trends; we engineer the future.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Founded with a singular vision — to bridge the gap between visionary ideas and exceptional digital execution —
              we've grown into a trusted partner for businesses that refuse to settle. Our portfolio spans deep-tech AI,
              healthcare SaaS, campus fintech, encrypted security, and heritage fashion e-commerce. Every product we ship
              reflects our uncompromising commitment to precision, innovation, and measurable outcomes.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`rounded-xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="mb-2 text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mb-1 font-sans text-base font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Our Standards
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value, i) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={i}
                    className={`group transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                      }`}
                    style={{ transitionDelay: `${600 + i * 100}ms` }}
                  >
                    <div className="relative rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-500 group-hover:border-foreground/30 group-hover:bg-card/40 md:p-8">
                      <div className="mb-4 inline-flex rounded-lg bg-foreground/5 p-3 transition-all duration-300 group-hover:bg-foreground/10 group-hover:scale-110">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-3 font-sans text-xl font-semibold text-foreground md:text-2xl">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mission */}
          <div className="mb-24">
            <div
              className={`rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 md:p-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                } transition-all duration-700`}
              style={{ transitionDelay: "1000ms" }}
            >
              <h2 className="mb-6 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
                Our Mission
              </h2>
              <p className="mb-4 max-w-3xl text-base leading-relaxed text-foreground/90 md:text-lg">
                To engineer digital products that don't just meet expectations — they obliterate them. We exist to give
                ambitious businesses the technical firepower and creative firepower they need to dominate their markets,
                delight their users, and build something genuinely extraordinary.
              </p>
              <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
                Whether you're a deep-tech startup building the next AI breakthrough, a healthcare provider transforming
                patient care, or a heritage brand bringing centuries of craftsmanship to a global audience — we bring
                the precision, the vision, and the relentless execution that turns ambitious ideas into market-leading products.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              } transition-all duration-700`}
            style={{ transitionDelay: "1200ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Ready to Build Something Exceptional?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let&apos;s architect a digital product that sets a new standard in your industry.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Start a Conversation
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
