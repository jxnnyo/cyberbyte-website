import React from "react";
import { NextSeo } from "next-seo";
import Footer from "../../components/Footer";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Header from "../../components/Header";

function Handtec() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Handtec" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Handtec Recycling System"
          description="Transforming a legacy application into a fully featured platform"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Handtec;
