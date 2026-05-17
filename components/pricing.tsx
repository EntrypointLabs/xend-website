"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const showcases = [
  { image: "/app-showcase-1-v2.png", label: "Your Account", description: "Hold dollars. See your Balance. At a glance." },
  { image: "/app-showcase-2.png", label: "Send & Receive", description: "Pay anyone with a username. Settle in seconds." },
  { image: "/app-showcase-3.png", label: "Activity", description: "A clean record of every move you've made." },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how" className="py-28 px-4 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-primary mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Three screens. That&apos;s the whole product.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No charts, no markets, no surprises. Just dollars in your pocket and a way to move them.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-end"
        >
          {showcases.map((showcase, index) => (
            <motion.div
              key={showcase.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-6 bg-gradient-to-b from-primary/15 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-xl shadow-primary/[0.04] group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-1 transition-all duration-500">
                  <img
                    src={showcase.image || "/placeholder.svg"}
                    alt={showcase.label}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-6 max-w-xs">
                <h3 className="text-base font-semibold text-foreground tracking-tight">
                  {showcase.label}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {showcase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
