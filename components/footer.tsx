"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const linkGroups = [
  {
    label: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how" },
      { label: "Litepaper", href: "/litepaper.pdf", external: true },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Get started", href: "/waitlist" },
      { label: "X / Twitter", href: "https://x.com/xend_global", external: true },
    ],
  },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-border bg-surface relative overflow-hidden">
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none w-full text-center select-none">
        <h2
          className="font-semibold leading-none whitespace-nowrap text-[28vw] tracking-tighter"
          style={{ color: "rgba(37, 99, 235, 0.04)" }}
        >
          xend
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/xend-global-logo.png" alt="Xend" className="w-8 h-7" />
              <span className="font-semibold text-foreground tracking-tight text-lg">Xend</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Spend money as you would, but faster. A dollar account that lives on your phone.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-foreground mb-4">
                {group.label}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border"
        >
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Xend Global, Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built on Solana.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
