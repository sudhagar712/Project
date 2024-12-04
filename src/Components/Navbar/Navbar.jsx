import React, { useState } from "react";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" border-2 border-white bg-gradient-to-r from-cyan-300 to-green-300 shadow-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-15 w-[120px]" />
            <span className="ml-2 text-2xl font-bold  text-white">
              ABC <span className="text-black">NXT</span>
            </span>
          </a>

          {/* Center: Navigation Items */}
          <div className="hidden md:flex space-x-5">
            <a
              href="/listofjob"
              className="text-sm font-medium transition duration-300 "
            >
              JOB
            </a>
            <a
              href="#services"
              className="text-sm font-medium transition duration-300 "
            >
              SERVICES
            </a>
            <a
              href="#contact"
              className="text-sm  font-medium transition duration-300 "
            >
              CONTACT-US
            </a>
          </div>

          {/* Right: Login Button */}
          <div className="hidden md:block">
            <a
              href="#login"
              className="px-4 py-2 bg-green-400 text-white rounded-md shadow-lg  transition duration-300"
            >
              Welcome To Our Site!!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a
              href="#home"
              className="block text-gray-600 hover:text-blue-500 transition duration-300"
            >
              JOB
            </a>
            <a
              href="#services"
              className="block text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
