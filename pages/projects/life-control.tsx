import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Cta from "../../components/Cta";
import {NextSeo} from "next-seo";
import Header from "../../components/Header";
import cyberworks from "../../images/projects/cyberworks/original.jpg";

function LifeControl() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Life Control" />
      <Header />
      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Life Control"
          description="The original database administration panel for Arma 3 Life Servers."
          images={[{ url: cyberworks, alt: "Life Control" }]}
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
