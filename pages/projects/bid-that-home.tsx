import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";

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
          description="This website and iOS app allowed users to place bids on properties not yet on the market"
        />
      </main>
      <Footer />
    </div>
  );
}

export default BidThatHome;
