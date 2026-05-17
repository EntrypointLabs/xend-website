"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}

export function Hero() {
  const router = useRouter()
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_30%,#000_30%,transparent_80%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary pulse-glow" />
          <span className="text-xs font-medium text-muted-foreground tracking-wide">Private beta — joining is by invite</span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[1.05]">
          <span className="block overflow-hidden">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
              Spend money as you would,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-primary"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              but faster.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Checking account for the internet, built for everyday life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
        >
          <Button
            size="lg"
            className="shimmer-btn bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-12 text-base font-medium shadow-md shadow-primary/20 flex items-center gap-2"
            onClick={() => router.push("/waitlist")}
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Button>
          <a
            href="/litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-7 h-12 rounded-full text-base font-medium border border-border bg-white text-foreground hover:border-primary/30 hover:text-primary transition-colors"
          >
            Read the litepaper
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative mx-auto max-w-md"
        >
          <div className="absolute -inset-8 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-[3rem] blur-3xl" />
          <div className="relative">
            <img
              src="/app-showcase-1-v2.png"
              alt="Xend mobile app showing dollar balance and recent activity"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
