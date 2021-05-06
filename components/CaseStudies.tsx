import React from 'react';
import Image from "next/image";
import Link from "next/link";

type CaseStudyProps = {
  image: string
  title: string
  description: string
  link?: string
}

const CaseStudy: React.FC<CaseStudyProps> = ({image, title, description, link}) => (
  <article className="flex flex-col h-full">
    <div className="block">
      <figure className="relative pb-9/16 overflow-hidden">
        <Image src={image} width="352" height="198" alt={title} className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"/>
      </figure>
    </div>
    <div className="flex-grow flex flex-col h-full p-6 bg-gray-800">
      <h3 className="mb-2 h3">
        {title}
      </h3>
      <p className="text-lg text-gray-400 flex-grow">{description}</p>
      {link && <Link href={link}>
        <a className="btn btn-primary mt-6">
          <span className="text-sm">Learn more</span>
          <svg className="w-3 h-3 fill-current flex-shrink-0 ml-2" viewBox="0 0 12 12"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M6 5H0v2h6v4l6-5-6-5z"/>
          </svg>
        </a>
      </Link>}
    </div>
  </article>
)

function CaseStudies() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="mb-4 h2">What we have worked on</h2>
            <p className="text-xl text-gray-400">We have worked with a wide range of clients on a number of different projects. Below is a small sample of our projects:</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">
            <CaseStudy image="/images/cyberworks/original.jpg" title="Cyberworks" description="A popular open source tool which allows you to manage Arma 3 Life servers with ease. Used by hundreds of communities to manage players and aid community support." link="/projects/cyberworks3"/>
            <CaseStudy image="/images/websites/car.png" title="Compare and Recycle" description="The UK's number 1 recycling comparison site. We helped build a scalable platform to handle thousands of requests and improve customer satisfaction." link="/projects/compare-and-recycle"/>
            <CaseStudy image="/images/websites/mineathon.jpg" title="Mineathon" description="A charity live streaming website to collect donations. Built in Laravel complete with an admin area to manage the event. We later published the source code on GitHub."  link="/projects/mineathon"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
