import React from "react";
import sectionImage from "../asset/engin-akyurt-SMwCQZWayj0-unsplash.jpg"

function HomeAbout() {
  return (
    <section className="bg-[#FAF4EE] py-4 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col items-center justify-center text-center py-7 mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#6C5E46]">
          Body Sculpting & Face Beauty Center
        </h1>
        <p className="text-sm md:text-base text-[#6C5E46] py-4 leading-relaxed">
          lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-sm md:text-base text-[#6C5E46] leading-relaxed">
            At Aria, we are dedicated to making you feel confident and radiant
            in your own skin. Our mission is to help you bring out your best
            self—inside and out—through transformative treatments that leave you
            glowing with confidence.
          </p>
          <p className="text-sm md:text-base text-[#6C5E46] leading-relaxed">
            Imagine standing in front of a mirror and seeing the version of
            yourself you’ve always envisioned—toned, refreshed, and radiant.
            That’s the transformation we specialize in. Whether it’s redefining
            your silhouette with our advanced body sculpting treatments or
            revitalizing your skin with our luxurious face beauty therapies,
            we’re here to make it happen.
          </p>
          <p className="text-sm md:text-base text-[#6C5E46] leading-relaxed">
            Every service is crafted with care, blending cutting-edge technology
            with a deeply personal touch. Our serene, elegant space has been
            designed to provide a haven of relaxation and rejuvenation, offering
            a peaceful escape from the everyday hustle.
          </p>
          <p className="text-sm md:text-base text-[#6C5E46] leading-relaxed">
            We’re conveniently located at Adams Street. Our working hours are
            from 9am-8pm, Mondays to Saturdays. Step into a world where
            relaxation meets innovation, and let us guide you on your journey to
            confidence and self-love.
          </p>
          <p className="text-sm md:text-base text-[#6C5E46] leading-relaxed">
            Your transformation begins here—and we can’t wait to welcome you.
          </p>
          <button className="bg-[#8A6A50] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#6C5E46] transition">
            Book your Session
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={sectionImage}
            alt="Body Sculpting Center"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
