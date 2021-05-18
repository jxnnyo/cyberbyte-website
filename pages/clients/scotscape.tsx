import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Stats from "../../components/Stats";
import Cta from "../../components/Cta";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import FeaturesZigzag from "../../components/FeaturesZigzag";

function Scotscape() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Working with Scotscape" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Scotscape"
          description="We work closely with Scotscape to help innovate Urban Greening"
        />
        <Cta
          title="Learn more"
          description="Head over to their website to lean more about transforming urban greening"
          buttonText="Scotscape"
          buttonLink="https://www.scotscape.co.uk/"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Scotscape;
