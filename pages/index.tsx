import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaGithub, FaPaypal, FaTwitter} from "react-icons/fa";
import Footer from "../components/Footer";
import React from 'react';
import HeroHome from "../components/HeroHome";
import Features from "../components/Features";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      {/*<Header />*/}

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        {/*<div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>*/}

        {/*  Page sections */}
        <HeroHome />
        <Features />
        {/*<FeaturesHome />*/}
        {/*<Tabs />*/}
        {/*<Target />*/}
        {/*<News />*/}
        {/*<Newsletter />*/}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
    )
}
