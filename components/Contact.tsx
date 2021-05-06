import React from "react";
import Link from "next/link";
import { useForm } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID);

  if (state.succeeded) {
    return (
      <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-800 py-10 px-8 md:py-16 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-3/4">
              <h3 className="h3 text-white mb-2">Thanks for your message</h3>
              <p className="text-gray-400 text-lg">We will get back to you shortly.</p>
            </div>

            <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
              <Link href="/">
                <a className="btn text-white bg-primary hover:bg-secondary">Return Home</a>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
  }

  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Name <span
            className="text-red-600">*</span></label>
          <input id="name" name="name" type="text" className="form-input w-full text-gray-800"
                 placeholder="Enter your name" required/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span
            className="text-red-600">*</span></label>
          <input id="email" name="email" type="email" className="form-input w-full text-gray-800"
                 placeholder="Enter your email address" required/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="subject">Subject <span
            className="text-red-600">*</span></label>
          <input id="subject" name="subject" type="text" className="form-input w-full text-gray-800" placeholder="How can we help you?"
                 required/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} className="form-textarea w-full text-gray-800"
                    placeholder="Write your message"/>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button type="submit" className="btn text-white bg-primary hover:bg-secondary w-full">Send</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm;