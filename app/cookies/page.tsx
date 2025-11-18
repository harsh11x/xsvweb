"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"

export default function CookiesPage() {
  const { ref, isVisible } = useReveal(0.2)

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
      examples: ["Session management", "Security features", "Load balancing"],
      necessary: true,
    },
    {
      name: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.",
      examples: ["Page views", "User behavior", "Traffic sources"],
      necessary: false,
    },
    {
      name: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.",
      examples: ["Language preferences", "User preferences", "Custom settings"],
      necessary: false,
    },
    {
      name: "Marketing Cookies",
      description: "These cookies are used to deliver advertisements and track campaign performance. They may be set by our advertising partners to build a profile of your interests.",
      examples: ["Ad targeting", "Campaign tracking", "Conversion measurement"],
      necessary: false,
    },
  ]

  return (
    <PageLayout title="Cookie Policy">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-4 text-sm text-foreground/60">Last Updated: January 2025</p>
            <p className="mb-6 text-base leading-relaxed text-foreground/90 md:text-lg">
              This Cookie Policy explains how XSV Outdoor Media uses cookies and similar tracking technologies on our website. It describes what these technologies are, why we use them, and your choices regarding their use.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              By continuing to use our website, you consent to our use of cookies in accordance with this policy.
            </p>
          </div>

          {/* What are Cookies */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground md:text-3xl">
              What Are Cookies?
            </h2>
            <p className="mb-3 text-base leading-relaxed text-foreground/80 md:text-lg">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              Cookies can be "persistent" (remain on your device until deleted or expired) or "session" (deleted when you close your browser). We use both types to provide you with the best possible experience on our website.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="mb-12">
            <h2 className="mb-8 font-sans text-2xl font-semibold text-foreground md:text-3xl">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              {cookieTypes.map((cookie, i) => (
                <div
                  key={i}
                  className={`rounded-xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-700 md:p-8 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="font-sans text-xl font-semibold text-foreground md:text-2xl">
                      {cookie.name}
                    </h3>
                    {cookie.necessary && (
                      <span className="rounded-full bg-accent/20 px-2 py-1 text-xs font-medium text-accent">
                        Necessary
                      </span>
                    )}
                  </div>
                  <p className="mb-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                    {cookie.description}
                  </p>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground/70">Examples:</p>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Managing Cookies */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground md:text-3xl">
              Managing Your Cookie Preferences
            </h2>
            <p className="mb-3 text-base leading-relaxed text-foreground/80 md:text-lg">
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
            </p>
            <p className="mb-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              However, please note that disabling cookies may affect the functionality of our website and limit your ability to use certain features.
            </p>
            <div className="rounded-lg border border-foreground/10 bg-card/10 p-4">
              <p className="mb-2 text-sm font-semibold text-foreground">Browser Settings:</p>
              <ul className="space-y-1 text-sm text-foreground/70">
                <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                <li>• Firefox: Options → Privacy & Security → Cookies</li>
                <li>• Safari: Preferences → Privacy → Cookies</li>
                <li>• Edge: Settings → Privacy → Cookies</li>
              </ul>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground md:text-3xl">
              Third-Party Cookies
            </h2>
            <p className="mb-3 text-base leading-relaxed text-foreground/80 md:text-lg">
              Some cookies on our website are set by third-party services, such as analytics providers or advertising networks. These third parties may use cookies to collect information about your online activities across different websites.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              We do not control these third-party cookies. Please refer to the privacy policies of these third parties for more information about their cookie practices.
            </p>
          </div>

          {/* Updates */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground md:text-3xl">
              Updates to This Policy
            </h2>
            <p className="mb-3 text-base leading-relaxed text-foreground/80 md:text-lg">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              We encourage you to review this policy periodically to stay informed about our use of cookies.
            </p>
          </div>

          {/* Contact */}
          <div
            className={`mt-12 rounded-xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-700 md:p-8 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground md:text-3xl">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              If you have any questions about our use of cookies, please contact us at:{" "}
              <a
                href="mailto:xsvoutdoor.media@gmail.com"
                className="text-primary hover:underline"
              >
                xsvoutdoor.media@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

