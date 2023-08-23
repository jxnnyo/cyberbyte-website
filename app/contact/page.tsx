import React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
};

function Contact() {
  async function contactForm(data: FormData) {
    "use server";

    const res = await fetch("https://formspree.io/f/mqkwewrv", {
      method: "POST",
      body: data,
    });

    redirect("/contact/thanks");
  }

  return (
    <form className="mx-auto max-w-3xl" action={contactForm}>
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
      <div className="mt-6 flex flex-row-reverse">
        <div className="w-full sm:w-auto">
          <button
            type="submit"
            className="btn btn-primary w-full rounded-lg px-16"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export const runtime = "edge";

export default Contact;
