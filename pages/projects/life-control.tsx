import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Stats from "../../components/Stats";
import Cta from "../../components/Cta";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import FeaturesZigzag from "../../components/FeaturesZigzag";

function LifeControl() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Life Control" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Life Control"
          description="The original database administration panel for Arma 3 Life Servers"
          image="/images/projects/cyberworks/original.jpg"
        />
        <Cta
          title="Take a look at our new version"
          description="We rebuilt Life Control from the ground up as Cyberworks"
          buttonText="Take a look"
          buttonLink="/projects/cyberworks3"
          buttonInternal={true}
        />
      </main>
      <Footer />
    </div>
  );
}

export default LifeControl;
