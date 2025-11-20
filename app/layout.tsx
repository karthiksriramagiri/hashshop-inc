import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HASHSHOP Inc. | Services | About | Careers | Contact",
  description:
    "Empowering businesses to thrive in the digital marketplace through innovative e-commerce solutions, strategic partnerships, and cutting-edge technology.",
  generator: "v0.app",
  openGraph: {
    title: "HASHSHOP Inc.",
    description:
      "Empowering businesses to thrive in the digital marketplace through innovative e-commerce solutions, strategic partnerships, and cutting-edge technology.",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "HASHSHOP Inc. services overview preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HASHSHOP Inc.",
    description:
      "Empowering businesses to thrive in the digital marketplace through innovative e-commerce solutions, strategic partnerships, and cutting-edge technology.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${figtree.style.fontFamily};
  --font-sans: ${figtree.variable};
  --font-mono: ${GeistMono.variable};
  --font-instrument-serif: ${instrumentSerif.variable};
}
        `}</style>
      </head>
      <body className={`${figtree.variable} ${instrumentSerif.variable}`}>{children}</body>
    </html>
  )
}
