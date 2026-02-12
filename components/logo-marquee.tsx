"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const logos = [
  { name: "Ethereum", symbol: "ETH", logo: "/logo-eth.png" },
  { name: "Solana", symbol: "SOL", logo: "/logo-sol.png" },
  { name: "Sui", symbol: "SUI", logo: "/logo-sui.png" },
  { name: "Polygon", symbol: "MATIC", logo: "/logo-polygon.png" },
  { name: "Base", symbol: "BASE", logo: "/logo-base.png" },
  { name: "Optimism", symbol: "OP", logo: "/logo-op.png" },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Supported Chains</p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[180px] h-20 mx-6 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-foreground">
                <img
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  className="w-12 h-12 rounded-lg object-cover shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">{logo.name}</span>
                  <span className="text-xs text-muted-foreground">{logo.symbol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
