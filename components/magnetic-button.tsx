"use client"

import type React from "react"
import { useRef, useState } from "react"

interface MagneticEmailFieldProps {
  onSubmit?: (email: string) => void
  className?: string
  placeholder?: string
}

export function MagneticButton({
  onSubmit,
  className = "",
  placeholder = "Enter your email",
}: MagneticEmailFieldProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    positionRef.current = { x: x * 0.15, y: y * 0.15 }

    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`
      }
    })
  }

  const handleMouseLeave = () => {
    positionRef.current = { x: 0, y: 0 }
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform = "translate3d(0px, 0px, 0)"
      }
    })
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("Please enter your email")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email")
      return
    }

    setError("")
    onSubmit?.(email)
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          relative overflow-hidden rounded-full
          transition-all duration-300 ease-out will-change-transform
          bg-foreground/95 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]
          ${className}
        `}
        style={{
          transform: "translate3d(0px, 0px, 0)",
          contain: "layout style paint",
        }}
      >
        <div className="flex items-center gap-3 px-6 py-3">
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError("")
            }}
            placeholder={placeholder}
            className="flex-1 bg-transparent font-sans text-sm text-background placeholder-background/60 outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-background px-4 py-1.5 font-sans text-xs font-semibold text-foreground transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Subscribe
          </button>
        </div>
        {error && <p className="px-6 pb-2 font-mono text-xs text-red-400">{error}</p>}
      </div>
    </form>
  )
}
