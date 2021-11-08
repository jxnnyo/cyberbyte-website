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
    <h4 className="mb-2 h4">{feature.title}</h4>
    <p className="text-lg text-gray-400 text-center">{feature.description}</p>
  </div>
);

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
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
