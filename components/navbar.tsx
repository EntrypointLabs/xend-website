"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const navItems = [
  { label: "Product", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Litepaper", href: "/litepaper.pdf", external: true },
]

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
    >
      <nav className="relative flex items-center justify-between px-3 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-border shadow-sm shadow-black/[0.02]">
        <a href="/" className="flex items-center gap-2 pl-2">
          <img
            src="/xend-global-logo.png"
            alt="Xend"
            className="w-8 h-7"
          />
          <span className="font-semibold text-foreground tracking-tight hidden sm:block">Xend</span>
        </a>

        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="relative px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-secondary rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            size="sm"
            className="shimmer-btn bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 font-medium"
            onClick={() => router.push("/waitlist")}
          >
            Get started
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-border shadow-lg"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-border my-2" />
            <Button
              className="shimmer-btn bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              onClick={() => {
                setMobileMenuOpen(false)
                router.push("/waitlist")
              }}
            >
              Get started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
