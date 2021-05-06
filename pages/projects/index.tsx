import Footer from "../../components/Footer";
import React from "react";
import CaseStudies from "../../components/CaseStudies";
import PageIllustration from "../../components/PageIllustration";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";

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
              image: "/images/projects/cyberworks/original.jpg",
              title: "Cyberworks",
              description:
                "A popular open source tool which allows you to manage Arma 3 Life servers with ease. Used by hundreds of communities to manage players and aid community support.",
              link: "/projects/cyberworks3",
            },
            {
              image: "/images/projects/car.png",
              title: "Compare and Recycle",
              description:
                "The UK's number 1 recycling comparison site. We helped build a scalable platform to handle thousands of requests and improve customer satisfaction.",
              link: "/projects/compare-and-recycle",
            },
            {
              image: "/images/projects/mineathon.jpg",
              title: "Mineathon",
              description:
                "A charity live streaming website to collect donations. Built in Laravel complete with an admin area to manage the event. We later published the source code on GitHub.",
              link: "/projects/mineathon",
            },
            {
              image: "/images/projects/pillar.jpg",
              title: "Living Pillars",
              description: "",
              link: "/projects/living-pillars",
            },
            {
              image: "/images/projects/bth.png",
              title: "Bid That Home",
              description: "",
              link: "/projects/bid-that-home",
            },
            {
              image: "/images/projects/handtec.png",
              title: "Handtec",
              description: "",
              link: "/projects/handtec",
            },
            {
              image: "/images/projects/launcher.png",
              title: "Arma Launcher",
              description: "",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
