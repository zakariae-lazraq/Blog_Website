import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";

const HeroBanner = ({ limit }) => {
  const { link, setLink } = useContext(StoreContext);
  return limit ? (
    <div className="bg-black flex items-center justify-center flex-col text-white gap-5 py-20  px-6">
      <h1 className="text-6xl font-bold mb-4"> {link} page</h1>

      <h2 className="flex items-center gap-4 text-xl font-medium cursor-pointer hover:text-orange-400 transition duration-300 ease-in-out">
        Learn More <FaArrowRight />
      </h2>
    </div>
  ) : (
    <div className="bg-black flex items-center justify-center flex-col text-white gap-5 py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to our {link} page</h1>
      <p className="text-lg max-w-2xl text-center mb-6">
        This is a sample blog post.about {link} page , be more followeb by our
        content
      </p>
      <h2 className="flex items-center gap-4 text-xl font-medium cursor-pointer hover:text-orange-400 transition duration-300 ease-in-out">
        Learn More <FaArrowRight />
      </h2>
    </div>
  );
};

export default HeroBanner;
