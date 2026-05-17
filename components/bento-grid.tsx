"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Send, Download, CreditCard, Building2, Shield, Zap } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function LiveBalance() {
  const [amount, setAmount] = useState(2840.12)
  useEffect(() => {
    const id = setInterval(() => {
      setAmount((a) => +(a + Math.random() * 4).toFixed(2))
    }, 2200)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="mt-6 rounded-xl bg-surface-strong border border-border p-4">
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
        Balance
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight text-foreground tabular-nums">
          ${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
        <span className="text-sm text-muted-foreground">USD</span>
      </div>
    </div>
  )
}

function ActivityRow() {
  const items = [
    { name: "@ada", note: "Coffee", amount: "−$4.20", color: "text-foreground" },
    { name: "@kemi", note: "Rent split", amount: "+$650.00", color: "text-emerald-600" },
    { name: "@dami", note: "Lunch", amount: "−$12.50", color: "text-foreground" },
  ]
  return (
    <div className="mt-6 rounded-xl bg-surface-strong border border-border divide-y divide-border overflow-hidden">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center justify-between px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-semibold flex items-center justify-center">
              {it.name[1].toUpperCase()}
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{it.name}</div>
              <div className="text-xs text-muted-foreground">{it.note}</div>
            </div>
          </div>
          <div className={`text-sm font-semibold tabular-nums ${it.color}`}>{it.amount}</div>
        </motion.div>
      ))}
    </div>
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
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-primary mb-3">
            What you can do
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-foreground tracking-tight mb-4">
            A checking account, faster.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Hold dollars, move them in seconds, pay anyone. Xend works the way money should.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
          >
            <div className="p-2.5 rounded-lg bg-accent w-fit mb-5">
              <Send className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Send in seconds, for cents.</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Send dollars to anyone with a username — across the street or across the world. No wire numbers. No three-day waits.
            </p>
            <LiveBalance />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="p-2.5 rounded-lg bg-accent w-fit mb-5">
              <Download className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">Receive from anywhere</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Share your handle. Get paid by anyone, in dollars, instantly. Funds land in your Account, ready to use.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="p-2.5 rounded-lg bg-accent w-fit mb-5">
              <Building2 className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">Fund from your bank</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Top up your Account from local currency through a virtual bank account. Your balance stays in dollars.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="p-2.5 rounded-lg bg-accent w-fit mb-5">
              <Shield className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">Yours alone</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sign in with a passkey. No seed phrases to lose. Recovery built into the product, not bolted on.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="p-2.5 rounded-lg bg-accent w-fit mb-5">
                  <Zap className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">Activity, not transactions.</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Every payment, in plain language. Who you paid, what for, when. The feed reads like a conversation, not a ledger.
                </p>
              </div>
              <div className="hidden sm:block flex-1 max-w-sm">
                <ActivityRow />
              </div>
            </div>
            <div className="sm:hidden">
              <ActivityRow />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
