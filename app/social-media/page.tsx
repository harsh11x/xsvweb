"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { Share2, TrendingUp, Users, BarChart3, Camera, MessageSquare, ArrowRight, Target } from "lucide-react"

export default function SocialMediaPage() {
  const { ref, isVisible } = useReveal(0.2)

  const services = [
    {
      icon: Share2,
      title: "Content Strategy & Creation",
      description: "We craft compelling content that resonates with your audience. From eye-catching visuals to engaging copy, every post is designed to drive engagement and build brand loyalty. Our content calendar ensures consistent, high-quality posts that tell your brand's story.",
    },
    {
      icon: TrendingUp,
      title: "Campaign Management",
      description: "Launch targeted campaigns that reach the right people at the right time. We manage paid advertising across Facebook, Instagram, LinkedIn, and Twitter, optimizing budgets for maximum ROI. Every campaign is tracked, analyzed, and refined for peak performance.",
    },
    {
      icon: Users,
      title: "Community Growth",
      description: "Build a thriving online community around your brand. We engage with your audience, respond to comments, foster discussions, and create a space where your customers feel valued. Growing authentic relationships that translate to long-term loyalty.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven decisions lead to better results. We provide comprehensive analytics reports showing what's working, what's not, and where opportunities lie. Track engagement, reach, conversions, and ROI with clear, actionable insights.",
    },
    {
      icon: Camera,
      title: "Visual Content Production",
      description: "Stunning visuals that stop the scroll. Our team creates professional photography, graphics, videos, and animations tailored to each platform's best practices. From Instagram Stories to LinkedIn carousels, we optimize content for maximum impact.",
    },
    {
      icon: Target,
      title: "Influencer Partnerships",
      description: "Connect with influencers who align with your brand values. We identify, vet, and manage partnerships that expand your reach authentically. Strategic collaborations that introduce your brand to new audiences while maintaining credibility.",
    },
  ]

  const platforms = [
    {
      name: "Instagram",
      description: "Visual storytelling and engagement through posts, Stories, Reels, and IGTV. Perfect for lifestyle, fashion, food, and creative brands.",
    },
    {
      name: "Facebook",
      description: "Community building and targeted advertising. Ideal for B2C businesses, events, and building long-term customer relationships.",
    },
    {
      name: "LinkedIn",
      description: "Professional networking and B2B marketing. Showcase expertise, share industry insights, and connect with decision-makers.",
    },
    {
      name: "Twitter/X",
      description: "Real-time engagement and thought leadership. Perfect for news, tech, and brands that want to join trending conversations.",
    },
    {
      name: "TikTok",
      description: "Viral content and Gen Z engagement. Creative short-form videos that can rapidly expand brand awareness and reach.",
    },
  ]

  return (
    <PageLayout title="Social Media Marketing">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Transform your social media presence into a powerful growth engine. We don't just post content—we build communities, drive engagement, and convert followers into customers through strategic social media marketing that delivers measurable results.
            </p>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              In today's digital landscape, social media is where your customers are. We help you meet them there with content that captivates, campaigns that convert, and strategies that scale. From content creation to community management, we handle every aspect of your social presence.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Elevate Your Social Presence
              <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>

          {/* Services */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Our Social Media Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={i}
                    className={`group transition-all duration-700 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                    style={{ transitionDelay: `${100 + i * 100}ms` }}
                  >
                    <div className="relative rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-500 group-hover:border-foreground/30 group-hover:bg-card/40 md:p-8">
                      <div className="mb-4 inline-flex rounded-lg bg-foreground/5 p-3 transition-all duration-300 group-hover:bg-foreground/10 group-hover:scale-110">
                        <IconComponent className="h-6 w-6 text-emerald-500" />
                      </div>
                      <h3 className="mb-3 font-sans text-xl font-semibold text-foreground md:text-2xl">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-24">
            <h2 className="mb-12 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Platforms We Master
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform, i) => (
                <div
                  key={i}
                  className={`rounded-xl border border-foreground/10 bg-card/10 backdrop-blur-sm p-6 transition-all duration-500 hover:border-foreground/20 hover:bg-card/20 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <h3 className="mb-2 font-sans text-xl font-semibold text-foreground">
                    {platform.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className={`rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } transition-all duration-700`}
            style={{ transitionDelay: "1200ms" }}
          >
            <h2 className="mb-4 font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Ready to Grow Your Social Presence?
            </h2>
            <p className="mb-8 text-foreground/80">
              Let's create a social media strategy that drives engagement and delivers results.
            </p>
            <MagneticButton
              size="lg"
              variant="primary"
              onClick={() => (window.location.href = "/#contact")}
            >
              Start Your Campaign
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

