import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "@/app/globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Providers } from "./providers"
import dynamic from 'next/dynamic'

// Dynamically import Analytics with no SSR
const Analytics = dynamic(() => import('@/components/Analytics').then(mod => mod.Analytics), {
  ssr: false
})

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: "BotIntelli - Enterprise AI Assistant Platform",
  description: "Transform your business with our cutting-edge AI solution",
  metadataBase: new URL('https://botintelli.com'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://botintelli.com" />
        
        {/* Add caching headers */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </head>
      <body className="relative flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
