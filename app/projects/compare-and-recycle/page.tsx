import HeroFeatures from "../../../components/HeroFeatures";
import Stats from "../../../components/Stats";
import Cta from "../../../components/Cta";
import type { Metadata } from "next";
import orderForm from "../../../images/projects/compareandrecycle/orderform.png";
import car from "../../../images/projects/compareandrecycle/car.png";
import FeaturesZigzag from "../../../components/FeaturesZigzag";
import React from "react";

export const metadata: Metadata = {
  title: "Compare and Recycle",
};

function CompareAndRecycle() {
  return (
    <>
      <HeroFeatures
        title="Compare and Recycle"
        images={[{ url: car, alt: "Compare and Recycle" }]}
        description="Our developers have worked alongside the team at the UK's number 1 recycling comparison site, Compare and Recycle. We helped build a scalable platform to help merchants and improve customer satisfaction."
      />
      <Stats
        title="Remarkably Optimised"
        description="We worked on optimising the application and scaling the hosting to ensure people can place orders at any time of the day, quickly and issue free."
        stats={[
          {
            stat: ">600k",
            description: "Daily Requests",
          },
          {
            stat: ">3000",
            description: "Commits",
          },
          {
            stat: "99.999%",
            description: "Uptime",
          },
        ]}
      />
      <FeaturesZigzag
        title="World Class Performance"
        description="We used cutting edge technology to deliver a fast and responsive website."
        features={[
          {
            title: "Specialist Solutions",
            description:
              "We developed a dynamic order form used by thousands of customers every day to trade in phones across the UK.",
            images: [{ url: orderForm, alt: "Order Form" }],
          },
        ]}
      />
      <div className="pb-12 md:pb-20">
      <Cta
        title="Need to recycle your mobile?"
        description="Head over to their website now!"
        buttonText="Visit their site"
        buttonLink="https://www.compareandrecycle.co.uk/"
        showBorderBottom={false}
      />
      </div>
    </>
  );
}

export default CompareAndRecycle;
