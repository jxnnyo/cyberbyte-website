import React from 'react';

type FeatureProps = {
  title: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({title, description, children}) => (
  <div className="relative flex flex-col items-center">
    {children}
    <h4 className="mb-2 h4">{title}</h4>
    <p className="text-lg text-gray-400 text-center">{description}</p>
  </div>
)

export function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            <Feature title="Software Consulting" description="Staring a new project or need help in the middle of an existing one? Reach out and we can share our experience.">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </Feature>

            <Feature title="Website Development" description="From custom database structures and admin areas to single page applications we have got it covered.">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary" width="64" height="64" rx="32" />
                <g fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2" strokeWidth="2" strokeLinecap="square" />
                  <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M36 32l-4-3-4 3V22h8z" />
                </g>
              </svg>
            </Feature>

            <Feature title="Bespoke Hosting" description="We use Kubernetes clusters to ensure our clients apps are fault tolerant and able to handle any traffic spikes.">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-primary" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-300" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-15" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-100" d="M42 29h-3M42 34h-7M42 39H31" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </Feature>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;