"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Chrome, MessageCircle, X } from "lucide-react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-border bg-background relative overflow-hidden rounded-t-[40px]">
      {/* Large background text - responsive sizing */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden w-full text-center">
        <h2
          className="font-bold leading-none whitespace-nowrap text-6xl sm:text-8xl lg:text-[15rem] xl:text-[250px]"
          style={{
            color: "rgba(255, 255, 255, 0.04)",
            fontFamily: "var(--font-cal-sans)",
          }}
        >
          Xend Global
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-16"
        >
          {/* Social Links - Vertical Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300 group"
              title="Join Discord"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300 group"
              title="Follow on X"
            >
              <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-border text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-300 group"
              title="Get on Chrome Store"
            >
              <Chrome className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-muted-foreground text-center"
          >
            &copy; {new Date().getFullYear()} Xend Global, Inc. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
