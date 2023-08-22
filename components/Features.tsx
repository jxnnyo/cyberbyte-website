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
  showBorderTop?: boolean;
  showBorderBottom?: boolean;

  features: Array<Feature>;
};

const Feature: React.FC<FeatureProps> = ({ feature }) => (
  <div className="relative flex flex-col items-center">
    <div className="rounded-full h-16 w-16 bg-primary mb-4 flex items-center justify-center">
      {feature.icon}
    </div>
    <h4 className="text-center h4 mb-2">{feature.title}</h4>
    <p className="text-center text-lg text-gray-400">{feature.description}</p>
  </div>
);

const Features: React.FC<FeaturesProps> = ({
  features,
  title,
  description,
  showBorderTop = true,
  showBorderBottom = true,
}) => {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 mt-12 md:mt-20">
        <div
          className={
            showBorderTop ? "border-t border-gray-800 pt-12 md:pt-20" : ""
          }
        >
          <div
            className={
              showBorderBottom ? "border-b border-gray-800 pb-12 md:pb-20" : ""
            }
          >
            <div className="mb-10">
              {title && (
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="h2 mb-4">{title}</h2>
                  {description && (
                    <p className="text-xl text-gray-400 mb-4">{description}</p>
                  )}
                </div>
              )}
            </div>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div>
                <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-none md:grid-cols-3 lg:gap-16">
                  {features.map((feature, index) => (
                    <Feature feature={feature} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
