import Head from 'next/head'
import Footer from "../../components/Footer";
import React from 'react';
import HeroHome from "../../components/HeroHome";
import Features from "../../components/Features";
import CaseStudies from "../../components/CaseStudies";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";

function LivingPillars() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*<Header />*/}
      <main className="flex-grow">
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        {/*<HeroFeatures />*/}
        {/*<Stats />*/}
        {/*<FeaturesZigzag />*/}
        {/*<FeaturesBlocks />*/}
        {/*<CaseStudies />*/}
        {/*<Cta />*/}

      </main>
      <Footer />
    </div>
  )
}

export default LivingPillars;