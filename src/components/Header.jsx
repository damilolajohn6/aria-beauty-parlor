import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../asset/simon-humler--AakIaAPV0w-unsplash.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Header Container */}
        <div className="container relative mx-auto py-4 px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300"
            >
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

          {/* Navigation Links - Desktop */}
          <div className="hidden sm:flex items-center space-x-4">
            <nav className="space-x-4 font-semibold flex">
              <Link to="/" className="text-white hover:text-[#ffffff]">
                Home
              </Link>
              <Link to="/services" className="text-white hover:text-[#ffffff]">
                Services
              </Link>
              <Link to="/about" className="text-white hover:text-[#ffffff]">
                About Us
              </Link>
            </nav>

            {/* Contact Button */}
            <div className="ml-4">
              <Link to="/contact">
                <button className="bg-[#B08D79] text-white font-bold py-2 px-4 rounded hover:bg-[#ffffff]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start mx-auto px-52 justify-items-start h-full">
          <h1 className="text-4xl md:text-6xl font-semibold italic mb-4">
            "Total Body & Face <br></br>Rejuvenation"
          </h1>
          <p className="text-lg text-gray-800 font-semibold italic text md:text-xl mb-6">
            Redefine Beauty: From Facial <br></br>Glow to Body Contour.
          </p>
          <button className="bg-[#B08D79] text-white font-semibold py-3 px-6 rounded-md text-sm md:text-lg">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white p-4">
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
              to="/about"
              className="text-gray-700 hover:text-blue-500 block"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-500 block"
            >
              <button className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded w-full">
                Contact Us
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
