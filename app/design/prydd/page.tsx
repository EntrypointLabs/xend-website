import type { Metadata } from "next"
import localFont from "next/font/local"
import { PryddPreview, type Palette, type Destination } from "@/components/prydd/prydd-preview"

const montserrat = localFont({
  src: "../../../public/prydd/montserrat-variable.ttf",
  variable: "--font-prydd",
  weight: "100 900",
  display: "swap",
})

const inter = localFont({
  src: "../../../public/prydd/inter-variable.ttf",
  variable: "--font-prydd-body",
  weight: "100 900",
  display: "swap",
})

export const metadata: Metadata = {
  title: { absolute: "PRYDD · Design comparison" },
  description: "Explore the PRYDD globe, palettes and scroll transitions.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/design/prydd" },
  icons: { icon: "/prydd/mark.svg" },
}

export default async function PryddDesignPage({
  searchParams,
}: {
  searchParams: Promise<{ palette?: string; destination?: string; motion?: string }>
}) {
  const params = await searchParams
  const palette: Palette = params.palette === "blue" || params.palette === "dark" ? params.palette : "white"
  const destination: Destination = params.destination === "send" ? "send" : "panels"

  return (
    <div className={montserrat.variable + " " + inter.variable}>
      <PryddPreview initialPalette={palette} initialDestination={destination} forceReducedMotion={params.motion === "reduce"} />
    </div>
  )
}
