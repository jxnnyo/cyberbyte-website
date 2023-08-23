import React from "react";
import Image from "next/image";
import LazySlider from "./LazySlider";
import type { SliderImage } from "./Slider";

type Feature = {
  title: string;
  description: string;
  images: Array<SliderImage>;
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
    <div className="items-center md:grid md:grid-cols-12 md:gap-6">
      <div
        className={
          "mx-auto mb-8 max-w-xl md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6" +
          (feature.right ? "md:rtl" : "md:order-1")
        }
      >
        {feature.images.length == 1 ? (
          <figure className="pb-9/16 relative overflow-hidden rounded-l-xl">
            <Image
              src={feature.images[0].url}
              alt={feature.images[0].alt}
              placeholder="blur"
            />
          </figure>
        ) : (
          <LazySlider images={feature.images} />
        )}
      </div>
      <div className="mx-auto max-w-xl md:col-span-7 md:w-full md:max-w-none lg:col-span-6 flex h-full flex-grow flex-col bg-gray-800 rounded-r-xl">
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <h3 className="h3 mb-3">{feature.title}</h3>
          <p className="mb-4 text-xl text-gray-400">{feature.description}</p>
          <ul className="-mb-2 text-lg text-gray-400">
            {feature.items.map((item, index) => (
              <li className="mb-2 flex items-center" key={index}>
                <svg
                  className="text-green-500 mr-2 h-3 w-3 flex-shrink-0 fill-current"
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

const HomeZigzag: React.FC<FeatureZigzagProps> = ({
  title,
  description,
  features,
}) => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h1 className="h2 mb-4">{title}</h1>
          <p className="text-xl text-gray-400">{description}</p>
        </div>

        <div className="grid gap-20">
          {features.map((feature, index) => (
            <FeatureBox feature={feature} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeZigzag;
