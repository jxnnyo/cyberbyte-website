import ContactForm from "../../components/Contact";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

function Contact() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="my-12 md:my-20">
          <div className="mx-auto max-w-3xl pb-10 text-center">
            <h2 className="h2 mb-4">How can we help you?</h2>
            <p className="text-xl text-gray-400">
              Starting a new project, or need help in the middle of an existing
              one? We would love to share our experience. Or if you just want to
              get a quote or learn more about what we do? Feel free to send us a
              message and we will get back to you shortly.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
