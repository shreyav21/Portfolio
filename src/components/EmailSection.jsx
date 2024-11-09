"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data); // Fix: JSON.stringify instead of JSON.string
    const endpoint = "/api/send";

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options); // Fix: options instead of option
    const resData = await response.json(); // Fix: await response.json() instead of req.json()

    if (response.status === 200) {
      console.log('Message sent');
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com" passHref>
            <Image
              src="/icons8-github (1).svg" // Correct path to the SVG in the public folder
              alt="GitHub"
              width={30} // Set the desired width
              height={30} // Set the desired height
            />
          </Link>
          <Link href="https://linkedin.com" passHref>
            <Image
              src="/icons8-linkedin.svg" // Correct path to the SVG in the public folder
              alt="GitHub"
              width={30} // Set the desired width
              height={30} // Set the desired height
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium ">Your Email</label>
            <input
              name="email"
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="text-white block mb-2 text-sm font-medium ">Subject</label>
            <input
              name="subject"
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2."
              placeholder="Message.."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email sent</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
