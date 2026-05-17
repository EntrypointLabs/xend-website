"use client"

const links = [
  { label: "Litepaper", href: "/litepaper.pdf", external: true },
  { label: "X / Twitter", href: "https://x.com/xend_global", external: true },
  { label: "Get started", href: "/waitlist" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/xend-global-logo.png" alt="Xend" className="w-6 h-5" />
          <span className="text-sm font-semibold text-foreground tracking-tight">Xend</span>
          <span className="text-xs text-muted-foreground ml-3">
            &copy; {new Date().getFullYear()} Xend Global, Inc.
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
