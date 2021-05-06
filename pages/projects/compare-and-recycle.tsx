import Footer from "../../components/Footer";
import React from 'react';
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Stats from "../../components/Stats";
import Cta from "../../components/Cta";
import {NextSeo} from "next-seo";
import Header from "../../components/Header";

function CompareAndRecycle() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Compare and Recycle" />
      <Header />
      <main className="flex-grow">
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <HeroFeatures title="Compare and Recycle" description="Our team has worked on the popular comparison site Compare and Recycle" />
        <Stats title="" description="" stats={[
          {
            stat: ">600k",
            description: "Daily Requests"
          },
          {
            stat: ">3000",
            description: "Commits"
          },
          {
            stat: "99.999%",
            description: "Uptime"
          }
        ]}  />
        {/*<FeaturesZigzag />*/}
        {/*<FeaturesBlocks />*/}
        {/*<CaseStudies />*/}
        <Cta title="Need to recycle you mobile?" description="Just head over to there website" buttonText="Visit the site" buttonLink="https://www.compareandrecycle.co.uk/" />

      </main>
      <Footer />
    </div>
  )
}

export default CompareAndRecycle;