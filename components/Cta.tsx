import React from "react";
import Link from "next/link";

type CTAProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonInternal?: boolean;
  showBorder?: boolean;
};

const Cta: React.FC<CTAProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  buttonInternal = false,
  showBorder = true,
}) => {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className={showBorder ?"border-t border-b border-gray-800 pt-12 md:pt-20":""}>
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h2 mb-4">{title}</h1>
            <p className="mb-8 text-xl text-gray-400">{description}</p>

            <div className="mb-8 flex justify-center">
              {buttonInternal ? (
                <Link href={buttonLink} className="btn btn-primary rounded-lg">
                  {buttonText}
                </Link>
              ) : (
                <a
                  className="btn btn-primary"
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
