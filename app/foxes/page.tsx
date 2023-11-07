import React from "react";
import HeroFeatures from "../../components/HeroFeatures";
import foxes from "../../images/foxes.jpg";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Foxes",
  };
  
  function Foxes() {
    return (
      <div className="flex min-h-screen flex-col overflow-hidden">
        <main className="flex-grow">
          <HeroFeatures
            title="Wrong page for fox sake!"
            images={[{ url: foxes, alt: "Foxes" }]}
            description={
            <p className="text-lg text-gray-400">
              Head back to our{" "}
              <Link
                href="/"
                className="text-primary transition duration-150 ease-in-out hover:text-white"
              >
                homepage
              </Link>
              , or try double-checking the URL.
            </p>
            }
          />
        </main>
      </div> 
    );
}
    
export default Foxes;