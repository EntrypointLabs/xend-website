import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://xend.global";
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Xend",
    default: "Xend — Spend money as you would, but faster",
  },
  description:
    "Xend is a dollar account for everyday life. Hold dollars on your phone, send to anyone by username in seconds for cents, and fund from local currency. A fast, low-fee alternative to slow bank transfers.",
  keywords: [
    "dollar account",
    "send money instantly by username",
    "fast low fee dollar transfers",
    "digital checking account",
    "USD account instant settlement",
    "alternative to slow bank transfers",
    "international dollar transfer",
    "24/7 instant money sending app",
    "passkey login money account",
    "no seed phrase recovery",
    "fund dollar account from local currency",
    "personal finance app instant payments",
    "Solana payment platform",
    "Xend",
    "Xend Global",
  ],
  applicationName: "Xend",
  authors: [{ name: "Xend Global, Inc." }],
  creator: "Xend Global, Inc.",
  publisher: "Xend Global, Inc.",
  category: "finance",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Xend",
    title: "Xend — Spend money as you would, but faster",
    description:
      "Hold dollars on your phone. Send them to anyone in seconds, for cents. A checking account for the internet.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Xend — a dollar account in your pocket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xend_global",
    creator: "@xend_global",
    title: "Xend — Spend money as you would, but faster",
    description:
      "Hold dollars on your phone. Send them to anyone in seconds, for cents.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logos/xend-mark-black.svg", type: "image/svg+xml" },
    ],
    apple: "/logos/xend-mark-black.svg",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#org`,
      name: "Xend Global, Inc.",
      alternateName: "Xend",
      url: SITE_URL,
      logo: `${SITE_URL}/logos/xend-lockup-black.svg`,
      sameAs: ["https://x.com/xend_global"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Xend",
      description:
        "A dollar account for everyday life — send money to anyone by username in seconds, for cents.",
      publisher: { "@id": `${SITE_URL}#org` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: "Xend",
      operatingSystem: "iOS, Android",
      applicationCategory: "FinanceApplication",
      description:
        "A checking account for the internet. Hold dollars, send and receive in seconds for cents, fund from your local bank.",
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: { "@id": `${SITE_URL}#org` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Xend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Xend is a dollar account that lives on your phone. You hold dollars, send them to anyone by username in seconds for cents, receive money back the same way, and fund your account from local currency.",
          },
        },
        {
          "@type": "Question",
          name: "How fast are transfers on Xend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Transfers settle in seconds — not the three days a typical bank wire takes. The fee is cents, not the percentage points charged by traditional remittance services.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a seed phrase to use Xend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You sign in with a passkey on your phone. There are no seed phrases to lose. Recovery is built into the product.",
          },
        },
        {
          "@type": "Question",
          name: "Can I fund my Xend account from my local bank?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You fund your account from local currency through a virtual bank account. Your balance is held in dollars regardless of how it was funded.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
