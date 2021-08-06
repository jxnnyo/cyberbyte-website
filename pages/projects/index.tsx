import Footer from "../../components/Footer";
import React from "react";
import CaseStudies from "../../components/CaseStudies";
import PageIllustration from "../../components/PageIllustration";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";
import cyberworks from "../../images/projects/cyberworks/dashboard.png";
import cyberworksOriginal from "../../images/projects/cyberworks/original.jpg";
import pillar from "../../images/projects/pillar.jpg";
import mineathon from "../../images/projects/mineathon.jpg";
import launcher from "../../images/projects/launcher.png";
import bth from "../../images/projects/bth.png";
import camoradaHomepage from "../../images/projects/merchant-recycling/camorada-home.jpg";
import enveriline from "../../images/projects/landing-pages/enveriline.jpg";

function Projects() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Our Projects" />
      <Header />
      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <CaseStudies
          title="Our Projects"
          description="We have worked on a number of challenging projects. Below are just a few:"
          cases={[
            {
              image: camoradaHomepage,
              title: "Recycling Merchant Websites",
              description:
                "Are you a recycling merchant in need of a website? Let us know! We are using our industry experience to produce cutting edge websites for recycling merchants.",
              link: "/projects/merchant-recycling",
            },
            {
              image: enveriline,
              title: "Static Websites and Landing Pages",
              description:
                "Need a static website or landing page for your company? We make websites of various designs to fit any specification.",
              link: "/projects/landing-pages",
            },            
            {
              image: cyberworks,
              title: "Cyberworks 3",
              description:
                "A popular open source tool which allows you to manage Arma 3 Life servers with ease. Used by hundreds of communities to manage players and aid community support.",
              link: "/projects/cyberworks3",
            },
            // {
            //   image: "/images/projects/car.png",
            //   title: "Compare and Recycle",
            //   description:
            //     "The UK's number 1 recycling comparison site. We helped build a scalable platform to handle thousands of requests and improve customer satisfaction.",
            //   link: "/projects/compare-and-recycle",
            // },
            {
              image: pillar,
              title: "Living Pillars",
              description: "We are helping to improve our urban environments with sensors that monitor and maintain plants in living pillars. We already have them around London and Liverpool.",
              link: "/projects/living-pillars",
            },
            {
              image: mineathon,
              title: "Mineathon",
              description:
                "A charity live streaming website designed to collect donations. Built in Laravel, complete with an admin area to manage the event. We have published the source code on GitHub. Check it out!",
              link: "/projects/mineathon",
            },
            {
              image: bth,
              title: "Bid That Home",
              description: "This website and iOS app allowed users to place bids on properties not yet on the market.",
              link: "/projects/bid-that-home",
            },
/*            {
              image: "/images/projects/handtec.png",
              title: "Handtec",
              description: "",
              link: "/projects/handtec",
            },*/
            {
              image: cyberworksOriginal,
              title: "Life Control",
              description: "The original database administration panel for Arma 3 Life Servers.",
              link: "/projects/life-control"
            },
/*            {
              image: launcher,
              title: "Arma Launcher",
              description: "",
            },*/
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
