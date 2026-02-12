"use client"

import { Command } from "@/components/ui/command"
import { Activity, BarChart3, Shield } from "lucide-react"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Coins, Zap, Bell, Wand2, Lock } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function SystemStatus() {
  const [dots, setDots] = useState([true, true, true, false, true])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev.map(() => Math.random() > 0.2))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      {dots.map((active, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${active ? "bg-accent" : "bg-secondary"}`}
          animate={active ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

function KeyboardCommand() {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPressed(true)
      setTimeout(() => setPressed(false), 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    null
  )
}

function AnimatedChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const points = [
    { x: 0, y: 60 },
    { x: 20, y: 45 },
    { x: 40, y: 55 },
    { x: 60, y: 30 },
    { x: 80, y: 40 },
    { x: 100, y: 15 },
  ]

  const pathD = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`
  }, "")

  return (
    <svg ref={ref} viewBox="0 0 100 70" className="w-full h-24">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {isInView && (
        <>
          <path d={`${pathD} L 100 70 L 0 70 Z`} fill="url(#chartGradient)" className="opacity-50" />
          <path d={pathD} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="draw-line" />
        </>
      )}
    </svg>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 px-4">
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
            Your X handle is now your bank account
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Send digital dollars to anyone on X, even if they haven&apos;t set up a wallet yet.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Large card - USDC Payments */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-6 rounded-2xl bg-card border border-border hover:border-secondary hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
                  <Coins className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Pay in USDC, Stay in USDC</h3>
                <p className="text-muted-foreground text-sm">
                  Never worry about holding SOL for transaction fees again. Our platform allows you to settle gas fees directly in USDC. If you have a balance, you can send a payment. It's that simple!
                </p>
              </div>
              <SystemStatus />
            </div>
          </motion.div>

          {/* Command Palette */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-secondary hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <Zap className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">One-Tap Onboarding</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Forget seed phrases and complex setups. Sign in with your X account and our Smart Account technology instantly deploys a secure vault for your assets. You’re ready to move money in seconds.
            </p>
            <div className="flex items-center gap-2 text-accent text-sm">
              
              
            </div>
            
            
            <KeyboardCommand />
          </motion.div>

          {/* Analytics */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-secondary hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <Bell className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Identity-Linked Notifications</h3>
            <p className="text-muted-foreground text-sm mb-4">Send funds to anyone, even if they aren’t on the platform yet. Our automated bot notifies the recipient on X immediately. Their funds wait securely in their social-linked vault until they’re ready to claim.</p>
            <AnimatedChart />
          </motion.div>

          {/* Performance */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-secondary hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <Wand2 className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Context-Aware Toolbar</h3>
            <p className="text-muted-foreground text-sm mb-4">Our Chromium app is built for X. When you visit a profile, the app wakes up, automatically identifying the recipient so you can go from "Reading" to "Sending" without typing a single character.</p>
            
            
            
            
          </motion.div>

          {/* Security */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-secondary hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-secondary w-fit mb-4">
              <Lock className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">Smart Account Security</h3>
            <p className="text-muted-foreground text-sm mb-4">Leverage the power of programmable wallets. Your assets are tied to your social identity, combining the ease of Web2 with the non-custodial security of Web3.</p>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
