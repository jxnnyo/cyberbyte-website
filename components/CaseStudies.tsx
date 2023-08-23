import React from "react";
import Image from "next/image";
import Link from "next/link";

type CaseStudy = {
  image: any; //todo: change to correct image type
  title: string;
  description: string;
  link: string;
};

type CaseStudyProps = {
  study: CaseStudy;
};

export const CaseStudyItem: React.FC<CaseStudyProps> = ({ study }) => (
  <Link href={study.link} className="flex h-full flex-col">
    <div className="block">
      <figure className="pb-9/16 h-52 relative overflow-hidden rounded-t-xl">
        <Image
          src={study.image}
          width="460"
          height="260"
          alt={study.title}
          className="absolute inset-0 h-full w-full transform object-cover transition duration-700 ease-out hover:scale-105"
          placeholder="blur"
        />
      </figure>
    </div>
    <div className="flex h-full flex-grow flex-col bg-gray-800 p-6 rounded-b-xl">
      <h3 className="text-center h3 mb-2">{study.title}</h3>
      <p className="text-center flex-grow text-lg text-gray-400">
        {study.description}
      </p>
      <button className="btn btn-primary mt-6 rounded-md">
        <span>Learn more</span>
        <svg
          className="ml-2 h-3 w-3 flex-shrink-0 fill-current"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 5H0v2h6v4l6-5-6-5z" />
        </svg>
      </button>
    </div>
  </Link>
);

type CaseStudiesProps = {
  title?: string;
  description?: string;
  cases: Array<CaseStudy>;
};

const CaseStudies: React.FC<CaseStudiesProps> = ({
  title,
  description,
  cases,
}) => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="my-12 md:my-20">
          {title && (
            <div className="mx-auto max-w-3xl mb-10 text-center">
              <h2 className="h2 mb-4">{title}</h2>
              {description && (
                <p className="text-xl text-gray-400">{description}</p>
              )}
            </div>
          )}

          <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-6">
            {cases.map((item, index) => (
              <CaseStudyItem study={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
