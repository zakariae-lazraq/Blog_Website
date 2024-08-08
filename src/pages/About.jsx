import React from "react";

import mainImg from "../assets/about.png";
import user1 from "../assets/user-01.png";
import user2 from "../assets/user-02.png";
import user3 from "../assets/user-03.png";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Main Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={mainImg}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Welcome to our blog! We are passionate about sharing valuable
              content that helps you stay informed and inspired. Our team
              consists of dedicated writers and experts who are committed to
              delivering high-quality articles on a variety of topics.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to provide insightful and engaging content that
              resonates with our readers. Whether you’re interested in the
              latest trends, practical advice, or thought-provoking discussions,
              we have something for you.
            </p>
          </div>
        </div>

        {/* User Images Section */}
        <div className="mt-12">
          <h3 className="text-4xl font-semibold mb-6 text-center">
            Meet Our Team
          </h3>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-1/2 sm:w-1/4 px-4 mb-8 flex justify-center">
              <img
                src={user1}
                alt="Team Member 1"
                className="w-44 h-44 object-cover rounded-full border-2 border-gray-300"
              />
            </div>
            <div className="w-1/2 sm:w-1/4 px-4 mb-8 flex justify-center">
              <img
                src={user2}
                alt="Team Member 2"
                className="w-44 h-44 object-cover rounded-full border-2 border-gray-300"
              />
            </div>
            <div className="w-1/2 sm:w-1/4 px-4 mb-8 flex justify-center">
              <img
                src={user3}
                alt="Team Member 3"
                className="w-44 h-44 object-cover rounded-full border-2 border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
