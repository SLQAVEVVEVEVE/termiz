import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { DefaultSeo } from "@/lib/next-seo"
import "./globals.css"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Toaster } from "@/components/ui/toaster"
import { defaultSeoConfig } from "@/seo.config"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://termiz.ru"),
  title: "Термиз — высокотехнологичные ткани и СИЗ",
  description:
    "Производим технические ткани, фильтрационные материалы и средства индивидуальной защиты. Более 20 лет опыта.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <DefaultSeo {...defaultSeoConfig} />
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
