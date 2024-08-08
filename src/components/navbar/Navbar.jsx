import React, { useState, useContext } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Popup from "../popup/Popup";

const Navbar = () => {
  const { link, setLink } = useContext(StoreContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center bg-black text-white py-4 px-8 shadow-lg">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <a href="/" className="text-3xl font-bold flex items-center">
          Zakariae <span className="text-orange-400">Dev</span>
        </a>
        <button className="lg:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <ul className="flex flex-col lg:flex-row lg:gap-6 w-full lg:w-auto lg:flex-grow lg:justify-center lg:items-center hidden lg:flex">
        <li className="hover:text-orange-400 transition duration-300 ease-in-out">
          <Link to={"/"} onClick={() => setLink("home")}>
            Home{" "}
            {link === "home" && (
              <hr className="border-t-2 border-orange-400 mt-1 w-10 transition duration-300 ease-in-out" />
            )}
          </Link>
        </li>
        <li className="hover:text-orange-400 transition duration-300 ease-in-out">
          <Link to={"/services"} onClick={() => setLink("services")}>
            Services{" "}
            {link === "services" && (
              <hr className="border-t-2 border-orange-400 mt-1 w-10 transition duration-300 ease-in-out" />
            )}
          </Link>
        </li>
        <li className="hover:text-orange-400 transition duration-300 ease-in-out">
          <Link to={"/about"} onClick={() => setLink("about")}>
            About{" "}
            {link === "about" && (
              <hr className="border-t-2 border-orange-400 mt-1 w-10 transition duration-300 ease-in-out" />
            )}
          </Link>
        </li>
        <li className="hover:text-orange-400 transition duration-300 ease-in-out">
          <Link to={"/blogs"} onClick={() => setLink("blogs")}>
            Blogs{" "}
            {link === "blogs" && (
              <hr className="border-t-2 border-orange-400 mt-1 w-10 transition duration-300 ease-in-out" />
            )}
          </Link>
        </li>
        <li className="hover:text-orange-400 transition duration-300 ease-in-out">
          <Link to={"/contact"} onClick={() => setLink("contact")}>
            Contact{" "}
            {link === "contact" && (
              <hr className="border-t-2 border-orange-400 mt-1 w-10 transition duration-300 ease-in-out" />
            )}
          </Link>
        </li>
      </ul>

      <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0">
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition duration-300 ease-in-out"
          >
            <FaTwitter size={25} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition duration-300 ease-in-out"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition duration-300 ease-in-out"
          >
            <FaInstagram size={25} />
          </a>
        </div>
        <button
          onClick={togglePopup}
          className="bg-orange-400 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
        >
          Log in
        </button>
      </div>
      {isPopupOpen && <Popup onClose={togglePopup} />}
    </nav>
  );
};

export default Navbar;
