"use client"

import { useReveal } from "@/hooks/use-reveal"
import { Check } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

export function PricingSection() {
  const { ref, isVisible } = useReveal(0.3)

  const packages = {
    website: [
      {
        name: "Starter Package",
        price: "₹39,999",
        originalPrice: "₹49,999",
        features: [
          "5-page responsive website",
          "Mobile-optimised design",
          "SEO-ready structure",
          "WhatsApp integration",
          "Contact form setup",
          "Domain & hosting configuration",
          "1-month post-launch support",
        ],
      },
      {
        name: "Professional Package",
        price: "₹65,000",
        originalPrice: "₹85,000",
        badge: "MOST POPULAR",
        features: [
          "10-page responsive website",
          "Blog/News section with CMS",
          "Advanced contact forms",
          "Appointment/Booking system",
          "Payment gateway integration",
          "Advanced SEO optimisation",
          "Social media integration",
          "Analytics dashboard setup",
          "3-month technical support",
        ],
      },
      {
        name: "E-Commerce Pro",
        price: "₹85,000",
        originalPrice: "₹1,20,000",
        features: [
          "Complete online store setup",
          "Unlimited products & categories",
          "Multiple payment gateways",
          "Inventory management system",
          "Customer account management",
          "Discount & coupon system",
          "Order tracking & notifications",
          "Shipping integration",
          "Sales analytics dashboard",
          "6-month priority support",
        ],
      },
    ],
    mobile: [
      {
        name: "Basic App Package",
        price: "₹65,000",
        features: [
          "Native Android application",
          "Up to 10 screens/features",
          "Basic backend integration",
          "Push notifications",
          "User authentication",
          "Play Store deployment",
          "2-month support",
        ],
      },
      {
        name: "Business App Package",
        price: "₹1,00,000",
        badge: "BEST VALUE",
        features: [
          "Android + iOS Development",
          "Up to 15 screens/features",
          "Advanced backend system",
          "Admin dashboard panel",
          "API development & integration",
          "Real-time data synchronisation",
          "Analytics integration",
          "Deployment on both stores",
          "4-month support",
        ],
      },
      {
        name: "E-Commerce App",
        price: "₹1,20,000",
        originalPrice: "₹1,50,000",
        features: [
          "Full E-Commerce Solution",
          "Android & iOS e-commerce apps",
          "Product catalogue management",
          "Shopping cart & wishlist",
          "Multiple payment gateways",
          "Order tracking system",
          "Customer loyalty programme",
          "Inventory synchronisation",
          "6-month priority support",
        ],
      },
    ],
    combo: [
      {
        name: "Biz Booster",
        price: "₹1,25,000",
        coreOffering: "Website + Android App",
        description: "The perfect starting point for businesses ready to establish a strong digital presence across web and mobile platforms.",
        features: [
          "Professional 10-page website",
          "Native Android application",
          "Unified backend system",
          "Shared user database",
          "Consistent branding across platforms",
          "SEO & ASO optimisation",
          "3-month support package",
        ],
      },
      {
        name: "Full Growth Suite",
        price: "₹1,75,000",
        badge: "BEST VALUE",
        coreOffering: "Website + Android + iOS",
        description: "Our most popular package delivers complete platform coverage, ensuring you reach your audience wherever they are with a cohesive, professional digital ecosystem.",
        features: [
          "Professional responsive website",
          "Android & iOS native apps",
          "Advanced backend architecture",
          "Real-time data synchronisation",
          "Comprehensive admin dashboard",
          "Cross-platform user accounts",
          "Analytics & reporting tools",
          "Priority deployment assistance",
          "6-month premium support",
        ],
      },
      {
        name: "E-Commerce Empire",
        price: "₹2,00,000–₹2,25,000",
        coreOffering: "Complete E-Commerce Solution",
        description: "The ultimate solution for serious online retailers ready to dominate their market with professional-grade e-commerce infrastructure.",
        features: [
          "Full e-commerce website",
          "Android & iOS shopping apps",
          "Advanced inventory management",
          "Multi-gateway payment system",
          "Order & logistics tracking",
          "Customer loyalty programme",
          "Marketing automation tools",
          "Sales analytics dashboard",
          "Vendor management system",
          "12-month enterprise support",
        ],
      },
    ],
  }

  return (
    <section
      ref={ref}
      className="flex min-h-screen w-full flex-col justify-center px-6 py-20 md:px-12 md:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Pricing Plans
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">
            / Transparent packages for every business size
          </p>
        </div>

        {/* Website Packages */}
        <div className="mb-20">
          <h3 className="mb-8 font-sans text-2xl font-light text-foreground">Website Development</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.website.map((pkg, i) => (
              <PricingCard key={i} package={pkg} index={i} isVisible={isVisible} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* Mobile App Packages */}
        <div className="mb-20">
          <h3 className="mb-8 font-sans text-2xl font-light text-foreground">Mobile App Development</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.mobile.map((pkg, i) => (
              <PricingCard key={i} package={pkg} index={i} isVisible={isVisible} delay={300 + i * 100} />
            ))}
          </div>
        </div>

        {/* All-in-One Packages */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="mb-4 font-sans text-2xl font-light text-foreground md:text-3xl">All-in-One Packages</h3>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Maximise your digital impact with our comprehensive combo packages. These bundled solutions offer exceptional value whilst ensuring seamless integration between your website and mobile applications, creating a unified brand experience across all platforms.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.combo.map((pkg, i) => (
              <ComboPricingCard key={i} package={pkg} index={i} isVisible={isVisible} delay={600 + i * 100} />
            ))}
          </div>
        </div>

        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="mb-6 text-foreground/80">Need a custom solution? Let's build something together.</p>
          <MagneticButton variant="primary" size="lg">
            Get a Quote
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  package: pkg,
  index,
  isVisible,
  delay,
}: {
  package: {
    name: string
    price: string
    originalPrice?: string
    badge?: string
    features: string[]
  }
  index: number
  isVisible: boolean
  delay: number
}) {
  return (
    <div
      className={`group transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-full rounded-xl border border-foreground/10 bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-foreground/30 hover:bg-card/80 hover:shadow-2xl hover:shadow-foreground/10 hover:-translate-y-2 md:p-8">
        {pkg.badge && (
          <div className="absolute top-6 right-6">
            <span className="inline-block rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground font-semibold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/50">
              {pkg.badge}
            </span>
          </div>
        )}

        <h4 className="mb-2 font-sans text-xl font-light text-foreground transition-all duration-300 group-hover:text-foreground">
          {pkg.name}
        </h4>

        <div className="mb-6 transition-all duration-300">
          <span className="text-3xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
            {pkg.price}
          </span>
          {pkg.originalPrice && (
            <span className="ml-2 text-sm text-foreground/50 line-through">{pkg.originalPrice}</span>
          )}
        </div>

        <ul className="mb-8 space-y-3">
          {pkg.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground/90"
              style={{
                transitionDelay: `${i * 30}ms`,
              }}
            >
              <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <MagneticButton
          variant="secondary"
          className="w-full"
          onClick={() => {
            const contactSection = document.getElementById("contact")
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" })
            } else {
              window.location.href = "/#contact"
            }
          }}
        >
          Choose Plan
        </MagneticButton>
      </div>
    </div>
  )
}

function ComboPricingCard({
  package: pkg,
  index,
  isVisible,
  delay,
}: {
  package: {
    name: string
    price: string
    badge?: string
    coreOffering: string
    description: string
    features: string[]
  }
  index: number
  isVisible: boolean
  delay: number
}) {
  return (
    <div
      className={`group transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-full rounded-xl border border-foreground/10 bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-foreground/30 hover:bg-card/80 hover:shadow-2xl hover:shadow-foreground/10 hover:-translate-y-2 md:p-8">
        {pkg.badge && (
          <div className="absolute top-6 right-6">
            <span className="inline-block rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground font-semibold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/50">
              {pkg.badge}
            </span>
          </div>
        )}

        <h4 className="mb-2 font-sans text-xl font-light text-foreground transition-all duration-300 group-hover:text-foreground md:text-2xl">
          {pkg.name}
        </h4>

        <div className="mb-4 transition-all duration-300">
          <span className="text-3xl font-light text-foreground group-hover:text-accent transition-colors duration-300 md:text-4xl">
            {pkg.price}
          </span>
        </div>

        <div className="mb-4 border-b border-foreground/20 pb-4">
          <p className="text-sm font-semibold text-foreground/90 md:text-base">{pkg.coreOffering}</p>
        </div>

        <ul className="mb-6 space-y-3">
          {pkg.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-foreground/80 transition-all duration-300 group-hover:text-foreground/90"
              style={{
                transitionDelay: `${i * 30}ms`,
              }}
            >
              <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mb-6 text-xs leading-relaxed text-foreground/70 md:text-sm">{pkg.description}</p>

        <MagneticButton
          variant="secondary"
          className="w-full"
          onClick={() => {
            const contactSection = document.getElementById("contact")
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" })
            } else {
              window.location.href = "/#contact"
            }
          }}
        >
          Choose Plan
        </MagneticButton>
      </div>
    </div>
  )
}
