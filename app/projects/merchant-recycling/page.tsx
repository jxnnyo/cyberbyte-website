import React from "react";
import HeroFeatures from "../../../components/HeroFeatures";
import Cta from "../../../components/Cta";
import FeaturesZigzag from "../../../components/FeaturesZigzag";
import merchantProduct from "../../../images/projects/merchant-recycling/website-product.png";
import adminProduct from "../../../images/projects/merchant-recycling/admin-product.png";
import adminSettings from "../../../images/projects/merchant-recycling/admin-settings.png";
import camoradaHomepage from "../../../images/projects/merchant-recycling/home/camorada.png";
import cloveHomepage from "../../../images/projects/merchant-recycling/home/clove.png";
import techoutHomepage from "../../../images/projects/merchant-recycling/home/techout.png";
import macysHomepage from "../../../images/projects/merchant-recycling/home/macys.png";
import handtecHomepage from "../../../images/projects/merchant-recycling/home/handtec.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recycling Merchant Websites",
};

function MerchantPlatform() {
  return (
    <main className="flex-grow">
      <HeroFeatures
        title="Recycling Merchant Websites"
        images={[
          { url: handtecHomepage, alt: "Handtec" },
          { url: techoutHomepage, alt: "The Techout" },
          { url: cloveHomepage, alt: "Clove Recycling" },
          { url: macysHomepage, alt: "Macys Tech" },
          { url: camoradaHomepage, alt: "Camorada" },
        ]}
        description="We are working with recycling merchants as well as using our industry experience to produce cutting edge websites for recycling merchants."
        link={{
          title: "View our demo",
          href: "https://demo.recycling.dev/",
        }}
      />
      <FeaturesZigzag
        title="What can it do?"
        description="Our merchant websites are built with both the users and admin staff in mind. Maximizing conversions and making sure your customer have a smooth experience."
        features={[
          {
            title: "Built for the customer",
            description:
              "Using our industry experience we have built features designed to make it as easy as possible for the customers to place orders and keep track of the status.",
            images: [{ url: merchantProduct, alt: "" }],
            items: [
              "Real time text and email updates",
              "Fast and responsive experience",
              "Streamlined checkout process",
            ],
          },
          {
            title: "Built for the merchants",
            description:
              "Not only do we want the customers to have the best possible experience, but the merchant as well, so we focused on making the admin area as easy to use as possible based on years of feedback.",
            images: [{ url: adminProduct, alt: "" }],
            items: [
              "Full audit logs",
              "Order note system",
              "Live chat support",
            ],
            right: true,
          },
          {
            title: "Fully Customisable",
            description:
              "Our unique system allows merchants to change their websites without needing to reach out to our team every time.",
            images: [{ url: adminSettings, alt: "" }],
            items: [
              "Dynamic Text Messages",
              "Dynamic Email Templates",
              "CMS System for editing content",
            ],
          },
        ]}
      />
      <Cta
        title=" Find out why we are the recommended integration partner for Compare and Recycle."
        description="Feel free to contact us if you are interested or want to know more!"
        buttonText="Contact Us"
        buttonLink="/contact"
        buttonInternal={true}
      />
    </main>
  );
}

export default MerchantPlatform;
