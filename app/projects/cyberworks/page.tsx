import React from "react";
import HeroFeatures from "../../../components/HeroFeatures";
import Stats from "../../../components/Stats";
import Cta from "../../../components/Cta";
import FeaturesZigzag from "../../../components/FeaturesZigzag";
import player from "../../../images/projects/cyberworks/player.png";
import dashboard from "../../../images/projects/cyberworks/dashboard.png";
import permissions from "../../../images/projects/cyberworks/permissions.png";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Cyberworks",
};

function CyberworksThree() {
  return (
    <main className="flex-grow">
      <HeroFeatures
        title="Cyberworks 3"
        description="We built a system allowing server admins to view and edit players on the Arma 3 Life server."
      />
      <Stats
        title="Used by hundreds of communities"
        description=""
        stats={[
          {
            stat: "~100",
            description: "Commits",
          },
          {
            stat: "6",
            description: "Contributors",
          },
          {
            stat: ">300",
            description: "Downloads",
          },
        ]}
      />
      <FeaturesZigzag
        title="What can it do?"
        description="Our panel was built on our experience with life servers"
        features={[
          {
            title: "Advanced Player Editing",
            description:
              "Our player editing tool allows server admins to change quickly identify any problems as well as quickly help out players",
            images: [{ url: player, alt: "Player Editing" }],
            items: [
              "White Listing",
              "Compensation Requests",
              "Inventory Editing",
            ],
          },
          {
            title: "Useful Dashboard",
            description:
              "We developer a summary dashboard which allows you to quickly see everything a server admin needs",
            images: [{ url: dashboard, alt: "Dashboard" }],
            items: ["Top Players", "Total Players", "Latest Player"],
            right: true,
          },
          {
            title: "Powerful Permissions",
            description:
              "Every community is different so we build our permissions system to be completely customisable",
            images: [{ url: permissions, alt: "Permission Editor" }],
            items: ["Unlimited Groups", "Dynamic Permissions"],
          },
        ]}
      />
      <div className="pb-12 md:pb-20">
        <Cta
          title="Want to use it yourself?"
          description="You can head to our GitHub and download the latest version right now."
          buttonText="Try it now"
          buttonLink="https://github.com/Cyberbyte-Studios/CyberWorks-3"
          showBorderBottom={false}
        />
      </div>
    </main>
  );
}

export default CyberworksThree;
