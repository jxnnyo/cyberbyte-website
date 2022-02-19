import Footer from "../components/Footer";
import PageIllustration from "../components/PageIllustration";
import Header from "../components/Header";
import {NextSeo} from "next-seo";
import React from "react";

function WebsiteDevelopment() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Website Development" />
      <Header />

      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
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
