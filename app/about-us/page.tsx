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
      title: "Results-Driven",
      description: "We measure success by the impact we create for our clients. Every project is approached with clear objectives and a focus on delivering measurable results that drive business growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay at the forefront of technology and design trends, constantly exploring new tools and techniques to deliver cutting-edge solutions that give our clients a competitive advantage.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We believe in building long-term relationships, not just completing projects. Your success is our success, and we're committed to being a trusted partner in your digital journey.",
    },
    {
      icon: Award,
      title: "Excellence in Execution",
      description: "Quality is never compromised. From the initial concept to final delivery, we maintain the highest standards in design, development, and client service.",
    },
  ]

  const stats = [
    { value: "500+", label: "Projects Delivered", sublabel: "Successfully completed" },
    { value: "5", label: "Years of Excellence", sublabel: "In digital marketing" },
    { value: "100+", label: "Happy Clients", sublabel: "Across industries" },
    { value: "98%", label: "Client Satisfaction", sublabel: "Rate our services highly" },
  ]

  return (
    <PageLayout title="About Us">
      <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              XSV Outdoor Media is a full-service digital marketing agency specializing in web development, mobile app building, social media marketing, and comprehensive branding solutions. We transform businesses through innovative digital experiences that drive growth and build lasting customer relationships.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Founded with a vision to bridge the gap between traditional outdoor media and modern digital excellence, we've grown into a trusted partner for businesses seeking to establish or enhance their online presence. Our team combines creative vision with technical expertise to deliver solutions that not only look great but perform exceptionally.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`rounded-xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 text-center transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
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
              Our Values
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value, i) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={i}
                    className={`group transition-all duration-700 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
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
              className={`rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 md:p-12 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              } transition-all duration-700`}
              style={{ transitionDelay: "1000ms" }}
            >
              <h2 className="mb-6 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
                Our Mission
              </h2>
              <p className="mb-4 max-w-3xl text-base leading-relaxed text-foreground/90 md:text-lg">
                To empower businesses of all sizes with world-class digital solutions that drive growth, enhance brand presence, and create meaningful connections with their audiences. We believe that exceptional digital experiences are the foundation of modern business success.
              </p>
              <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
                Whether you're a startup launching your first website or an established company looking to modernize your digital presence, we're here to help you achieve your goals through innovative design, strategic thinking, and flawless execution.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } transition-all duration-700`}
            style={{ transitionDelay: "1200ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Let's Work Together
            </h2>
            <p className="mb-8 text-foreground/80">
              Ready to transform your digital presence? Get in touch and let's discuss your project.
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

