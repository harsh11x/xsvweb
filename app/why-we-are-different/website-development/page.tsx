"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { Globe, CheckCircle2 } from "lucide-react"

export default function WebsiteDevelopmentPage() {
  const { ref, isVisible } = useReveal(0.2)

  const advantages = [
    "Lightning-fast websites loading in under 2 seconds, optimized for Core Web Vitals and SEO rankings",
    "Built with Next.js and React for unmatched performance, scalability, and developer experience",
    "Mobile-first responsive design that looks stunning and functions flawlessly on every device",
    "SEO-optimized from day one with semantic HTML, structured data, and technical excellence",
    "Custom solutions tailored to your business needs, not cookie-cutter templates—every site is unique",
    "Modern tech stack ensuring long-term maintainability and easy updates as your business grows",
    "Secure by default with SSL certificates, security best practices, and regular updates",
    "CMS integration allowing you to manage content effortlessly without technical knowledge",
    "Performance monitoring and optimization to ensure your site stays fast as it grows",
    "Comprehensive support and training to help you get the most out of your new website",
  ]

  return (
    <PageLayout title="Website Development">
      <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-lg bg-foreground/5 p-3">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-mono text-sm text-foreground/60">Digital Excellence</span>
            </div>
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Our website development approach creates digital experiences that not only look exceptional but also perform at the highest level, driving results for your business.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Every website we build is crafted with attention to detail, optimized for search engines, and designed to convert visitors into customers while reflecting your unique brand.
            </p>
          </div>

          {/* Advantages */}
          <div className="mb-12">
            <h2 className="mb-8 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Why Our Website Development Leads
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
              Ready to Build Your Website?
            </h3>
            <p className="mb-6 text-foreground/80">
              Let's create a website that drives traffic, engages visitors, and grows your business.
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

