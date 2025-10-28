import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Head from "next/head";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Xend Global",
    default: "Stablecoin powered internet | Xend Global",
  },
  description: "Stablecoin powered internet",
  keywords: [
    "Xend",
    "Xend Global",
    "Stablecoin",
    "Internet",
    "Payments",
    "Socials",
  ],
  openGraph: {
    images: "https://xend.global/images/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://xend.global",
    title: "Xend Global",
    description: "Stablecoin powered internet | Xend Global",
    images: [
      {
        url: "https://xend.global/images/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Xend Global",
      },
    ],
    creator: "@xend_global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* For Chrome, Firefox OS, Opera and Vivaldi */}
        <meta name="theme-color" content="#000000" />

        {/* For Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#000000" />

        {/* For iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
