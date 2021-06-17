import React from "react";
import Image from "next/image";
import Link from "next/link";

type CaseStudy = {
  image: StaticImageData;
  title: string;
  description: string;
  link?: string;
};

type CaseStudyProps = {
  study: CaseStudy;
};

export const CaseStudyItem: React.FC<CaseStudyProps> = ({ study }) => (
  <article className="flex flex-col h-full">
    <div className="block">
      <figure className="relative pb-9/16 overflow-hidden">
        <Image
          src={study.image}
          width="352"
          height="198"
          alt={study.title}
          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
          placeholder="blur"
        />
      </figure>
    </div>
    <div className="flex-grow flex flex-col h-full p-6 bg-gray-800">
      <h3 className="mb-2 h3">{study.title}</h3>
      <p className="text-lg text-gray-400 flex-grow">{study.description}</p>
      {study.link && (
        <Link href={study.link}>
          <a className="btn btn-primary mt-6">
            <span className="text-sm">Learn more</span>
            <svg
              className="w-3 h-3 fill-current flex-shrink-0 ml-2"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 5H0v2h6v4l6-5-6-5z" />
            </svg>
          </a>
        </Link>
      )}
    </div>
  </article>
);

type CaseStudiesProps = {
  title: string;
  description: string;
  cases: Array<CaseStudy>;
};

const CaseStudies: React.FC<CaseStudiesProps> = ({
  title,
  description,
  cases,
}) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="mb-4 h2">{title}</h2>
            <p className="text-xl text-gray-400">{description}</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">
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
