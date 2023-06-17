import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-12 md:pt-16 border-gray-800 border-t mb-8 grid gap-8 md:mb-12 md:grid-cols-12 lg:gap-20">
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                <Link href="/" className="inline-block" aria-label="Cruip">

                  <Image
                    src={logo}
                    height="80"
                    width="258"
                    alt="Cyberbyte Software"
                  />

                </Link>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-7">
              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">
                  We are working on
                </h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/projects/merchant-recycling"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      
                        Recycling Merchant Websites
                      
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/projects/landing-pages"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      
                        Landing Pages
                      
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/projects/living-pillars"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      
                        Living Pillars
                      
                    </Link>
                  </li>
                  {/*<li className="mb-1">
                    <Link href="/projects/handtec">
                      <a className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                        Handtec
                      </a>
                    </Link>
                  </li>*/}
                </ul>
              </div>

              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">
                  We have worked on
                </h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/projects/cyberworks3"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      
                        Cyberworks 3
                      
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/projects/bid-that-home"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      
                        Bid That Home
                      
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/projects"
                      className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                      
                        See More Projects
                      
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-sm">
                <h6 className="mb-1 font-medium text-gray-200">Say hello</h6>
                <ul>
                  <li className="mb-1 text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                    <a
                      href="mailto:contact@cyberbyte.software"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      contact@cyberbyte.software
                    </a>
                  </li>
                  <li className="mb-1 text-gray-400 transition duration-150 ease-in-out hover:text-gray-100">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between">
            <ul className="mb-4 flex md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <a
                  href="https://github.com/Cyberbyte-Studios"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-center rounded-full bg-gray-800 text-primary transition duration-150 ease-in-out hover:bg-primary hover:text-gray-100"
                  aria-label="Github"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://www.linkedin.com/company/cyberbyte-software"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-center rounded-full bg-gray-800 text-primary transition duration-150 ease-in-out hover:bg-primary hover:text-gray-100"
                  aria-label="Linkedin"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </a>
              </li>
            </ul>

            <div className="mr-4 text-sm text-gray-400">
              &copy; 2022 Cyberbyte Software Ltd. All rights reserved. Company
              Number: 12691680. VAT Number: 364633977
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
