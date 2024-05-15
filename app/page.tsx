import React from "react";
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import CaseStudies from "../components/CaseStudies";
import Cta from "../components/Cta";
import pillar from "../images/projects/living-pillars/pillar.jpg";
import recycling from "../images/projects/merchant-recycling/home/handtec.png";
import car from "../images/projects/compareandrecycle/car.png";
import greenwall from "../images/projects/plant-monitoring/greenwall.jpeg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyberbyte Software Development",
  description:
    "Cyberbyte Software is a specialist software and hardware development company able to deliver your most ambitious projects. We have a wide range of experience in software development, custom hardware solutions, and mobile phone recycling websites.",
};

export default function Home() {
  return (
    <>
      <HeroHome />
      <Features
        title="What We Do"
        description="Here at Cyberbyte Software, our main goal is ensuring that we deliver our clients an exceptional finished product. Below are some of our specialties."
        features={[
          {
            title: "Software Development",
            description:
              "With an experienced team of developers, we can offer a wide range of software solutions to fit your requirements. If your just looking for advice, we also offer consultancy.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                style={{ fill: "#fff" }}
                viewBox="0 0 640 512"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
            ),
          },
          {
            title: "Custom Hardware Solutions",
            description:
              "Our experienced team of engineers deliver bespoke hardware solutions, including PCB design and manufacturing consultancy for our clients.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                style={{ fill: "#fff" }}
                viewBox="0 0 512 512"
              >
                <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" />
              </svg>
            ),
          },
          {
            title: "Mobile Phone Recycling Websites",
            description:
              "We work closely with the industry leading mobile comparison site 'Compare and Recycle' and many merchants to deliver bespoke websites to our clients.",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                style={{ fill: "#fff" }}
                viewBox="0 0 512 512"
              >
                <path d="M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z" />
              </svg>
            ),
          },
        ]}
      />
      <CaseStudies
        title="Our Projects"
        description="Our team has worked on a wide variety of projects. Below is just a handful."
        cases={[
          {
            image: recycling,
            title: "Recycling Merchant Websites",
            description:
              "Are you a recycling merchant in need of a website? Let us know! We are using our industry experience to produce cutting edge websites for recycling merchants.",
            link: "/projects/recycling-merchant-websites",
          },
          {
            image: greenwall,
            title: "Next Generation Plant Monitoring",
            description: "Building atop our previous units deployed across the UK, we are now working on a next generation monitoring system.",
            link: "/projects/plant-monitoring",
          },
          {
            image: car,
            title: "Compare and Recycle",
            description:
              "The UK's number 1 recycling comparison site. We helped build a scalable platform to help merchants and improve customer satisfaction.",
            link: "/projects/compare-and-recycle",
          },
        ]}
      />
      <div className="pb-12 md:pb-20">
        <Cta
          title="Check out our other projects!"
          buttonText="See projects"
          buttonLink="/projects"
          buttonInternal={true}
          showBorderBottom={false}
        />
      </div>
    </>
  );
}
