"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-primary mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            Experience the Power
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our intuitive interface designed for seamless crypto transactions and secure wallet management.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-row items-center justify-center gap-8"
        >
          {[
            { image: "/app-showcase-1-v2.png", label: "Wallet Dashboard" },
            { image: "/app-showcase-2.png", label: "Deposit & Transfer" },
            { image: "/app-showcase-3.png", label: "Security & Recovery" },
          ].map((showcase, index) => (
            <motion.div
              key={showcase.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              {/* Subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Image container with shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 group-hover:shadow-primary/15 transition-shadow duration-300 bg-card border border-border">
                <img
                  src={showcase.image || "/placeholder.svg"}
                  alt={showcase.label}
                  className="w-full h-auto max-w-sm object-cover"
                />
              </div>

              {/* Label */}
              <p className="text-center mt-4 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {showcase.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
