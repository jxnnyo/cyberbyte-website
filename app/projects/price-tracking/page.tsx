import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import price from "../../../images/projects/price-tracking/grid.png"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competitor Price Tracking",
};

function PriceTracking() {
  return (
    <>
      <HeroFeatures
        title="Competitor Price Tracking"
        description="We have built a specilist price tracking tool for the construction industry"
        images={[{url: price, alt: "Price Grid"}]}
      />
      <Cta
        title="Would you like to learn more about optimizing your pricing?"
        description="Reach out to our team and find out more about what we can do"
        buttonText="Contact us"
        buttonLink="/contact"
        buttonInternal={true}
        showBorderBottom={false}
      />
    </>
  );
}

export default PriceTracking;
