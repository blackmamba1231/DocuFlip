import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "../components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://pdfconvert.app"),
  title: {
    default: "Free PDF to DOCX Converter Online | Fast & Secure",
    template: "%s | PDF Converter",
  },
  description:
    "Convert PDF files to Word documents instantly. Free, fast, and secure PDF to DOCX converter. No registration required, no file storage.",
  keywords: ["PDF to DOCX", "PDF converter", "convert PDF to Word", "PDF to Word online", "free PDF converter"],
  authors: [{ name: "PDF Converter" }],
  creator: "PDF Converter",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pdfconvert.app",
    title: "Free PDF to DOCX Converter Online",
    description: "Convert PDF files to Word documents instantly. Free, fast, and secure.",
    siteName: "PDF Converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF to DOCX Converter Online",
    description: "Convert PDF files to Word documents instantly. Free, fast, and secure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
