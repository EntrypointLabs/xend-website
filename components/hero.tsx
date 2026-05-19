"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary mb-6">
          <span className="text-xs font-medium text-muted-foreground tracking-wide">
            Private beta — joining is by invite
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-medium tracking-[-0.04em] text-foreground mb-5 leading-[1.02]">
          Money, but faster.
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
          A checking account for the internet — built for everyday life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 h-11 text-sm font-medium flex items-center gap-2"
            onClick={() => router.push("/waitlist")}
          >
            Get started
            <ArrowRight className="w-4 h-4" />
          </Button>
          <a
            href="/litepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            Read the litepaper →
          </a>
        </div>

        <div className="relative mx-auto max-w-[260px] sm:max-w-[300px]">
          <div className="absolute -inset-10 bg-linear-to-b from-foreground/5 to-transparent rounded-[3rem] blur-2xl" />
          <div className="relative">
            <Image
              src="/app-showcase-1-v2.png"
              alt="Xend mobile app showing dollar balance and recent activity"
              width={600}
              height={1200}
              priority
              sizes="(max-width: 640px) 260px, 300px"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
