import Head from 'next/head'
import Footer from "../../components/Footer";
import React from 'react';
import HeroHome from "../../components/HeroHome";
import Features from "../../components/Features";
import CaseStudies from "../../components/CaseStudies";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import Stats from "../../components/Stats";
import Cta from "../../components/Cta";
import {NextSeo} from "next-seo";
import Header from "../../components/Header";
import FeaturesZigzag from "../../components/FeaturesZigzag";

function CyberworksThree() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo title="Cyberworks 3"/>
      <Header/>
      <main className="flex-grow">
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration/>
        </div>

        <HeroFeatures title="Cyberworks 3"
                      description="Our longest project which allowed server admins to view and edit players on the Arma 3 Life server. "/>
        <Stats title="Used by hundreds of communities" description="" stats={[
          {
            stat: "~100",
            description: "Commits"
          },
          {
            stat: "6",
            description: "Contributors"
          },
          {
            stat: ">300",
            description: "Downloads"
          }
        ]}/>
        <FeaturesZigzag
          title="What can it do?"
          description="Our panel was built on our experience with life servers"
          features={[{
            title: "Advanced Player Editing",
            description: "Our player editing tool allows server admins to change quickly identify any problems as well as quickly help out players",
            image: "/images/cyberworks/player.png",
            items: ["White Listing", "Compensation Requests", "Inventory Editing"]
          }, {
            title: "Useful Dashboard",
            description: "We developer a summary dashboard which allows you to quickly see everything a server admin needs",
            image: "/images/cyberworks/dashboard.png",
            items: ["Top Players", "Total Players", "Latest Player"],
            right: true
          }, {
            title: "Powerful Permissions",
            description: "Every community is different so we build our permissions system to be completely customisable",
            image: "/images/cyberworks/permissions.png",
            items: ["Unlimited Groups", "Dynamic Permissions"]
          }]}/>
        {/*<FeaturesBlocks />*/}
        {/*<CaseStudies />*/}
        <Cta title="Want to use it yourself?"
             description="You can head to our GitHub and download the latest version right now." buttonText="Try it now"
             buttonLink="https://github.com/Cyberbyte-Studios/CyberWorks-3"/>

      </main>
      <Footer/>
    </div>
  )
}

export default CyberworksThree;