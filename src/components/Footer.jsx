import React from "react";
import bgImage from "../asset/simon-humler--AakIaAPV0w-unsplash.jpg";

function Footer() {
  return (
    <footer
      className="relative text-white py-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
        {/* Sign-Up Section */}
        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-md text-center md:text-left w-full md:w-2/3 lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Sign up to Get a Free Consultation
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            {/* <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-md transition">
              Submit
            </button> */}
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2 text-lg">
            {["Instagram", "Facebook", "TikTok", "Twitter", "WhatsApp"].map(
              (platform) => (
                <li
                  key={platform}
                  className="hover:underline cursor-pointer hover:text-red-400 transition"
                >
                  {platform}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
