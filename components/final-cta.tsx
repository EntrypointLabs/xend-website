"use client"

import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useReveal } from "@/hooks/use-reveal"

export function FinalCTA() {
  const router = useRouter()
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <section className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto text-center in-view ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-[-0.04em] leading-[1.02]">
          A dollar account, in your pocket.
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Xend is launching soon. Join the waitlist and we&apos;ll let you in as soon as we open the doors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base font-medium shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center gap-2"
            onClick={() => router.push("/waitlist")}
          >
            Join the waitlist
            <ArrowRight className="w-5 h-5" />
          </Button>
          <a
            href="/litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-8 h-14 rounded-full text-base font-medium border border-border bg-white text-foreground hover:bg-secondary transition-colors"
          >
            Read the litepaper
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
