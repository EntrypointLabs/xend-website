"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const avatars = [
  "/professional-headshot-1.png",
  "/professional-headshot-2.png",
  "/professional-headshot-3.png",
  "/professional-headshot-4.png",
  "/professional-headshot-5.png",
]

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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent pulse-glow" />
          <span className="text-sm text-muted-foreground">Now in Public Beta</span>
        </motion.div>

        {/* Headline with text mask animation */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6"
          style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
        >
          <span className="block overflow-hidden">
            <motion.span className="block font-manrope" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
              {"Click. Send. SOL."}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-muted-foreground"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Payments, simplified socially.
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A powerful browser companion that turns every X profile into a payment destination. Send USDC and SOL without ever leaving your timeline.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            variant="default"
            size="lg"
            className="shimmer-btn bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-primary/10 flex items-center gap-2"
            onClick={() => router.push("/waitlist")}
          >
            Install app
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium border-border text-foreground hover:bg-card hover:text-primary hover:border-secondary bg-transparent"
          >
            View Demo
          </Button>
        </motion.div>

        {/* Social Proof */}

      </div>
    </section>
  )
}
