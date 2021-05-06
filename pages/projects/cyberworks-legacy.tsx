import Head from 'next/head'
import Footer from "../../components/Footer";
import React from 'react';
import HeroHome from "../../components/HeroHome";
import Features from "../../components/Features";
import CaseStudies from "../../components/CaseStudies";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Stats from "../../components/Stats";
import Cta from "../../components/Cta";

function CyberworksLegacy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Cyberworks | Cyberbyte Studios</title>
      </Head>
      {/*<Header />*/}
      <main className="flex-grow">
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <HeroFeatures title="" description="" />
        <Stats title="" description="" stats={[
          {
            stat: 100,
            prefix: "~",
            description: "Commits"
          },
          {
            stat: 6,
            description: "Contributors"
          },
          {
            stat: 300,
            prefix: ">",
            description: "Downloads"
          }
        ]}  />
        {/*<FeaturesZigzag />*/}
        {/*<FeaturesBlocks />*/}
        {/*<CaseStudies />*/}
        <Cta title="Want to use it yourself?" description="You can head to our GitHub and download the latest version right now." buttonText="Try it now" buttonLink="https://github.com/Cyberbyte-Studios/CyberWorks-3" />

      </main>
      <Footer />
    </div>
  )
}

export default CyberworksLegacy;