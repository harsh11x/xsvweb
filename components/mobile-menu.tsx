"use client"

import { useState, useEffect } from "react"
import { X, Menu } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

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
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:bg-foreground/25 hover:scale-110 md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-foreground" />
        ) : (
          <Menu className="h-5 w-5 text-foreground" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background/95 backdrop-blur-xl shadow-2xl md:hidden">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-6">
                <span className="font-sans text-sm font-semibold tracking-tight text-foreground">
                  XSV Outdoor Media
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/10 transition-all duration-300 hover:bg-foreground/20"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition-all duration-300 hover:bg-foreground/10 hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer CTA */}
              <div className="border-t border-foreground/10 px-6 py-6">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    if (window.location.pathname === "/") {
                      setTimeout(() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      }, 100)
                    } else {
                      window.location.href = "/#contact"
                    }
                  }}
                  className="w-full rounded-full bg-foreground/95 px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground active:scale-[0.98]"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

