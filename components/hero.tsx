"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 pt-28 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none mask-[radial-gradient(60%_50%_at_50%_30%,#000_30%,transparent_80%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border shadow-[0_1px_2px_rgba(0,0,0,0.04)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-glow" />
          <span className="text-xs font-medium text-muted-foreground tracking-wide">Private beta — joining is by invite</span>
        </div>

        <h1 className="reveal reveal-delay-1 text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold tracking-[-0.04em] text-foreground mb-6 leading-[1.02]">
          Spend money as you would,
          <br />
          <span className="text-muted-foreground">but faster.</span>
        </h1>

        <p className="reveal reveal-delay-2 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          A checking account for the internet — built for everyday life.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-12 text-base font-medium flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            onClick={() => router.push("/waitlist")}
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Button>
          <a
            href="/litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-7 h-12 rounded-full text-base font-medium border border-border bg-white text-foreground hover:bg-secondary transition-colors"
          >
            Read the litepaper
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="reveal reveal-delay-4 relative mx-auto max-w-md">
          <div className="absolute -inset-10 bg-linear-to-b from-foreground/10 via-foreground/5 to-transparent rounded-[3rem] blur-3xl" />
          <div className="relative">
            <img
              src="/app-showcase-1-v2.png"
              alt="Xend mobile app showing dollar balance and recent activity"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
