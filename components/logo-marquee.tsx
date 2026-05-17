"use client"

const stats = [
  { value: "Seconds", label: "Settlement time" },
  { value: "Cents", label: "Cost per transfer" },
  { value: "24/7", label: "Always on" },
  { value: "USD", label: "Denominated" },
]

export function LogoMarquee() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.18em] font-semibold">
            A dollar account, without the bank
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-8 text-center">
              <div className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Built on</span>
          <img src="/logo-sol.png" alt="Solana" className="h-5 w-5 rounded" />
          <span className="font-medium text-foreground">Solana</span>
        </div>
      </div>
    </section>
  )
}
