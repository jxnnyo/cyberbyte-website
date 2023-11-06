import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import price from "../../../images/projects/price-tracking/grid.png"
import type { Metadata } from "next";
import FeaturesZigzag from "../../../components/FeaturesZigzag";

export const metadata: Metadata = {
  title: "Competitor Price Tracking",
};

function PriceTracking() {
  return (
    <>
      <HeroFeatures
        title="Competitive Price Tracking"
        description="We have built a specilist price tracking tool for our client in the construction industry that tracks competitors prices on materials, allowing our client to develop an optimised pricing strategy."
        images={[{url: price, alt: "Price Grid"}]}
      />
       <FeaturesZigzag
        title="What can it do?"
        description=""
        features={[
          {
            title: "Advanced Scraping",
            description:
              "We designed a bespoke scraping system that takes prices from competitors sites, allowing for our client to remain competitive.",
            images: [{ url: price, alt: "" }],
            items: [
              "Individual item scraping",
              "Competitive price analysis",
            ],
          },
        ]}
      />
      <div className="pb-12 md:pb-20">
      <Cta
        title="Would you like to learn more about optimising your pricing?"
        description="Reach out to our team and find out more about what we can do."
        buttonText="Contact us"
        buttonLink="/contact"
        buttonInternal={true}
        showBorderBottom={false}
      />
      </div>
    </>
  );
}

export default PriceTracking;
