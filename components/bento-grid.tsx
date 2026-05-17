"use client"

import { useEffect, useState } from "react"
import { Send, Download, Building2, Shield, Zap } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

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

const activityItems = [
  { initial: "A", name: "@ada", note: "Coffee", amount: "−$4.20", positive: false },
  { initial: "K", name: "@kemi", note: "Rent split", amount: "+$650.00", positive: true },
  { initial: "D", name: "@dami", note: "Lunch", amount: "−$12.50", positive: false },
]

function ActivityFeed() {
  return (
    <div className="mt-6 rounded-xl bg-surface-strong border border-border divide-y divide-border overflow-hidden">
      {activityItems.map((it) => (
        <div key={it.name} className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-semibold flex items-center justify-center">
              {it.initial}
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{it.name}</div>
              <div className="text-xs text-muted-foreground">{it.note}</div>
            </div>
          </div>
          <div className={`text-sm font-semibold tabular-nums ${it.positive ? "text-emerald-600" : "text-foreground"}`}>
            {it.amount}
          </div>
        </div>
      ))}
    </div>
  )
}

const cardBase =
  "group relative p-7 rounded-2xl bg-card border border-border hover:border-foreground/15 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 in-view"

export function BentoGrid() {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const v = isVisible ? "is-visible" : ""

  return (
    <section id="features" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 in-view ${v}`}>
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-muted-foreground mb-3">
            What you can do
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-foreground tracking-[-0.03em] mb-4 leading-[1.05]">
            A checking account, faster.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Hold dollars, move them in seconds, pay anyone. Xend works the way money should.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {/* Row 1: Send (2) + Receive (1) */}
          <div className={`${cardBase} md:col-span-2 ${v}`} style={{ transitionDelay: "60ms" }}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Send className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
              Send in seconds, for cents.
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Send dollars to anyone with a username — across the street or across the world. No wire numbers. No three-day waits.
            </p>
            <LiveBalance />
          </div>

          <div className={`${cardBase} flex flex-col ${v}`} style={{ transitionDelay: "120ms" }}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Download className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">Receive from anywhere</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Share your handle. Get paid by anyone, in dollars, instantly. Funds land in your Account, ready to use.
            </p>
            <div className="mt-auto pt-6">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-strong border border-border w-fit">
                <span className="text-xs text-muted-foreground">xend.id/</span>
                <span className="text-sm font-mono font-semibold text-foreground">you</span>
              </div>
            </div>
          </div>

          {/* Row 2: Activity (2) + Fund (1) */}
          <div className={`${cardBase} md:col-span-2 ${v}`} style={{ transitionDelay: "180ms" }}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Zap className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
              Activity, not transactions.
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Every payment, in plain language. Who you paid, what for, when. The feed reads like a conversation, not a ledger.
            </p>
            <ActivityFeed />
          </div>

          <div className={`${cardBase} flex flex-col ${v}`} style={{ transitionDelay: "240ms" }}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Building2 className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">Fund from your bank</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Top up your Account from local currency through a virtual bank account. Your balance stays in dollars.
            </p>
            <div className="mt-auto pt-6">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-surface-strong border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-foreground/90 text-background text-[10px] font-bold flex items-center justify-center">
                    ₦
                  </div>
                  <span className="text-xs text-muted-foreground">Naira deposit</span>
                </div>
                <span className="text-xs font-medium text-emerald-600">→ USD</span>
              </div>
            </div>
          </div>

          {/* Row 3: Yours alone — full width */}
          <div className={`${cardBase} md:col-span-3 ${v}`} style={{ transitionDelay: "300ms" }}>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-1">
                <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
                  <Shield className="w-5 h-5 text-foreground" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">
                  Yours alone.
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  Sign in with a passkey on your phone. No seed phrases to lose, no email-and-password leaks. Recovery is built into the product, not bolted on.
                </p>
              </div>
              <div className="flex items-center gap-3 md:gap-6">
                {["Passkey", "Device", "Recovery"].map((label, i) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-surface-strong border border-border"
                  >
                    <div className="w-8 h-8 rounded-full bg-foreground/90 text-background text-sm font-semibold flex items-center justify-center mb-2">
                      {i + 1}
                    </div>
                    <span className="text-xs font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
