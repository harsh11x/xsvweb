"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"

export default function TermsOfServicePage() {
  const { ref, isVisible } = useReveal(0.2)

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the XSV Outdoor Media website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.",
        "We reserve the right to modify these terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new terms.",
      ],
    },
    {
      title: "Use of Services",
      content: [
        "Our services are provided for lawful purposes only. You agree not to use our services in any way that violates applicable laws, regulations, or the rights of others.",
        "You may not attempt to gain unauthorized access to any portion of our website, other accounts, computer systems, or networks connected to our services.",
        "You are responsible for maintaining the confidentiality of any account information and passwords you may use to access our services.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content, features, and functionality of our website, including but not limited to text, graphics, logos, images, and software, are the property of XSV Outdoor Media or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content from our website without our express written permission.",
      ],
    },
    {
      title: "Service Availability",
      content: [
        "We strive to ensure our services are available 24/7, but we do not guarantee uninterrupted or error-free operation. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.",
        "We are not liable for any loss or damage resulting from the unavailability of our services or any technical issues that may occur.",
      ],
    },
    {
      title: "Client Projects and Deliverables",
      content: [
        "For client projects, specific terms and conditions will be outlined in individual service agreements or contracts.",
        "All deliverables remain the property of XSV Outdoor Media until full payment is received. Upon completion of payment, ownership of deliverables (excluding proprietary tools and methodologies) transfers to the client as specified in the project agreement.",
        "We retain the right to use completed projects in our portfolio and marketing materials unless otherwise agreed in writing.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, XSV Outdoor Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
        "Our total liability for any claims arising from or related to our services shall not exceed the amount you paid us in the twelve months preceding the claim.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify, defend, and hold harmless XSV Outdoor Media and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these terms.",
      ],
    },
    {
      title: "Termination",
      content: [
        "We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any breach of these terms or for any other reason we deem necessary.",
        "Upon termination, your right to use our services will cease immediately, and we may delete your account and any associated data.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.",
        "Any disputes arising from these terms or our services shall be resolved through appropriate legal channels.",
      ],
    },
    {
      title: "Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: xsvoutdoor.media@gmail.com",
      ],
    },
  ]

  return (
    <PageLayout title="Terms of Service">
      <section ref={ref} className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-4 text-sm text-foreground/60">Last Updated: January 2025</p>
            <p className="mb-6 text-base leading-relaxed text-foreground/90 md:text-lg">
              These Terms of Service govern your use of the XSV Outdoor Media website and services. Please read these terms carefully before using our services. By accessing or using our services, you agree to be bound by these terms.
            </p>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              If you do not agree with any part of these terms, you must not use our services.
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

