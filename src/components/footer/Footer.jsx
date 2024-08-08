import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">
              Welcome to our blog. We share the latest news, articles, and
              updates on various topics. Stay tuned and subscribe to our
              newsletter.
            </p>
          </div>
          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul>
              <li className="mb-2">
                <a
                  href="/category/technology"
                  className="text-gray-400 hover:text-white"
                >
                  Technology
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/category/lifestyle"
                  className="text-gray-400 hover:text-white"
                >
                  Lifestyle
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/category/finance"
                  className="text-gray-400 hover:text-white"
                >
                  Finance
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/category/health"
                  className="text-gray-400 hover:text-white"
                >
                  Health
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.324 1.325 1.324h11.499v-9.294h-3.129v-3.623h3.129v-2.671c0-3.1 1.893-4.785 4.658-4.785 1.325 0 2.463.099 2.796.143v3.243l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.307h3.587l-.467 3.623h-3.12v9.294h6.116c.732 0 1.324-.592 1.324-1.324v-21.351c0-.732-.592-1.325-1.324-1.325z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.932 2.209-4.932 4.932 0 .387.044.763.127 1.124-4.098-.205-7.735-2.17-10.164-5.151-.425.729-.667 1.574-.667 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.386 1.697 4.374 3.946 4.828-.414.112-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.379 4.599 3.419-1.684 1.32-3.809 2.107-6.115 2.107-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.426-.015-.637.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.312 3.608 1.287.975.975 1.225 2.242 1.287 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.312 2.633-1.287 3.608-.975.975-2.242 1.225-3.608 1.287-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.312-3.608-1.287-.975-.975-1.225-2.242-1.287-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.312-2.633 1.287-3.608.975-.975 2.242-1.225 3.608-1.287 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.281.059-2.419.271-3.338.688-.951.43-1.754 1.034-2.535 1.816-.782.782-1.387 1.584-1.816 2.535-.417.919-.629 2.057-.688 3.338-.058 1.281-.07 1.689-.07 4.947s.012 3.667.07 4.947c.059 1.281.271 2.419.688 3.338.43.951 1.034 1.754 1.816 2.535.782.782 1.584 1.387 2.535 1.816.919.417 2.057.629 3.338.688 1.281.058 1.689.07 4.947.07s3.667-.012 4.947-.07c1.281-.059 2.419-.271 3.338-.688.951-.43 1.754-1.034 2.535-1.816.782-.782 1.387-1.584 1.816-2.535.417-.919.629-2.057.688-3.338.058-1.281.07-1.689.07-4.947s-.012-3.667-.07-4.947c-.059-1.281-.271-2.419-.688-3.338-.43-.951-1.034-1.754-1.816-2.535-.782-.782-1.584-1.387-2.535-1.816-.919-.417-2.057-.629-3.338-.688-1.281-.058-1.689-.07-4.947-.07z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.293 0-4.162-1.869-4.162-4.162s1.869-4.162 4.162-4.162 4.162 1.869 4.162 4.162-1.869 4.162-4.162 4.162z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.5 3h-15c-1.377 0-2.5 1.122-2.5 2.5v13c0 1.378 1.123 2.5 2.5 2.5h15c1.377 0 2.5-1.122 2.5-2.5v-13c0-1.378-1.123-2.5-2.5-2.5zm-11.47 15h-3.029v-8.807h3.029v8.807zm-1.515-10.044c-.967 0-1.75-.788-1.75-1.756 0-.969.783-1.756 1.75-1.756s1.75.787 1.75 1.756c0 .968-.783 1.756-1.75 1.756zm11.485 10.044h-3.028v-4.528c0-1.08-.02-2.466-1.502-2.466-1.502 0-1.733 1.173-1.733 2.39v4.604h-3.029v-8.807h2.91v1.203h.04c.405-.767 1.397-1.574 2.874-1.574 3.071 0 3.636 2.021 3.636 4.646v5.532z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            © 2024 Blog Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
