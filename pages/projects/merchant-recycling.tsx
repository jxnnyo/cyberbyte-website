import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import Cta from "../../components/Cta";
import FeaturesZigzag from "../../components/FeaturesZigzag";
import s20adminarea from "../../images/projects/merchant-recycling/s20-admin-area.jpg";


function MerchantPlatform() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Recycling Merchant Platform" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Recycling Merchant Websites"
          image={s20adminarea}
          description="We are working with recycling merchants as well as using our industry experience to produce cutting edge websites for recycling merchants."
        />
        <Cta
          title="Looking for your own recycling website?"
          description="Feel free to contact us if you are interested or want to know more!"
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}

export default MerchantPlatform;
