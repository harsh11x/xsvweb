"use client"

import { useReveal } from "@/hooks/use-reveal"
import Link from "next/link"

export function Footer() {
  const { ref, isVisible } = useReveal(0.3)

  const serviceLinks = [
    { name: "Website Building", path: "/website-building" },
    { name: "Social Media", path: "/social-media" },
    { name: "Branding", path: "/branding" },
    { name: "App Development", path: "/app-development" },
  ]

  const companyLinks = [
    { name: "Featured Work", path: "/featured-work" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Work", path: "/our-work" },
    { name: "Blog", path: "/blog" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Cookies", path: "/cookies" },
    { name: "Contact", path: "/#contact" },
  ]

  return (
    <footer
      ref={ref}
      className="relative w-full border-t border-foreground/10 bg-background/50 px-6 py-16 backdrop-blur-sm md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <Link href="/" className="group mb-6 flex items-center gap-2 transition-transform hover:scale-105">
              <span className="font-sans text-sm font-semibold tracking-tight text-foreground">XSV Outdoor Media</span>
            </Link>
            <p className="text-sm leading-relaxed text-foreground/70">
              Transforming outdoor media into digital excellence through innovative solutions and strategic thinking.
            </p>
          </div>

          {/* Services */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-tight text-foreground">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="group text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {item.name}
                    <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-tight text-foreground">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="group text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {item.name}
                    <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-tight text-foreground">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="group text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {item.name}
                    <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-tight text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:xsvoutdoor.media@gmail.com"
                  className="group text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  xsvoutdoor.media@gmail.com
                  <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <Link href="/#contact" className="group text-sm text-foreground/70 transition-colors hover:text-foreground">
                  Get Support
                  <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-foreground/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-foreground/60">© 2025 XSV Outdoor Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://x.com/xsvoutdoormedia"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-xs font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/xsvoutdoormedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-xs font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
