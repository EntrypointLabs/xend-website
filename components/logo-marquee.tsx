"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "Seconds", label: "Settlement time" },
  { value: "Cents", label: "Cost per transfer" },
  { value: "24/7", label: "Always on" },
  { value: "USD", label: "Denominated" },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 border-y border-border bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-[0.18em] font-semibold">
            A dollar account, without the bank
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 text-center"
            >
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span>Built on</span>
          <img src="/logo-sol.png" alt="Solana" className="h-5 w-5 rounded" />
          <span className="font-medium text-foreground">Solana</span>
        </motion.div>
      </div>
    </section>
  )
}
