import Head from 'next/head'
import Footer from "../components/Footer";
import React from 'react';
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import CaseStudies from "../components/CaseStudies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Cyberbyte Software</title>
        <meta name="description"
              content="Cyberbyte Software is a bespoke web hosting and development company able to deliver your most ambitious projects"/>
      </Head>

      {/*  Site header */}
      {/*<Header />*/}

      <main className="flex-grow">
        <HeroHome/>
        <Features/>
        <CaseStudies />
      </main>
      <Footer/>
    </div>
  )
}
