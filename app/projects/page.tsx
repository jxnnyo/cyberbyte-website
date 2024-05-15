import React from "react";
import CaseStudies from "../../components/CaseStudies";
import cyberworks from "../../images/projects/cyberworks/dashboard.png";
import pillar from "../../images/projects/living-pillars/pillar.jpg";
import car from "../../images/projects/compareandrecycle/car.png";
import handtec from "../../images/projects/handtec/handtec.png";
import cleanRoom from "../../images/projects/clean-room/clean-room.jpg";
import handtecHomepage from "../../images/projects/merchant-recycling/home/handtec.png";
import priceTracking from "../../images/projects/price-tracking/grid.png";
import greenwall from "../../images/projects/plant-monitoring/greenwall.jpeg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Our team has worked on a wide variety of projects. As specialists in both software and hardware solutions we work closely with each client to help achieve there project goals.",
};

export default function Projects() {
  return (
    <>
      <CaseStudies
        title="Our Projects"
        description="Our team has worked on a wide variety of projects. Below is just a handful."
        cases={[
          {
            image: handtecHomepage,
            title: "Recycling Merchant Websites",
            description:
              "Are you a recycling merchant in need of a website? Let us know! We are using our industry experience to produce cutting edge websites for recycling merchants.",
            link: "/projects/recycling-merchant-websites",
          },
          {
            image: greenwall,
            title: "Next Generation Plant Monitoring",
            description:
              "Building atop our previous units deployed across the UK, we are now working on a next generation monitoring system.",
            link: "/projects/plant-monitoring",
          },
          {
            image: car,
            title: "Compare and Recycle",
            description:
              "The UK's number 1 recycling comparison site. We helped build a scalable platform to handle thousands of requests and improve customer satisfaction.",
            link: "/projects/compare-and-recycle",
          },
          {
            image: cleanRoom,
            title: "Clean Room Sensors",
            description:
              "We have developed and produced sensors that measure particulate matter within HVAC systems in order to monitor its level and detect faults which alert engineers.",
            link: "/projects/clean-room-sensors",
          },
          {
            image: handtec,
            title: "Handtec Part Management",
            description:
              "We built a part management system for a recycling merchant that tracks devices individually, organising what replacement parts are required for each of them to be refurbished.",
            link: "/projects/handtec-part-management",
          },
          {
            image: pillar,
            title: "Living Pillars",
            description:
              "We are helping to improve our urban environments with sensors that monitor and maintain plants in living pillars. We already have them around London and Liverpool.",
            link: "/projects/living-pillars",
          },
          {
            image: priceTracking,
            title: "Competitive Price Tracking",
            description:
              "We developed a custom price tracking solution allowing our client to view prices across the entire market and develop an optimised pricing strategy.",
            link: "/projects/competitive-price-tracking",
          },
          {
            image: cyberworks,
            title: "Cyberworks 3",
            description:
              "A popular open source tool which allows you to manage Arma 3 Life servers with ease. Used by hundreds of communities to manage players and aid community support.",
            link: "/projects/cyberworks-3",
          },
        ]}
      />
    </>
  );
}
