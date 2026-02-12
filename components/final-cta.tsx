"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function FinalCTA() {
  const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          Ready to try it?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Install the extension and sign in with X. No SOL needed for gas, no seed phrases to save.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="shimmer-btn bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-8 h-14 text-base font-medium shadow-lg shadow-primary/20 flex items-center gap-2"
            onClick={() => router.push("/waitlist")}
          >
            Download Extension
            <ArrowRight className="w-5 h-5" />
          </Button>

        </div>


      </motion.div>
    </section>
  )
}
