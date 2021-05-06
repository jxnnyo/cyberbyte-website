import React from 'react';
import Footer from "../../components/Footer";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Stats from "../../components/Stats";
import {NextSeo} from "next-seo";
import Header from "../../components/Header";

function Mineathon() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Mineathon" />
      <Header />
      <main className="flex-grow">
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <HeroFeatures title="Mineathon" description="" />
        <Stats title="" description="" stats={[
          {
            stat: "~100",
            description: "Commits"
          },
          {
            stat: "6",
            description: "Contributors"
          },
          {
            stat: ">300",
            description: "Downloads"
          }
        ]} />
        {/*<FeaturesZigzag />*/}
        {/*<FeaturesBlocks />*/}
        {/*<CaseStudies />*/}
      </main>
      <Footer />
    </div>
  )
}

export default Mineathon;