import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Room Sensors",
};

function CleanRoomSensors() {
  return (
    <>
      <HeroFeatures
        title="Clean Room Sensors"
        description="Improving the safety of clean rooms, we worked with our client to design a monitoring platform."
      />
      <Cta
        title="Got a specilist hardware project?"
        description="Reach out to our team and find out more about what we can do"
        buttonText="Contact us"
        buttonLink="/contact"
        buttonInternal={true}
        showBorderBottom={false}
      />
    </>
  );
}

export default CleanRoomSensors;
