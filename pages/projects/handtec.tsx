import React from "react";
import {NextSeo} from "next-seo";
import Footer from "../../components/Footer";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Header from "../../components/Header";
import Cta from "../../components/Cta";

function Handtec() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Handtec" />
      <Header />
      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Handtec Recycling System"
          description="Transforming a legacy application into a fully featured platform"
        />
        <Cta
          title="Learn more about Handtec"
          description="To hear about the bespoke system we have been working on please contact us."
          buttonText="Contact us"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Handtec;
