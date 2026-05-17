"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function FinalCTA() {
  const router = useRouter()

  return (
    <section className="relative py-28 px-4">
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6 tracking-[-0.04em] leading-[1.02]">
          A dollar account, in your pocket.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Xend is launching soon. Join the waitlist and we&apos;ll let you in as soon as we open the doors.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-12 text-sm font-medium flex items-center gap-2"
            onClick={() => router.push("/waitlist")}
          >
            Join the waitlist
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
      </div>
    </section>
  )
}
