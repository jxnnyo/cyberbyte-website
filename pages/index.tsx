import Footer from "../components/Footer";
import React from "react";
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";
import CaseStudies from "../components/CaseStudies";
import {LogoJsonLd, NextSeo} from "next-seo";
import cyberworks from "../images/projects/cyberworks/original.jpg";
import s20adminarea from "../images/projects/merchant-recycling/s20-admin-area.jpg";
import enveriline from "../images/projects/landing-pages/enveriline.jpg";
import pillar from "../images/projects/pillar.jpg";
import mineathon from "../images/projects/mineathon.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo description="Cyberbyte Software is a bespoke web hosting and development company able to deliver your most ambitious projects" />
      <LogoJsonLd logo="https://cyberbyte.software/images/logo-square.png" url="https://cyberbyte.software"/>

      {/*<Header />*/}

      <main className="flex-grow">
        <HeroHome />
        <Features features={[
          {
            title: "Software Consulting",
            description: "Starting a new project, or need help in the middle of an existing one? Contact us! We would love to share our experience.",
            icon: (<svg
                className="w-16 h-16 mb-4"
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
                  className="stroke-current text-purple-300"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>)
          },
          {
            title: "Website Development",
            description: "Anything from custom database structures and admin areas, to single page applications we have got it covered.",
            icon: (<svg
                className="w-16 h-16 mb-4"
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
                    className="stroke-current text-purple-300"
                    d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    strokeWidth="2"
                    strokeLinecap="square"
                    d="M36 32l-4-3-4 3V22h8z"
                  />
                </g>
              </svg>)
          },
          {
            title: "Bespoke Hosting",
            description: "We use Kubernetes clusters to ensure our clients apps are fault tolerant and can handle any traffic spikes without an issue.",
            icon: (<svg
                className="w-16 h-16 mb-4"
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
                  className="stroke-current text-purple-300"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 35l4 4 12-15"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M42 29h-3M42 34h-7M42 39H31"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>)
          }
        ]} />
        <CaseStudies
          title="What we have worked on"
          description="We have worked with a wide range of clients, on a number of different project types. Below is a small sample of our projects:"
          cases={[
            {
              image: s20adminarea,
              title: "Recycling Merchant Websites",
              description:
                "Are you a recycling merchant in need of a website? Let us know! We are using our industry experience to produce cutting edge websites for recycling merchants.",
              link: "/projects/merchant-recycling",
            },
            {
              image: enveriline,
              title: "Landing Pages",
              description:
                "Need a landing page for your company? We create landing pages of various designs to fit any specification.",
              link: "/projects/landing-pages",
            },
            {
              image: cyberworks,
              title: "Cyberworks",
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
            // {
            //   image: "/images/projects/car.png",
            //   title: "Compare and Recycle",
            //   description:
            //     "The UK's number 1 recycling comparison site. We helped build a scalable platform to handle thousands of requests and improve customer satisfaction.",
            //   link: "/projects/compare-and-recycle",
            // },
            // {
            //  image: mineathon,
            //  title: "Mineathon",
            //  description:
            //    "A charity live streaming website designed to collect donations. Built in Laravel, complete with an admin area to manage the event. We have published the source code on GitHub. Check it out!",
            //  link: "/projects/mineathon",
            // },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
