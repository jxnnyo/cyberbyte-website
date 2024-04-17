import React from "react";
import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import FeaturesZigzag from "../../../components/FeaturesZigzag";
import pillar from "../../../images/projects/living-pillars/pillar.jpg";
import dashboard from "../../../images/projects/scotscape/dashboard.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living Pillars",
};

function LivingPillars() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <main className="flex-grow">
        <HeroFeatures
          title="Living Pillars"
          images={[{ url: pillar, alt: "Living Pillar" }]}
          description="Our skilled team of software developers and engineers collaborated to deliver our clients sensors that have ensured plants remain correctly watered in all conditions, removing the need for manual care and allowing clients to view the current plant conditions via a live dashboard remotely."
        />
        <FeaturesZigzag
          title="Transforming Urban Greening"
          description="By using this cutting edge remote monitoring technology, we can not only help reduce pollution and add colour to our streets, but mitigate the manual labour that would otherwise be needed and get large urban areas like London looking greener."
          features={[
            {
              title: "Complete Control",
              description:
                "Our web interface allows gardeners and technicians to control and monitor plant conditions remotely. Below is a list of what our sensors currently monitor and control.",
              images: [{ url: dashboard, alt: "Dashboard" }],
              items: [
                "Ambient and Soil Temperature",
                "Soil Moisture",
                "Water Tank Level",
                "Water Pump",
              ],
            },
          ]}
        />
        <div className="pb-12 md:pb-20">
          <Cta
            title="Interested in Living Pillars?"
            description="Reach out to us for more details on how our sensors are helping to transform urban environments."
            buttonText="Contact us"
            buttonLink="/contact"
            showBorderBottom={false}
          />
        </div>
      </main>
    </div>
  );
}

export default LivingPillars;
