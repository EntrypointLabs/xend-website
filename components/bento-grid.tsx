"use client"

import { Send, Download, Building2, Shield, Zap } from "lucide-react"

const cardBase =
  "group relative p-7 rounded-2xl bg-card border border-border hover:border-foreground/15 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] transition-all duration-300"

export function BentoGrid() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-muted-foreground mb-3">
            What you can do
          </p>
          <h2 className="text-3xl sm:text-5xl font-medium text-foreground tracking-[-0.03em] mb-4 leading-[1.05]">
            A checking account, faster.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Hold dollars, move them in seconds, pay anyone. Xend works the way money should.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${cardBase} md:col-span-2`}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Send className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2 tracking-tight">
              Send in seconds, for cents.
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Move dollars to anyone with a username — across the street or across the world. No wire numbers. No three-day waits.
            </p>
          </div>

          <div className={cardBase}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Download className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2 tracking-tight">Receive from anywhere</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Share your handle. Get paid by anyone, in dollars, instantly.
            </p>
          </div>

          <div className={cardBase}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Building2 className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2 tracking-tight">Fund from your bank</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Top up your Account from local currency. Your Balance stays in dollars.
            </p>
          </div>

          <div className={`${cardBase} md:col-span-2`}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Zap className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2 tracking-tight">
              Activity, not transactions.
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Every payment, in plain language. Who you paid, what for, when. The feed reads like a conversation, not a ledger.
            </p>
          </div>

          <div className={`${cardBase} md:col-span-3`}>
            <div className="p-2.5 rounded-lg bg-secondary w-fit mb-5">
              <Shield className="w-5 h-5 text-foreground" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2 tracking-tight">
              Yours alone.
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Sign in with a passkey on your phone. No seed phrases to lose, no email-and-password leaks. Recovery is built into the product, not bolted on.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
