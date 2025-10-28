import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  themeColor: "#000000",
  title: "Xend Global",
  description: "Stablecoin powered internet",
  twitter: {
    card: "summary_large_image",
    title: "Xend Global",
    description: "Stablecoin powered internet",
    site: "https://xend.global",
    creator: "@xend_global",
    images: ["/images/og-image.png"],
  },
  openGraph: {
    title: "Xend Global",
    description: "Stablecoin powered internet",
    siteName: "Xend Global",
    images: ["/images/og-image.png"],
  },
  keywords: [
    "Xend",
    "Xend Global",
    "Stablecoin",
    "Internet",
    "Payments",
    "Socials",
  ],
  appLinks: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
