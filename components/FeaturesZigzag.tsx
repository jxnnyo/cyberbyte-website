import React from "react";
import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  image: StaticImageData;
  items: Array<string>;
  right?: boolean;
};

type FeatureProps = {
  feature: Feature;
};

type FeatureZigzagProps = {
  title: string;
  description: string;

  features: Array<Feature>;
};

const FeatureBox: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      <div
        className={
          "max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 " +
          (feature.right ? "md:rtl" : "md:order-1")
        }
        data-aos="fade-up"
      >
        <Image
          src={feature.image}
          alt={feature.title}
          width="1920"
          height="974"
          placeholder="blur"
        />
      </div>
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-right"
      >
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <h3 className="h3 mb-3">{feature.title}</h3>
          <p className="text-xl text-gray-400 mb-4">{feature.description}</p>
          <ul className="text-lg text-gray-400 -mb-2">
            {feature.items.map((item, index) => (
              <li className="flex items-center mb-2" key={index}>
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeaturesZigzag: React.FC<FeatureZigzagProps> = ({
  title,
  description,
  features,
}) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">{title}</h1>
            <p className="text-xl text-gray-400">{description}</p>
          </div>

          <div className="grid gap-20">
            {features.map((feature, index) => (
              <FeatureBox feature={feature} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesZigzag;
