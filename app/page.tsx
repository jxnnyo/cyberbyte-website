import Footer from "../components/Footer";
import React from "react";
import Navigation from "../components/Navigation";
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import CaseStudies from "../components/CaseStudies";
// import {LogoJsonLd, NextSeo} from "next-seo";
import Cta from "../components/Cta";
import cyberworks from "../images/projects/cyberworks/dashboard.png";
import recycling from "../images/projects/merchant-recycling/clove-home.png";
import car from "../images/projects/car.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* <NextSeo description="Cyberbyte Software is a bespoke web hosting and development company able to deliver your most ambitious projects" /> */}
      {/* <LogoJsonLd
        logo="https://cyberbyte.software/images/logo-square.png"
        url="https://cyberbyte.software"
      /> */}

      {/*<Header />*/}

      <main className="flex-grow">
        <Navigation />
        <HeroHome />
        <CaseStudies
          cases={[
            {
              image: recycling,
              title: "Recycling Merchant Websites",
              description:
                "Are you a recycling merchant in need of a website? Let us know! We are using our industry experience to produce cutting edge websites for recycling merchants.",
              link: "/projects/merchant-recycling",
            },
            // {
            //   image: enveriline,
            //   title: "Static Websites and Landing Pages",
            //   description:
            //     "Need a static website or landing page for your company? We make websites of various designs to fit any specification.",
            //   link: "/projects/landing-pages",
            // },
            {
              image: cyberworks,
              title: "Cyberworks 3",
              description:
                "A popular open source tool which allows the management of Arma 3 Life servers with ease. It is used by hundreds of communities to manage players and aid community support.",
              link: "/projects/cyberworks3",
            },
            // {
            //  image: pillar,
            //  title: "Living Pillars",
            //  description:
            //    "We are helping to improve our urban environments with sensors that monitor and maintain plants in living pillars. We already have them around London and Liverpool.",
            //  link: "/projects/living-pillars",
            // },
            {
              image: car,
              title: "Compare and Recycle",
              description:
                "The UK's number 1 recycling comparison site. We helped build a scalable platform to help merchants and improve customer satisfaction.",
              link: "/projects/compare-and-recycle",
            },
            // {
            //  image: mineathon,
            //  title: "Mineathon",
            //  description:
            //    "A charity live streaming website designed to collect donations. Built in Laravel, complete with an admin area to manage the event. We have published the source code on GitHub. Check it out!",
            //  link: "/projects/mineathon",
            // },
          ]}
        />
        <Cta
          title="Check out our other projects!"
          description=""
          buttonText="See projects"
          buttonLink="/projects"
          buttonInternal={true}
          showBorder={false}
        />
        {/*<Features
          features={[
            {
              title: "Software Consulting",
              description:
                "Starting a new project, or need help in the middle of an existing one? Contact us! We would love to share our experience.",
              icon: (
                <svg
                  className="mb-4 h-16 w-16"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-primary"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <path
                    className="text-purple-300 stroke-current"
                    strokeWidth="2"
                    strokeLinecap="square"
                    d="M21 23h22v18H21z"
                    fill="none"
                    fillRule="evenodd"
                  />
                  <path
                    className="text-purple-100 stroke-current"
                    d="M26 28h12M26 32h12M26 36h5"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              ),
            },
            {
              title: "Website Development",
              description:
                "Anything from custom database structures and admin areas, to single page applications we have got it covered.",
              icon: (
                <svg
                  className="mb-4 h-16 w-16"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-primary"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g fill="none" fillRule="evenodd">
                    <path
                      className="text-purple-300 stroke-current"
                      d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                    <path
                      className="text-purple-100 stroke-current"
                      strokeWidth="2"
                      strokeLinecap="square"
                      d="M36 32l-4-3-4 3V22h8z"
                    />
                  </g>
                </svg>
              ),
            },
            {
              title: "Bespoke Hosting",
              description:
                "We use Kubernetes clusters to ensure our clients apps are fault tolerant and can handle any traffic spikes without an issue.",
              icon: (
                <svg
                  className="mb-4 h-16 w-16"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-primary"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <path
                    className="text-purple-300 stroke-current"
                    strokeWidth="2"
                    strokeLinecap="square"
                    d="M21 35l4 4 12-15"
                    fill="none"
                    fillRule="evenodd"
                  />
                  <path
                    className="text-purple-100 stroke-current"
                    d="M42 29h-3M42 34h-7M42 39H31"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              ),
            },
          ]}
        />*/}
      </main>
      <Footer />
    </div>
  );
}
