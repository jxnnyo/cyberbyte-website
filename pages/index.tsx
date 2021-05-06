import Head from 'next/head'
import Footer from "../components/Footer";
import React from 'react';
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import CaseStudies from "../components/CaseStudies";
import {NextSeo} from "next-seo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo description="Cyberbyte Software is a bespoke web hosting and development company able to deliver your most ambitious projects" />

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
