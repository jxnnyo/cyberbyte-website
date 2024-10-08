"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Link from "next/link";

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [state, handleSubmit] = useForm("mqkwewrv", {
    data: { "g-recaptcha-response": executeRecaptcha },
  });

  if (state.succeeded) {
    return (
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-gray-800 py-10 px-8 md:py-16 md:px-12">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="mb-6 text-center lg:mr-16 lg:mb-0 lg:w-3/4 lg:text-left">
                <h3 className="h3 mb-2 text-white">Thanks for your message</h3>
                <p className="text-lg text-gray-400">
                  We will get back to you shortly.
                </p>
              </div>

              <div className="flex w-full justify-center lg:w-1/4 lg:justify-end">
                <Link href="/" className="btn btn-primary">
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <form className="mx-auto max-w-3xl" onSubmit={handleSubmit}>
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-1 block text-sm font-medium text-gray-300"
            htmlFor="email"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input w-full text-gray-800 rounded-lg"
            placeholder="Enter your name"
            required
          />
        </div>
      </div>
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-1 block text-sm font-medium text-gray-300"
            htmlFor="email"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input w-full text-gray-800 rounded-lg"
            placeholder="Enter your email address"
            required
          />
        </div>
      </div>
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-1 block text-sm font-medium text-gray-300"
            htmlFor="subject"
          >
            Subject <span className="text-red-600">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="form-input w-full text-gray-800 rounded-lg"
            placeholder="How can we help you?"
            required
          />
        </div>
      </div>
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-1 block text-sm font-medium text-gray-300"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-textarea w-full text-gray-800 rounded-lg"
            placeholder="Write your message"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-row-reverse">
        <div className="w-full sm:w-auto">
          <button
            type="submit"
            className="btn btn-primary w-full rounded-lg px-16"
          >
            Send
          </button>
          <span className="text-gray-400">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a>
            {" and "}
            <a href="https://policies.google.com/terms">
              Terms of Service
            </a>{" "}
            apply.
          </span>
        </div>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfBWxAqAAAAAPyJJ1mr3FyRN44Xn_OdsnN0gAzI">
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}

export default Contact;
