import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Cta from "../../components/Cta";
import FeaturesZigzag from "../../components/FeaturesZigzag";
import enveriline from "../../images/projects/landing-pages/enveriline-full.jpg";

function MerchantPlatform() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Static Websites and Landing Pages" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Static Websites and Landing Pages"
          image={enveriline}
          description="We create static websites and landing pages of various designs to fit any specification."
        />
        <Cta
          title="Looking for your own landing page?"
          description="Feel free to contact us if you are interested or want to know more!"
          buttonText="Contact Us"
          buttonLink="/contact"
          buttonInternal={true}
        />
      </main>
      <Footer />
    </div>
  );
}

export default MerchantPlatform;
