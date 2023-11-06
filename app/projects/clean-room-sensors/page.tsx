import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import type { Metadata } from "next";
import cleanRoom from "../../../images/projects/clean-room/clean-room.jpg";
import cleanRoom2 from "../../../images/projects/clean-room/clean-room-2.jpg";
import FeaturesZigzag from "../../../components/FeaturesZigzag";

export const metadata: Metadata = {
  title: "Clean Room Sensors",
};

function CleanRoomSensors() {
  return (
    <>
      <HeroFeatures
        title="Clean Room Sensors"
        images={[{ url: cleanRoom, alt: "Clean Room Sensors" }]}
        description="Improving the safety of clean rooms, we worked with our client to build sensors and a monitoring platform that can measure particulate matter within HVAC systems."
      />
      <FeaturesZigzag
        title="What can it do?"
        description=""
        features={[
          {
            title: "Advanced PM Monitoring",
            description:
              "Our system reliably tracks real time particulate matter levels measured by the sensors within HVAC systems.",
            images: [{ url: cleanRoom2, alt: "" }],
            items: [
              "Real time tracking",
              "Automatic alerts",
              "Fault detection",
            ],
          },
        ]}
      />
      <div className="pb-12 md:pb-20">
      <Cta
        title="Have a specialist sensor project?"
        description="Reach out to our team and find out how we can help."
        buttonText="Contact us"
        buttonLink="/contact"
        buttonInternal={true}
        showBorderBottom={false}
      />
      </div>
    </>
  );
}

export default CleanRoomSensors;
