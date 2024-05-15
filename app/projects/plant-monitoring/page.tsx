import React from "react";
import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import FeaturesZigzag from "../../../components/FeaturesZigzag";
import network from "../../../images/projects/plant-monitoring/network.jpeg";
import security from "../../../images/projects/plant-monitoring/security.jpeg";
import updates from "../../../images/projects/plant-monitoring/updates.jpeg";
import watering from "../../../images/projects/plant-monitoring/watering.jpeg";
import meshd from "../../../images/projects/plant-monitoring/mesh.jpeg";
import solar from "../../../images/projects/plant-monitoring/solar.jpeg";
import greenwall from "../../../images/projects/plant-monitoring/greenwall.jpeg";
import dashboard from "../../../images/projects/plant-monitoring/dashboard-dark.jpg";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Generation Plant Monitoring",
};

function NextGenPlants() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <main className="flex-grow">
        <HeroFeatures
          title="Next Generation Plant Monitoring"
          images={[{ url: greenwall, alt: "Next Generation Plant Monitoring" }]}
          description="Our next generation plant monitoring platform is an evolutionary step forward in plant monitoring systems. Designed to efficiently oversee a range of urban greening installations; such as green walls and living pillars."
        />
        <FeaturesZigzag
          title="Hardware Features"
          description="Our sensors have been developed using the latest technologies available in IOT devices. By using the latest technologies our units are designed for longterm reliable useage whilst retaining deployment flexibility."
          features={[
            {
              title: "LTE-M",
              description:
                "LTE-M is a new network technology being deployed as a long-term replacement for the 2G network, designed with support for IOT applications." +
                  "\n Our units connect over multiple LTE-M bands, enabling them to function across the EU and America.\n" +
                  "\n" +
                  "By partnering with an IoT SIM provider, we are able to use SIM cards that can roam globally across various networks, picking the provider with the strongest signal. This provides our devices with reliable LTE connectivity without the hassle of individual contracts with multiple network providers.\n",
              images: [{ url: network, alt: "Dashboard" }],
              items: [
                "Future Proof",
                "Global Sims",
                "Multiple LTE-M Bands",
                "Multiple Networks",
              ],
            },
            {
              right:true,
              title: "Flexible Power Sources",
              description:
                  "Our sensor units feature specially selected components optimised for lower power draw. Resulting in reduced power consumption and provides the ability for devices to be powered from a variety of sources such as batteries, solar or even hardwired.",
              images: [{ url: solar, alt: "Flexible Power" }],
              items: [
                "Battery",
                "Solar",
                "Hardwired"
              ],
            },
            {
              title: "Bluetooth Mesh Peripherals",
              description:
                  "Our platform is built around a master unit with a bluetooth mesh of peripherals which enables easy placement of sensors within a deployment without the need for cabling.",
              images: [{ url: meshd, alt: "Bluetooth Mesh" }],
            },
            {
                right:true,
                title: "Security",
                description:
                    "Leveraging both Arm TrustZone and Arm CryptoCell-310 to achieve PSA Level 2 certification. All communication with the master is transmitted via DTLS, ensuring data integrity and device security.\n" +
                    "\n" +
                    "Our devices are equipped with secure boot mechanisms to prevent unauthorised firmware updates and ensure only trusted software runs on our units.\n",
                images: [{ url: security, alt: "Bluetooth Mesh" }],
                items: [
                    "PSA Level 2",
                    "ARM TrustZone",
                    "ARM CryptoCell-310",
                    "Secure Boot"
                ],
            },
            {
              title: "Remote Updates & Configuration",
              description:
                  "Our units check with our platform for updates to their firmware or configuration. This allows our devices to improve overtime with new firmware features and additional capabilities without requiring on-site intervention from a technician. Issues can be remotely diagnosed and rectified quickly and securely, reducing costs and increasing longevity.",
              images: [{ url: updates, alt: "Remote updates" }],
                items: [
                    "Remote Diagnostics",
                    "Remote Updates",
                ],
            },
          ]}
        />
          <FeaturesZigzag
              title="Platform Features"
              description="We have been developing our own bespoke monitoring platform to handle readings, configuration and more for our units."
              features={[
                  {
                      title: "Watering Schedules",
                      description:
                          "Our management interface allows you to build watering schedules for an entire site as well as customise them per unit. These schedules are downloaded onto the master unit and will operate on each device even if it becomes disconnected from the network.",
                      images: [{ url: watering, alt: "Dashboard" }],
                      items: [
                          "Seasonal Schedules",
                          "Custom Duration",
                      ],
                  },
                  {
                      right:true,
                      title: "Detailed Device Overview",
                      description:
                          "Each device has its own overview dashboard. On this page you can view any alerts issued by the device as well as a summary of it’s recent actions. It also contains a number of graphs for the available metrics.",
                      images: [{ url: dashboard, alt: "Device Overview" }],
                      items: [
                          "Temperature and Humidity",
                          "Tank Level",
                          "Battery Level",
                          "Soil Moisture",
                          "Soil Temperature",
                          "Flow Rate"
                      ],
                  },
              ]}
          />
        <div className="pb-12 md:pb-20">
          <Cta
            title="Interested?"
            description="Reach out to us for more details on our next generation platform."
            buttonText="Contact us"
            buttonLink="/contact"
            showBorderBottom={false}
          />
        </div>
      </main>
    </div>
  );
}

export default NextGenPlants;
