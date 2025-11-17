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
      className="relative w-full border-t border-foreground/10 bg-background/50 px-4 py-12 backdrop-blur-sm sm:px-6 sm:py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-5">
          {/* Brand */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <Link href="/" className="group mb-4 flex items-center gap-2 transition-transform active:scale-95 sm:mb-6">
              <span className="font-sans text-xs font-semibold tracking-tight text-foreground sm:text-sm">XSV Outdoor Media</span>
            </Link>
            <p className="text-xs leading-relaxed text-foreground/70 sm:text-sm">
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
            <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-tight text-foreground sm:mb-4 sm:text-sm">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="group block min-h-[44px] text-xs text-foreground/70 transition-colors hover:text-foreground active:text-foreground sm:text-sm">
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
            <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-tight text-foreground sm:mb-4 sm:text-sm">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="group block min-h-[44px] text-xs text-foreground/70 transition-colors hover:text-foreground active:text-foreground sm:text-sm">
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
            <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-tight text-foreground sm:mb-4 sm:text-sm">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="group block min-h-[44px] text-xs text-foreground/70 transition-colors hover:text-foreground active:text-foreground sm:text-sm">
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
            <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-tight text-foreground sm:mb-4 sm:text-sm">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:xsvoutdoor.media@gmail.com"
                  className="group block min-h-[44px] text-xs text-foreground/70 transition-colors hover:text-foreground active:text-foreground break-all sm:text-sm"
                >
                  xsvoutdoor.media@gmail.com
                  <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <Link href="/#contact" className="group block min-h-[44px] text-xs text-foreground/70 transition-colors hover:text-foreground active:text-foreground sm:text-sm">
                  Get Support
                  <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-foreground/10 sm:my-8" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
          <p className="text-xs text-center text-foreground/60 sm:text-left">© 2025 XSV Outdoor Media. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="group min-h-[44px] text-xs font-medium text-foreground/60 transition-colors hover:text-foreground active:text-foreground"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
