"use client"

const showcases = [
  { image: "/app-showcase-1-v2.png", label: "Your Account", description: "Hold dollars. See your Balance. At a glance." },
  { image: "/app-showcase-2.png", label: "Send & Receive", description: "Pay anyone with a username. Settle in seconds." },
  { image: "/app-showcase-3.png", label: "Recovery", description: "Back up your Account in seconds. Get it back if you ever lose your phone." },
]

export function Pricing() {
  return (
    <section id="how" className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.18em] font-semibold text-muted-foreground mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-5xl font-medium text-foreground tracking-[-0.03em] mb-4 leading-[1.05]">
            Three screens. That&apos;s the whole product.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            No charts, no markets, no surprises. Just dollars in your pocket and a way to move them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {showcases.map((showcase) => (
            <div key={showcase.label} className="group flex flex-col items-center text-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-6 bg-linear-to-b from-foreground/5 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)] group-hover:-translate-y-1 transition-all duration-500">
                  <img src={showcase.image} alt={showcase.label} className="w-full h-auto" />
                </div>
              </div>
              <div className="mt-6 max-w-xs">
                <h3 className="text-base font-medium text-foreground tracking-tight">
                  {showcase.label}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  {showcase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
