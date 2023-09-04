import HeroFeatures from "../../../components/HeroFeatures";
import Stats from "../../../components/Stats";
import Cta from "../../../components/Cta";
import type { Metadata } from "next";
import orderForm from "../../../images/projects/compareandrecycle/orderform.png";
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
        description="Our team has worked on the popular comparison site Compare and Recycle"
      />
      <Stats
        title="Remarkable Performance"
        description="We worked on optimising the application and scaling the hosting to ensure people can place orders at any time of the day as quickly as possible"
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
        description="We used cutting edge technology to provide the client with a fast and responsive website"
        features={[
          {
            title: "Specialist Solutions",
            description:
              "Working on a dynamic order form used by thousands of customers every day to trade in phones across the UK.",
            images: [{ url: orderForm, alt: "Order Form" }],
          },
        ]}
      />
      <Cta
        title="Need to recycle your mobile?"
        description="Head over to their website now!"
        buttonText="Visit the site"
        buttonLink="https://www.compareandrecycle.co.uk/"
      />
    </>
  );
}

export default CompareAndRecycle;
