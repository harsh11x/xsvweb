"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function WorkSection() {
  return (
    <section className="flex min-h-screen w-full flex-col justify-center px-4 py-20 md:px-4 md:py-24 lg:px-6">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Featured
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Recent explorations</p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {[
            {
              number: "01",
              title: "Android App Development",
              category: "Native Excellence",
              year: "2024",
              slug: "android-app-development",
            },
            {
              number: "02",
              title: "iOS App Development",
              category: "Apple Excellence",
              year: "2024",
              slug: "ios-app-development",
            },
            {
              number: "03",
              title: "Website Development",
              category: "Digital Excellence",
              year: "2024",
              slug: "website-development",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={`/why-we-are-different/${project.slug}`}
                className="group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 hover:bg-foreground/5 md:py-8"
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-mono text-sm text-foreground/30 transition-all duration-300 group-hover:text-accent group-hover:scale-110 md:text-base">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-all duration-300 group-hover:translate-x-2 group-hover:text-foreground md:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-foreground/50 transition-colors duration-300 group-hover:text-foreground/70 md:text-sm">
                      {project.category}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-foreground/30 transition-all duration-300 group-hover:text-foreground/50 md:text-sm">
                  {project.year}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
