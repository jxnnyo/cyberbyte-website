import React from "react";
import PageIllustration from "../../../components/PageIllustration";
import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import type { Metadata } from "next";
import handtec from "../../../images/projects/handtec/handtec.png";
import FeaturesZigzag from "../../../components/FeaturesZigzag";

export const metadata: Metadata = {
  title: "Handtec",
};

function Handtec() {
  return (
    <div className="flex flex-col overflow-hidden">
      <main className="flex-grow">
        <HeroFeatures
          title="Handtec Part Management"
          images={[{ url: handtec, alt: "Handtec Part Management" }]}
          description="We built a part management system for Handtec that tracks devices individually, organising what replacement parts are required for each of them to be refurbished."
        />
        <FeaturesZigzag
        title="What can it do?"
        description=""
        features={[
          {
            title: "Advanced Part Tracking",
            description:
              "Our system allows our client to easily update the replacement parts a device needs, allows easy ordering of the parts and makes tracking their progress easy.",
            images: [{ url: handtec, alt: "" }],
            items: [
              "Individual device tracking",
              "Simple device editing",
              "Easy ordering system",
            ],
          },
        ]}
      />
        <div className="pb-12 md:pb-20">
          <Cta
            title="Need your own bespoke system?"
            description="If you're interested in how we could help you with your own bespoke system, drop us a message and we will get back to you shortly."
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
