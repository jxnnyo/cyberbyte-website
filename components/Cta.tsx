import React from "react";
import Link from "next/link";

type CTAProps = {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  buttonInternal?: boolean;
  showBorderTop?: boolean;
  showBorderBottom?: boolean;
};

const Cta: React.FC<CTAProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  buttonInternal = false,
  showBorderTop = true,
  showBorderBottom = true,
}) => {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
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
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="h2 mb-4">{title}</h1>
              {description && (
                <p className="mb-8 text-xl text-gray-400">{description}</p>
              )}

              <div className="flex justify-center">
                {buttonInternal ? (
                  <Link
                    href={buttonLink}
                    className="btn btn-primary rounded-md"
                  >
                    {buttonText}
                  </Link>
                ) : (
                  <a
                    className="btn btn-primary rounded-md"
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
      </div>
    </section>
  );
};

export default Cta;
