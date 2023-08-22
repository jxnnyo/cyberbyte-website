// import Script from "next/script"
import "../styles/globals.css";
// import Footer from "../components/Footer";
// import Breadcrumb from "../components/Breadcrumb";
// import Navigation from "../components/Navigation";
import PageIllustration from "../components/PageIllustration";
import type { Metadata } from "next";

import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
  })


// export const metadata: Metadata = {
//   title: {
//     template: '%s | Cyberbyte Software',
//     default: 'Cyberbyte Software'
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_GB",
//     url: "https://cyberbyte.software/",
//     siteName: "Cyberbyte Software",
//   }
// } 

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
        {/* <Navigation /> */}
        {/* <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div> */}

        {/* <Breadcrumb /> */}
            {children}
            </main>
            {/* <Footer /> */}
            </div>
      {/* <Script
        id="google-analytics"
        strategy="afterInteractive"
        >
             {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-W7NXK3T');
            `}
        </Script> */}
      </body>
      </html>
    )
  }