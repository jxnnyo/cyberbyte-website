import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import {NextSeo} from "next-seo";
import Header from "../../components/Header";
import Cta from "../../components/Cta";
import enveriline from "../../images/projects/landing-pages/enveriline-full.jpg";

function MerchantPlatform() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Static Websites and Landing Pages" />
      <Header />
      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Static Websites and Landing Pages"
          images={[{ url: enveriline, alt: "Enveriline" }]}
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
