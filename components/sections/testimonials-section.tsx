"use client"

import { useReveal } from "@/hooks/use-reveal"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const { ref, isVisible } = useReveal(0.2)

  const testimonials = [
    {
      name: "Dr. Anil Krishnamurthy",
      role: "Head of AI Research",
      company: "Remap Studios",
      content: "XSV didn't just build us a platform — they engineered a competitive advantage. The machine unlearning system they delivered cut our inference costs by 40% while maintaining accuracy above 99%. Their technical depth in ML infrastructure is rare and exactly what we needed.",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      role: "CTO",
      company: "Zephyrn",
      content: "Building a zero-knowledge communications platform demands absolute precision in security architecture. XSV understood the stakes from day one and delivered an encryption-first product that our enterprise clients trust with their most sensitive data. Exceptional engineering.",
      rating: 5,
    },
    {
      name: "Dr. Priya Sharma",
      role: "Director",
      company: "PulseCal Health",
      content: "Our healthcare platform needed to unify scheduling, telemedicine, and patient records while remaining intuitive for every stakeholder. XSV delivered a HIPAA-compliant system that 500+ providers now rely on daily. Patient satisfaction scores jumped 40% within months.",
      rating: 5,
    },
    {
      name: "Kavita Suresh",
      role: "Founder",
      company: "Cultural Hatti",
      content: "We needed an e-commerce platform that honoured 5,000 years of heritage while delivering a world-class shopping experience. XSV nailed both. The storytelling, the curation, the checkout flow — every detail reflects the craftsmanship of our artisans. Sales grew 3x in the first quarter.",
      rating: 5,
    },
    {
      name: "Ramesh Gupta",
      role: "Operations Director",
      company: "UniTap Campus Solutions",
      content: "Managing transactions for thousands of students used to be an operational nightmare. The advanced RFID cashless ecosystem XSV deployed is flawlessly secure and has given our administration unprecedented, real-time visibility into campus commerce. It’s an absolute game-changer.",
      rating: 5,
    },
    {
      name: "Amrit Kaur",
      role: "Co-Founder",
      company: "Punjab Heritage",
      content: "We entrusted XSV to bring the soulful art of our Punjabi master artisans to a global luxury market. The result was a stunning e-commerce boutique that perfectly balances high fashion aesthetics with a robust, frictionless checkout architecture. Truly top-tier execution.",
      rating: 5,
    },
    {
      name: "Siddharth Menon",
      role: "Chief Strategy Officer",
      company: "Walk In Square",
      content: "The digital infrastructure XSV developed for our retail properties completely elevated our tenant management and visitor analytics. It is sleek, powerful, and built to scale effortlessly. They didn't just build software; they delivered a masterclass in property technology.",
      rating: 5,
    },
    {
      name: "Ananya Deshmukh",
      role: "Head of Product",
      company: "Stellara FinServe",
      content: "As a rapidly growing fintech, we needed our core application to be bulletproof. The dual-platform mobile solution built by XSV exceeded our wildest expectations. Smooth, incredibly fast, and impenetrable. They operate at a standard of engineering excellence rarely seen in the industry.",
      rating: 5,
    },
  ]

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-4 py-20 md:px-4 md:py-24 lg:px-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Client Perspectives
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Trusted by industry leaders who demand excellence
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              style={{
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="relative h-full rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-500 group-hover:border-foreground/30 group-hover:bg-card/40 md:p-8">
                {/* Quote icon */}
                <div className="mb-4 inline-flex rounded-lg bg-foreground/5 p-3 transition-all duration-300 group-hover:bg-foreground/10 group-hover:scale-110">
                  <Quote className="h-5 w-5 text-accent" />
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-accent text-accent transition-transform duration-300 group-hover:scale-110"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="mb-6 text-sm leading-relaxed text-foreground/80 transition-colors duration-300 group-hover:text-foreground/90 md:text-base">
                  {testimonial.content}
                </p>

                {/* Author */}
                <div className="border-t border-foreground/10 pt-4">
                  <p className="font-sans text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-xs text-foreground/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
