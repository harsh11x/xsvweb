"use client"

import { PageLayout } from "@/components/page-layout"
import { useReveal } from "@/hooks/use-reveal"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const { ref, isVisible } = useReveal(0.2)

  const posts = [
    {
      title: "The Future of E-commerce: Trends Shaping Online Retail in 2025",
      excerpt: "Explore the latest trends in e-commerce, from AI-powered personalization to sustainable shopping experiences. Discover how businesses are adapting to meet evolving consumer expectations.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "E-commerce",
    },
    {
      title: "Building Secure Digital Platforms: Best Practices for Data Protection",
      excerpt: "Learn about the essential security measures every digital platform should implement. From encryption to compliance, we break down what it takes to protect user data in today's threat landscape.",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "Security",
    },
    {
      title: "Social Media Marketing Strategies That Drive Real Results",
      excerpt: "Cut through the noise with proven social media strategies that actually work. We share insights on content creation, community building, and campaign optimization based on real client successes.",
      date: "December 20, 2024",
      readTime: "6 min read",
      category: "Marketing",
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "A comprehensive guide to choosing the right approach for your mobile app project. We compare native and cross-platform development, helping you make informed decisions for your business.",
      date: "December 12, 2024",
      readTime: "8 min read",
      category: "Development",
    },
    {
      title: "Brand Identity Design: Creating Memorable Visual Experiences",
      excerpt: "Discover how effective brand identity design can transform your business. We explore the elements that make brands memorable and share our process for creating cohesive visual identities.",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Design",
    },
    {
      title: "Website Performance Optimization: Speed Matters",
      excerpt: "Learn why website speed is crucial for user experience and SEO. We share practical optimization techniques that can dramatically improve your site's performance and conversion rates.",
      date: "November 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
    },
  ]

  return (
    <PageLayout title="Blog">
      <section ref={ref} className="px-4 py-16 md:px-4 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/90 md:text-xl">
              Insights, tips, and thought leadership on digital marketing, web development, design, and technology. Stay informed about the latest trends and best practices in the digital world.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Our blog covers everything from technical deep-dives to strategic marketing advice, helping you stay ahead in an ever-evolving digital landscape.
            </p>
          </div>

          {/* Posts */}
          <div className="space-y-8">
            {posts.map((post, i) => (
              <article
                key={i}
                className={`group rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-6 transition-all duration-500 hover:border-foreground/30 hover:bg-card/40 md:p-8 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                </div>
                <h2 className="mb-3 font-sans text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground/90 md:text-3xl">
                  {post.title}
                </h2>
                <p className="mb-4 text-base leading-relaxed text-foreground/80 md:text-lg">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 font-sans font-medium text-foreground transition-all duration-300 group-hover:gap-3">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div
            className={`mt-16 rounded-2xl border border-foreground/10 bg-card/20 backdrop-blur-sm p-8 text-center md:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            } transition-all duration-700`}
            style={{ transitionDelay: `${700 + posts.length * 100}ms` }}
          >
            <h2 className="mb-4 font-sans text-2xl font-light tracking-tight text-foreground md:text-3xl">
              More Content Coming Soon
            </h2>
            <p className="mb-8 text-foreground/80">
              We're constantly working on new articles and insights. Check back regularly for the latest updates, or subscribe to our newsletter to stay informed.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

