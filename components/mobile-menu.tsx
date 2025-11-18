"use client"

import { useState } from "react"
import { X, Menu } from "lucide-react"
import Link from "next/link"
import { MagneticButton } from "./magnetic-button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Featured", href: "/#featured" },
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/10 backdrop-blur-sm transition-all duration-300 hover:bg-foreground/20"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-foreground/10 shadow-2xl md:hidden animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-foreground/10">
                <span className="font-sans text-base font-semibold tracking-tight text-foreground">
                  XSV Outdoor Media
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-foreground/10 transition-all duration-300 hover:bg-foreground/20"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-foreground/80 transition-all duration-300 hover:bg-foreground/10 hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-foreground/10">
                <MagneticButton
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false)
                    setTimeout(() => {
                      if (window.location.pathname === "/") {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      } else {
                        window.location.href = "/#contact"
                      }
                    }, 100)
                  }}
                >
                  Get Started
                </MagneticButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

