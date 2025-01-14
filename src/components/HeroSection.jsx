import React from 'react';
import bgImage from "../asset/simon-humler--AakIaAPV0w-unsplash.jpg"

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">"Total Body & Face Rejuvenation"</h1>
        <p className="text-lg md:text-xl mb-6">Redefine Beauty: From Facial Glow to Body Contour.</p>
        <button className="bg-brown-600 hover:bg-brown-700 text-white py-3 px-6 rounded-md text-sm md:text-lg">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
