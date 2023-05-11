import Footer from "../../components/Footer";
import React from "react";
import PageIllustration from "../../components/PageIllustration";
import HeroFeatures from "../../components/HeroFeatures";
import {NextSeo} from "next-seo";
import Header from "../../components/Header";
import Cta from "../../components/Cta";
import FeaturesZigzag from "../../components/FeaturesZigzag";
import pillar from "../../images/projects/pillar.jpg";
import dashboard from "../../images/projects/scotscape/dashboard.png";

function LivingPillars() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Living Pillars" />
      <Header />
      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <HeroFeatures
          title="Living Pillars"
          images={[{ url: pillar, alt: "Living Pillar" }]}
          description="We have worked to design and manufacturer sensors to help monitor plant growth. Our sensors help keep plants watered in all conditions and informs maintenance teams of any issues reducing the need for onsite visits."
        />
        <FeaturesZigzag
          title="Transforming Urban Greening"
          description="By using technology we can not only help reduce pollution and add colour to our streets but we can monitor the success and keep London looking greener"
          features={[
            {
              title: "Complete Control",
              description:
                "Our web interface allows technicians to control and monitor sensors each sensors",
              images: [{ url: dashboard, alt: "Dashboard" }],
              items: [
                "Water Monitoring",
                "Temperature Monitoring",
                "Latest Player",
              ],
            },
          ]}
        />
        <Cta
          title="Interested in Living Pillars?"
          description="Reach out to us for more details on urban greening and why it's so important"
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}

export default LivingPillars;
