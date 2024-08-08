import React from "react";
import {
  FaLaptopCode,
  FaPenFancy,
  FaChartLine,
  FaBullhorn,
  FaCameraRetro,
  FaGlobe,
} from "react-icons/fa";
import HeroBanner from "../components/heroBanner/HeroBanner";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Latest trends and tutorials in web development.",
    },
    {
      icon: <FaPenFancy />,
      title: "Creative Writing",
      description: "Inspiring articles on creative writing.",
    },
    {
      icon: <FaChartLine />,
      title: "Market Analysis",
      description: "In-depth market analysis and insights.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description: "Tips and tricks for effective digital marketing.",
    },
    {
      icon: <FaCameraRetro />,
      title: "Photography",
      description: "Photography tips and techniques for enthusiasts.",
    },
    {
      icon: <FaGlobe />,
      title: "Travel",
      description: "Exciting travel stories and guides.",
    },
  ];

  return (
    <>
      <HeroBanner />
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-12 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:opacity-90 duration-300 ease-in-out"
              >
                <div className="text-indigo-500 mb-4 text-6xl">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
