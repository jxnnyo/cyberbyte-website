import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Cta from "../../components/Cta";
import {NextSeo} from "next-seo";
import Header from "../../components/Header";

function Scotscape() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Working with Scotscape" />
      <Header />
      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
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
