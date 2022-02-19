import Footer from "../components/Footer";
import PageIllustration from "../components/PageIllustration";
import Header from "../components/Header";
import {NextSeo} from "next-seo";
import React from "react";
import HeroFeatures from "../components/HeroFeatures";
import Features from "../components/Features";

function BespokeHosting() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Bespoke Hosting" />
      <Header />

      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Bespoke Hosting Solutions"
          description="Our team work closely with a number of clients to successfully deliver projects"
        />

        <Features
          features={[
            {
              title: "AWS",
              description:
                "The industry standard choice for not just web applications but all of your cloud computing needs",
            },
            {
              title: "GCP",
              description:
                "Our preferred cloud platform with innovative networks and great performance",
            },
            {
              title: "Digital Ocean",
              description:
                "Ideal for small companies Digital Oceans simple pricing model makes it easy to predict and manage costs.",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default BespokeHosting;
