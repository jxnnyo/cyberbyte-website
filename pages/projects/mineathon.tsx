import React from "react";
import Footer from "../../components/Footer";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import {NextSeo} from "next-seo";
import Header from "../../components/Header";

function Mineathon() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Mineathon" />
      <Header />
      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Mineathon"
          description="A successful charity event raising money for charities backed by an innovative donation platform."
        />
      </main>
      <Footer />
    </div>
  );
}

export default Mineathon;
