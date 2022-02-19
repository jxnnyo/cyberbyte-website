import Footer from "../components/Footer";
import PageIllustration from "../components/PageIllustration";
import ContactForm from "../components/Contact";
import Header from "../components/Header";
import {NextSeo} from "next-seo";
import React from "react";

function Contact() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo title="Contact Us" />
      <Header />

      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
                <h1 className="h1 mb-4">How can we help you?</h1>
                <p className="text-xl text-gray-400">
                  Want to get a quote or learn more about what we do? Feel free
                  to send us a message and we will get back to you shortly.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/*  Bottom CTA */}
        {/*<CtaContact />*/}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Contact;
