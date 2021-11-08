import Footer from "../components/Footer";
import PageIllustration from "../components/PageIllustration";
import Header from "../components/Header";
import { NextSeo } from "next-seo";
import React from "react";
import HeroFeatures from "../components/HeroFeatures";

function WebsiteDevelopment() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Website Development" />
      <Header />

      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*        <HeroFeatures
          title="Professional Software Consulting"
          description="Our team work closely with a number of clients to successfully deliver projects"
        />*/}
      </main>
      <Footer />
    </div>
  );
}

export default WebsiteDevelopment;
