import Script from "next/script"
import "../styles/globals.css";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            {children}
            <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K8GX3SWWDX"
        strategy="afterInteractive"
      />
      </body>
      </html>
    )
  }