"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"

export default function PrivacyPolicyPage() {
  const { ref, isVisible } = useReveal(0.2)

  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, company name, and project details.",
        "We automatically collect certain information when you visit our website, including your IP address, browser type, device information, and usage patterns through cookies and similar tracking technologies.",
        "We may also collect information from third-party sources, such as social media platforms, when you interact with our content or services.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and respond to your inquiries and requests.",
        "To send you marketing communications, newsletters, and updates about our services (you can opt out at any time).",
        "To analyze website usage and trends to improve user experience and optimize our services.",
        "To comply with legal obligations and protect our rights and interests.",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.",
        "We may disclose your information if required by law or to protect our rights, property, or safety, or that of our clients or others.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "You have the right to access, update, or delete your personal information at any time.",
        "You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails.",
        "You may request a copy of your personal data or request that we restrict or object to certain processing activities.",
      ],
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies and similar tracking technologies to collect and store information about your preferences and activity on our website.",
        "You can control cookies through your browser settings, though this may affect website functionality.",
        "For more information, please see our Cookies Policy.",
      ],
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date.",
        "We encourage you to review this policy periodically to stay informed about how we protect your information.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
        "Email: xsvoutdoor.media@gmail.com",
      ],
    },
  ]

  return (
    <PageLayout title="Privacy Policy">
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
              At XSV Outdoor Media, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              By using our website, you consent to the data practices described in this policy. If you do not agree with the practices described, please do not use our services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground md:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, j) => (
                    <p key={j} className="text-base leading-relaxed text-foreground/80 md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

