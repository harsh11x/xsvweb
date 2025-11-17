"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Globe, Code, Smartphone, Zap, Search, Shield, CheckCircle2, ArrowRight } from "lucide-react"

export default function WebsiteBuildingPage() {
  const { ref, isVisible } = useReveal(0.2)

  const features = [
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Your website will look stunning and function flawlessly across all devices—desktops, tablets, and mobile phones. We ensure every pixel is optimized for the best user experience.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Speed matters. Our websites load in under 2 seconds, keeping visitors engaged and improving your search engine rankings. We optimize every asset and implement cutting-edge caching strategies.",
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built with search engine optimization in mind from day one. We implement semantic HTML, meta tags, structured data, and ensure your content is discoverable by Google and other search engines.",
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "We use the latest technologies including Next.js, React, and TypeScript to build scalable, maintainable websites that grow with your business. Clean code that's easy to update and extend.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your website's security is our priority. We implement SSL certificates, regular security updates, and follow best practices to protect your data and your customers' information.",
    },
    {
      icon: Smartphone,
      title: "CMS Integration",
      description: "Manage your content effortlessly with intuitive content management systems. Update text, images, and pages without touching code. We set up user-friendly admin panels tailored to your needs.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business, goals, target audience, and competitive landscape. This foundation ensures your website serves your strategic objectives.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and high-fidelity mockups that align with your brand. We iterate until the design perfectly captures your vision and user needs.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Our developers bring the design to life with clean, performant code. We test across devices and browsers to ensure a flawless experience for every visitor.",
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "We handle deployment, domain setup, and hosting configuration. Post-launch, we monitor performance and make optimizations to ensure your site continues to excel.",
    },
  ]

  return (
    <PageLayout title="Website Building">
      <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Transform your online presence with custom websites that combine stunning design, exceptional performance, and strategic functionality. We don't just build websites—we create digital experiences that drive results and elevate your brand in the competitive digital landscape.
            </p>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              From sleek portfolios to complex e-commerce platforms, our websites are engineered to convert visitors into customers while reflecting your unique brand identity. Every line of code is written with purpose, every design decision made with your business goals in mind.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Start Your Website Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>

          {/* Features */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              What We Deliver
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => {
                const IconComponent = feature.icon
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
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-3 font-sans text-xl font-semibold text-foreground md:text-2xl">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                        {feature.description}
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
              Our Process
            </h2>
            <div className="space-y-12">
              {process.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-6 transition-all duration-700 md:flex-row md:gap-12 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + i * 150}ms` }}
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
            style={{ transitionDelay: "1000ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Ready to Build Your Website?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's discuss how we can create a website that drives results for your business.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Get Started Today
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

