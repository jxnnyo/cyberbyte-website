import Footer from "../components/Footer";
import React from "react";
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import CaseStudies from "../components/CaseStudies";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo description="Cyberbyte Software is a bespoke web hosting and development company able to deliver your most ambitious projects" />

      {/*<Header />*/}

      <main className="flex-grow">
        <HeroHome />
        <Features />
        <CaseStudies
          title="What we have worked on"
          description="We have worked with a wide range of clients on a number of different projects. Below is a small sample of our projects:"
          cases={[
            {
              image: "/images/projects/cyberworks/original.jpg",
              title: "Cyberworks",
              description:
                "A popular open source tool which allows you to manage Arma 3 Life servers with ease. Used by hundreds of communities to manage players and aid community support.",
              link: "/projects/cyberworks3",
            },
            {
              image: "/images/projects/pillar.jpg",
              title: "Living Pillars",
              description:
                "Helping improve urban environments with sensors to monitor plants placed around London.",
              link: "/projects/living-pillars",
            },
            // {
            //   image: "/images/projects/car.png",
            //   title: "Compare and Recycle",
            //   description:
            //     "The UK's number 1 recycling comparison site. We helped build a scalable platform to handle thousands of requests and improve customer satisfaction.",
            //   link: "/projects/compare-and-recycle",
            // },
            {
              image: "/images/projects/mineathon.jpg",
              title: "Mineathon",
              description:
                "A charity live streaming website to collect donations. Built in Laravel complete with an admin area to manage the event. We later published the source code on GitHub.",
              link: "/projects/mineathon",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
