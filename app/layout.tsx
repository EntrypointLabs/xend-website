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
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Xend",
    default: "Xend — spend money as you would, but faster",
  },
  description:
    "Hold dollars on your phone. Send them to anyone in seconds, for cents. Xend is a checking account for the internet.",
  keywords: [
    "Xend",
    "Xend Global",
    "dollar account",
    "payments",
    "money transfer",
    "Africa fintech",
  ],
  openGraph: {
    title: "Xend — spend money as you would, but faster",
    description:
      "Hold dollars on your phone. Send them to anyone in seconds, for cents.",
    images: "https://xend.global/images/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://xend.global",
    title: "Xend",
    description:
      "Hold dollars on your phone. Send them to anyone in seconds, for cents.",
    images: [
      {
        url: "https://xend.global/images/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Xend",
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
        <meta name="theme-color" content="#ffffff" />

        {/* For Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#ffffff" />

        {/* For iOS Safari */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
