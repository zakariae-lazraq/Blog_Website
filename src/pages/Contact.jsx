import React from "react";
import HeroBanner from "../components/heroBanner/HeroBanner";

const Contact = () => {
  return (
    <>
      <HeroBanner limit={true} />
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Form Section */}
            <div className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="lg:w-1/2 lg:pl-8">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-4">
                Have questions or need support? Reach out to us using the
                contact form or the details below.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-700">
                  1234 Blog Street, Suite 100
                  <br />
                  Blog City, BC 12345
                  <br />
                  Country
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-700">+1 (234) 567-8901</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-700">contact@blogsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
