import Script from "next/script"
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
  })

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={inter.variable}>
        <body className="bg-gray-900 tracking-tight text-gray-200 antialiased">
            <div className="flex min-h-screen flex-col overflow-hidden">
            <main className="flex-grow">
        <Navigation />
            {children}
            </main>
            <Footer />
            </div>
            <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K8GX3SWWDX"
        strategy="afterInteractive"
      />
      </body>
      </html>
    )
  }