import "../styles/globals.css";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Navigation from "../components/Navigation";
import PageIllustration from "../components/PageIllustration";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cyberbyte Software",
    default: "Cyberbyte Software",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cyberbyte.software/",
    siteName: "Cyberbyte Software",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-900 tracking-tight text-gray-200 antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden">
          <main className="flex-grow">
            <Navigation />
            {/* <div
              className="pointer-events-none relative mx-auto h-0 max-w-6xl"
              aria-hidden="true"
            >
              <PageIllustration />
            </div> */}

            <Breadcrumb />
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
