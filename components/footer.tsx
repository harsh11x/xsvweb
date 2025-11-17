"use client"

import { useReveal } from "@/hooks/use-reveal"

export function Footer() {
  const { ref, isVisible } = useReveal(0.3)

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
            <button className="group mb-6 flex items-center gap-2 transition-transform hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-foreground/25">
                <span className="font-sans text-xl font-bold text-foreground">X</span>
              </div>
              <span className="font-sans text-sm font-semibold tracking-tight text-foreground">XSV Outdoor Media</span>
            </button>
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
              {["Website Building", "Social Media", "Branding", "App Development"].map((item) => (
                <li key={item}>
                  <a href="#" className="group text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {item}
                    <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                  </a>
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
              {["Featured Work", "About Us", "Our Work", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="group text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {item}
                    <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                  </a>
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
              {["Privacy Policy", "Terms of Service", "Cookies", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="group text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {item}
                    <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                  </a>
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
                  href="mailto:xsvoutdoormedia@gmail.com"
                  className="group text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  xsvoutdoormedia@gmail.com
                  <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#" className="group text-sm text-foreground/70 transition-colors hover:text-foreground">
                  Get Support
                  <span className="block h-px w-0 bg-foreground/70 transition-all duration-300 group-hover:w-full" />
                </a>
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
            {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="group text-xs font-medium text-foreground/60 transition-colors hover:text-foreground"
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
