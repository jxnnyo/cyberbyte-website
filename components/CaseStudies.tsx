import React from 'react';
import Image from "next/image";

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
      <h3 className="mb-2 text-3xl font-bold leading-tight">
        {title}
      </h3>
      <p className="text-lg text-gray-400 flex-grow">{description}</p>
      {link && <div>
        <a className="px-4 py-2 font-medium inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-white bg-primary hover:bg-secondary mt-6" href={link}>
          <span className="text-sm">Learn more</span>
          <svg className="w-3 h-3 fill-current flex-shrink-0 ml-2" viewBox="0 0 12 12"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M6 5H0v2h6v4l6-5-6-5z"/>
          </svg>
        </a>
      </div>}
    </div>
  </article>
)

function CaseStudies() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter mb-4">What we have worked on</h2>
            <p className="text-xl text-gray-400">We have worked with a wide range of clients on a number of different projects. Below is a small sample of our projects:</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">
            <CaseStudy image="/images/websites/cyberworks.jpg" title="Cyberworks" description="A popular open source tool which allows you to manage Arma 3 Life servers with ease. Used by hundreds of communities to manage players and aid community support."/>
            <CaseStudy image="/images/websites/car.png" title="Compare and Recycle" description="The UK's number 1 recycling comparison site. We helped build out a scalable platform to handle thousands of requests and improve customer satisfaction."/>
            <CaseStudy image="/images/websites/mineathon.jpg" title="Mineathon" description="A charity live streaming website to collect donations. Built in Laravel complete with an admin area to manage the event. We later published the source code on GitHub."/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
