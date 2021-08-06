import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import FeaturesZigzag from "../../components/FeaturesZigzag";
import bth from "../../images/projects/bth.png"
import permissions from "../../images/projects/cyberworks/permissions.png";

function BidThatHome() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Bid That Home" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Bid That Home"
          description="This website and iOS app allowed users to place bids on properties not yet on the market."
        />
        <FeaturesZigzag
          title="Transforming property bidding"
          description="Bid That Home was a unique solution targeting property owners"
          features={[
            {
              title: "Bidding on all Addresses",
              description:
                "The application allowed users to pick any property even if it was not on the market ",
              images: [{url: bth, alt: "Bid That Home Homepage"}],
              items: [
                "Advanced Admin Area",
                "Letter Tracking",
                "Google Maps Integration",
              ],
            }
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default BidThatHome;
