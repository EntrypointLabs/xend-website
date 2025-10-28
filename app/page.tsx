"use client"

import type React from "react"

import {ServicesSection} from "services-section.tsx"
import Image from "next/image"
import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const scrollThrottleRef = useRef<number>()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 100)

    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      })
      setCurrentSection(index)
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      const deltaY = touchStartY.current - touchEndY
      const deltaX = touchStartX.current - touchEndX

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < 1) {
          scrollToSection(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()

        if (!scrollContainerRef.current) return

        scrollContainerRef.current.scrollBy({
          left: e.deltaY,
          behavior: "instant",
        })

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const newSection = Math.round(scrollContainerRef.current.scrollLeft / sectionWidth)
        if (newSection !== currentSection) {
          setCurrentSection(newSection)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return

      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) {
          scrollThrottleRef.current = undefined
          return
        }

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 1) {
          setCurrentSection(newSection)
        }

        scrollThrottleRef.current = undefined
      })
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
      if (scrollThrottleRef.current) {
        cancelAnimationFrame(scrollThrottleRef.current)
      }
    }
  }, [currentSection])

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 500))
      setSubmitMessage("Thanks for joining! Check your email.")
      setEmail("")
      setTimeout(() => setSubmitMessage(""), 3000)
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#1275d8"
            colorB="#e19136"
            speed={0.8}
            detail={0.8}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#0066ff"
            upColor="#0066ff"
            downColor="#d1d1d1"
            leftColor="#e19136"
            rightColor="#e19136"
            intensity={0.9}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.97}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-opacity duration-700 md:px-12 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection(0)}
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-foreground/25">
            <Image
              src="/images/design-mode/simple-icons--blockchaindotcom%201.png"
              alt="Xend Global"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </div>
          <span className="font-sans text-xl font-semibold tracking-tight text-foreground">Xend Global</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {["Home", "Products", "Services"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className={`group relative font-sans text-sm font-medium transition-colors ${
                currentSection === index ? "text-foreground" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                  currentSection === index ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://x.com/xend_global?s=21&t=Ao6XMtDMivk31gxweHcEsg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-foreground/25"
            aria-label="Follow us on X"
          >
            <svg
              className="h-5 w-5 text-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.308l7.732-8.835L2.882 2.25h6.6l4.888 6.469L18.244 2.25zM17.41 20.452h1.828L6.63 3.75H4.676l12.734 16.702z" />
            </svg>
          </a>
        </div>
      </nav>

      <div
        ref={scrollContainerRef}
        data-scroll-container
        className={`relative z-10 flex  overflow-x-auto overflow-y-hidden transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Hero Section */}
        <section className="flex w-screen h-screen shrink-0 flex-col justify-center px-6 pb-16 pt-60 md:pt-40 md:pb-24">
          <div className="max-w-8xl">
            <div className="mb-4 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-foreground/20 bg-foreground/15 px-4 py-1.5 backdrop-blur-md duration-700">
              <p className="font-mono text-xs text-foreground/90">WebGL Powered Design</p>
            </div>
            <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-8 font-sans text-6xl font-light leading-[1.1] tracking-tight text-foreground duration-1000 md:text-7xl lg:text-8xl">
              <span className="text-balance">
                Seamless Cross-Chain Payments.
                <br />
                Seconds, Not Hours.
              </span>
            </h1>
            <p className="mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-lg leading-relaxed text-foreground/90 duration-1000 delay-200 md:text-xl">
              <span className="text-pretty">
                Move assets across blockchains instantly with low fees — no bridges, no complexity, just pure
                interoperability.
              </span>
            </p>
            <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 duration-1000 delay-300 sm:flex-row sm:items-center">
              <MagneticButton
                size="lg"
                variant="primary"
                onClick={() => window.open("https://v0.app/templates/R3n0gnvYFbO", "_blank")}
              >
                Open in v0
              </MagneticButton>
             
            </div>

            <form
              onSubmit={handleEmailSubmit}
              className="mt-12 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400"
            >
              <div className="mb-3 inline-block rounded-full border border-foreground/20 bg-foreground/15 px-4 py-1.5 backdrop-blur-md">
                <p className="font-mono text-xs text-foreground/90">Join the Waitlist</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-lg border border-foreground/20 bg-foreground/10 px-4 py-3 font-sans text-foreground placeholder-foreground/50 backdrop-blur-md transition-all duration-300 focus:border-foreground/40 focus:bg-foreground/15 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg bg-foreground px-6 py-3 font-sans font-semibold text-background transition-all duration-300 hover:bg-foreground/90 disabled:opacity-50"
                >
                  {isSubmitting ? "Joining..." : "Join"}
                </button>
              </div>
              {submitMessage && <p className="mt-2 font-mono text-sm text-foreground/80">{submitMessage}</p>}
            </form>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500"></div>
        </section>

        {/* Products Section */}
        {/* <section className="flex min-h-screen w-screen shrink-0 flex-col justify-center px-6 py-24 md:px-12">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="font-sans text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl">
                <span className="text-balance">Our Products</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-foreground/80">
                Access our platform across all your devices with our mobile app and browser extension.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Mobile App Card */}
              {/* <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-foreground/20 bg-foreground/10 p-8 backdrop-blur-md duration-700 delay-100">
                <div className="mb-6 flex h-48 items-center justify-center rounded-lg bg-foreground/5">
                  <Image
                    src="/mobile-app-interface.png"
                    alt="Mobile App"
                    width={200}
                    height={300}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mb-2 font-sans text-2xl font-semibold text-foreground">Mobile App</h3>
                <p className="mb-6 text-foreground/80">
                  Manage your cross-chain payments on the go with our native mobile application.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="flex-1 rounded-lg bg-foreground px-4 py-3 font-sans font-semibold text-background transition-all duration-300 hover:bg-foreground/90">
                    Download iOS
                  </button>
                  <button className="flex-1 rounded-lg border border-foreground/30 px-4 py-3 font-sans font-semibold text-foreground transition-all duration-300 hover:bg-foreground/10">
                    Download Android
                  </button>
                </div>
              </div>

              {/* Browser Extension Card */}
             {/* <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-foreground/20 bg-foreground/10 p-8 backdrop-blur-md duration-700 delay-200">
                <div className="mb-6 flex h-48 items-center justify-center rounded-lg bg-foreground/5">
                  <Image
                    src="/browser-extension-interface.jpg"
                    alt="Browser Extension"
                    width={300}
                    height={300}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mb-2 font-sans text-2xl font-semibold text-foreground">Browser Extension</h3>
                <p className="mb-6 text-foreground/80">
                  Seamlessly integrate cross-chain payments into your browser for quick access.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="flex-1 rounded-lg bg-foreground px-4 py-3 font-sans font-semibold text-background transition-all duration-300 hover:bg-foreground/90">
                    Add to Chrome
                  </button>
                  <button className="flex-1 rounded-lg border border-foreground/30 px-4 py-3 font-sans font-semibold text-foreground transition-all duration-300 hover:bg-foreground/10">
                    Add to Edge
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>

      <style jsx global>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}
