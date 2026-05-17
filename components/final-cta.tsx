"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function FinalCTA() {
  const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight leading-[1.05]">
          A dollar account, in your pocket.
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Xend is launching soon. Join the waitlist and we&apos;ll let you in as soon as we open the doors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            className="shimmer-btn bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/20 flex items-center gap-2"
            onClick={() => router.push("/waitlist")}
          >
            Join the waitlist
            <ArrowRight className="w-5 h-5" />
          </Button>
          <a
            href="/litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-8 h-14 rounded-full text-base font-medium border border-border bg-white text-foreground hover:border-primary/30 hover:text-primary transition-colors"
          >
            Read the litepaper
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
