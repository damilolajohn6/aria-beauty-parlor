import React, { useState } from "react";
import { Link } from "react-router-dom";
// import image from "../assets/QWIK TECH LOGO 1.png";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center flex-wrap">
          {/* Logo */}
          <div className="flex items-center mb-4 sm:mb-0">
            <Link to="/">
              {/* <img src={image} alt="Qwik Logo" className="" /> */}
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-500"
            >
              {/* Hamburger Icon */}
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
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden sm:flex items-center space-x-4">
            <nav className="space-x-4 flex flex-row sm:space-x-6 md:space-x-10">
              <Link to="/" className="text-gray-700 hover:text-[#EC2A02]">
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-[#EC2A02]">
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#EC2A02]"
              >
                About Us
              </Link>
            </nav>

            {/* "Get in Touch" Button - Desktop Only */}
            <div className="ml-4">
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#EC2A02]"
              >
                <button className="border-gray-500 border text-gray-500 font-bold py-2 px-4 rounded">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Visible when `menuOpen` is true */}
      <div className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="bg-white p-4">
          <nav className="space-y-4">
            <Link to="/" className="text-gray-700 hover:text-blue-500 block">
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-500 block"
            >
              Services
            </Link>
            <Link
              to="/About"
              className="text-gray-700 hover:text-blue-500 block"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 block"
            >
              <button className="border-gray-500 border text-gray-500 font-bold py-2 px-4 rounded w-full">
                Contact Us
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
