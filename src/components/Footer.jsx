import React from "react";
import bgImage from "../asset/simon-humler--AakIaAPV0w-unsplash.jpg";


function Footer() {
  return (
    <footer
      className="relative text-white py-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container relative mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-md text-center md:text-left w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">
            Sign up to Get a Free Consultation
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>

        
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-8 w-full md:w-1/3">
          <ul className="space-y-2 text-lg">
            {["Instagram", "Facebook", "TikTok", "Twitter", "WhatsApp"].map(
              (platform) => (
                <li key={platform} className="hover:underline cursor-pointer">
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
