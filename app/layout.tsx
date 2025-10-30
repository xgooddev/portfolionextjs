import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap", });

export const metadata: Metadata = {
  title: "Gonzalo Espindola - Frontend & Mobile Developer",
  description:
    "Frontend and Mobile Developer specializing in React, Next.js, and React Native. Creating exceptional digital experiences through clean code and thoughtful design.",
  keywords: ["frontend developer", "mobile developer", "react", "next.js", "react native", "typescript"],
  authors: [{ name: "Gonzalo Espindola" }],
  creator: "Gonzalo Espindola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goodtripdev.dev",
    title: "Gonzalo Espindola - Frontend & Mobile Developer",
    description: "Frontend and Mobile Developer specializing in React, Next.js, and React Native.",
    siteName: "Gonzalo Espindola Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Espindola - Frontend & Mobile Developer",
    description: "Frontend and Mobile Developer specializing in React, Next.js, and React Native.",
    creator: "@goodtripdev",
  },
    generator: 'goodtripdev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
