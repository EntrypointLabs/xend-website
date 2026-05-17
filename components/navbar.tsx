"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const navItems = [
  { label: "Product", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Litepaper", href: "/litepaper.pdf", external: true },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl reveal">
      <nav className="relative flex items-center justify-between px-3 py-2 rounded-full bg-white/85 backdrop-blur-xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)]">
        <a href="/" className="flex items-center gap-2 pl-2">
          <img src="/xend-global-logo.png" alt="Xend" className="w-7 h-6" />
          <span className="font-semibold text-foreground tracking-tight hidden sm:block">Xend</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 font-medium"
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
        <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-border shadow-lg">
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              onClick={() => {
                setMobileMenuOpen(false)
                router.push("/waitlist")
              }}
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
