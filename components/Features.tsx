import React from "react";

type Feature = {
  title: string;
  description: string;
  icon?: any;
};

type FeatureProps = {
  feature: Feature;
};

type FeaturesProps = {
  title?: string;
  description?: string;

  features: Array<Feature>;
};

const Feature: React.FC<FeatureProps> = ({ feature }) => (
  <div className="relative flex flex-col items-center">
    {feature.icon}
    <h4 className="h4 mb-2">{feature.title}</h4>
    <p className="text-center text-lg text-gray-400">{feature.description}</p>
  </div>
);

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-none md:grid-cols-3 lg:gap-16">
            {features.map((feature, index) => (
              <Feature feature={feature} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
