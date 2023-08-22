import React from "react";
import PageIllustration from "../../../components/PageIllustration";
import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handtec",
  description: "",
};

function Handtec() {
  return (
    <div className="flex flex-col overflow-hidden">
      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Handtec Recycling System"
          description="Transforming a legacy application into a fully featured platform"
        />
        <div className="pb-12 md:pb-20">
          <Cta
            title="Learn more about Handtec"
            description="To hear about the bespoke system we have been working on please contact us."
            buttonText="Contact us"
            buttonLink="/contact"
            buttonInternal={true}
            showBorderBottom={false}
          />
        </div>
      </main>
    </div>
  );
}

export default Handtec;
