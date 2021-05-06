import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Cta from "../../components/Cta";

function LivingPillars() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Living Pillars" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Scotscape Living Pillars"
          image="/images/projects/pillar.jpg"
          description="We have worked with Scotscape to design and manufacturer sensors to help monitor plant growth. Our sensors help keep plants watered in all conditions"
        />
        {/*<Stats />*/}
        {/*<FeaturesZigzag />*/}
        {/*<FeaturesBlocks />*/}
        {/*<CaseStudies />*/}
        <Cta
          title="Interested in Living Pillars?"
          description="Reach out to Scotscape for more details on urban greening and why it's so important"
          buttonText="Find out more"
          buttonLink="https://www.scotscape.co.uk/services/living-pillar"
        />
      </main>
      <Footer />
    </div>
  );
}

export default LivingPillars;
