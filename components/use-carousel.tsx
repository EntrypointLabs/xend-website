"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const steps = [
  {
    title: "Hold dollars",
    description:
      "Your Balance lives on your phone, denominated in USD. Funded from local currency through a virtual bank account — held in dollars regardless of where it came from.",
    image: "/app-showcase-1-v2.png",
    alt: "Xend account screen showing a USD balance and recent activity",
  },
  {
    title: "Send & Receive",
    description:
      "Move dollars to anyone by username. No wire numbers, no three-day waits. Settles in seconds, for cents.",
    image: "/app-showcase-2.png",
    alt: "Xend send and receive screen with a deposit and transfer flow",
  },
  {
    title: "Yours, recoverable",
    description:
      "Sign in with a passkey on your phone. No seed phrases to memorise. Lose your phone, get back in — recovery is built into the product.",
    image: "/app-showcase-3.png",
    alt: "Xend recovery screen showing passkey backup",
  },
]

const ADVANCE_MS = 6000

export function UseCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, ADVANCE_MS)
    return () => clearTimeout(id)
  }, [active])

  return (
    <section id="use" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-muted-foreground mb-3">
            Built for everyday life
          </p>
          <h2 className="text-3xl sm:text-5xl font-medium text-foreground tracking-[-0.03em] leading-[1.05]">
            Use it like a checking account.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-8">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show step ${i + 1}`}
                  className="group relative h-1 flex-1 max-w-[64px] overflow-hidden rounded-full bg-border"
                >
                  <span
                    key={i === active ? `active-${active}` : `inactive-${i}`}
                    className={`absolute inset-y-0 left-0 bg-foreground ${
                      i < active ? "w-full" : i === active ? "" : "w-0"
                    }`}
                    style={
                      i === active
                        ? {
                            width: "0%",
                            animation: `carousel-progress ${ADVANCE_MS}ms linear forwards`,
                          }
                        : undefined
                    }
                  />
                </button>
              ))}
            </div>

            <div className="relative min-h-[180px] sm:min-h-[160px]">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className={`transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                  aria-hidden={i !== active}
                >
                  <h3 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative bg-surface rounded-3xl p-6 sm:p-8 w-full max-w-[420px] aspect-square flex items-center justify-center overflow-hidden">
              {steps.map((step, i) => (
                <div
                  key={step.image}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  aria-hidden={i !== active}
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={400}
                    height={800}
                    sizes="(max-width: 768px) 240px, 280px"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="max-h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes carousel-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  )
}
