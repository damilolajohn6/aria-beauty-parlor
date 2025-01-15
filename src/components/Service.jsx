import React from "react";
import sectionImage from "../asset/engin-akyurt-SMwCQZWayj0-unsplash.jpg";
import Image1 from "../asset/alan-caishan-cU53ZFBr3lk-unsplash.jpg";

const Service = () => {
  return (
    <section className="bg-[#FAF4EE] py-6 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col items-center justify-center text-center py-6 mx-auto">
        <h1 className="text-2xl md:text-4xl font-serif font-bold text-[#6C5E46]">
          Result Driven Aesthetics
        </h1>
        <p className="text-sm md:text-base text-[#6C5E46] py-3 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-y-8 gap-x-12">
        {/* Image Section */}
        <div
          className="lg:w-1/2 relative w-full h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${sectionImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Centralized Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative text-white px-4 py-3 rounded-md text-center md:text-left w-4/5 sm:w-3/4 md:w-2/3">
              <p className="mb-4">
                Our Face Rejuvenation treatments are designed to restore and
                enhance your skin’s natural glow, leaving you looking and
                feeling refreshed, radiant, and confident.
              </p>
              <button className="border border-[#6C5E46] text-white hover:bg-[#6C5E46] py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base">
                Book a Session
              </button>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
            Our Face Rejuvenation treatments are thoughtfully designed to
            restore, enhance, and celebrate your natural beauty. From smoothing
            fine lines to revitalizing tired skin, we use advanced techniques
            and state-of-the-art technology to bring out the best in you.
          </p>
          <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
            Each treatment is a personalized experience, tailored to your skin’s
            needs and your individual goals. At Aria, rejuvenation is more than
            just a procedure—it’s a journey. In our serene and luxurious spa, we
            combine science and artistry to create treatments that not only
            refresh your skin but also renew your confidence.
          </p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-8 gap-6 md:gap-0">
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4">
          <button className="p-2 bg-white border border-[#6C5E46] rounded shadow hover:bg-[#6C5E46] hover:text-white transition">
            <span className="sr-only">Previous</span>←
          </button>
          <button className="p-2 bg-white border border-[#6C5E46] rounded shadow hover:bg-[#6C5E46] hover:text-white transition">
            <span className="sr-only">Next</span>→
          </button>
        </div>

        {/* Book a Session */}
        <div className="flex items-center justify-center">
          <button className="border border-[#6C5E46] text-[#6c5e46] hover:bg-[#6C5E46] hover:text-white py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base">
            Book a Session
          </button>
        </div>
      </div>
      {/* Second section */}
      <div className="py-12 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-y-8 gap-x-12">
          {/* Image Section */}
          <div
            className="lg:w-1/2 relative w-full h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${sectionImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Centralized Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative text-white px-4 py-3 rounded-md text-center md:text-left w-4/5 sm:w-3/4 md:w-2/3">
                <p className="mb-4">
                  Silk Touch Laser Facial: Experience Effortless Radiance The
                  Silk Touch Laser Facial at Aria is your gateway to smooth,
                  flawless, and rejuvenated skin.
                </p>
                <button className="border border-[#6C5E46] font-semibold text-white hover:bg-[#6C5E46] py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base">
                  Book a Session
                </button>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              The Silk Touch Laser Facial at Aria is your gateway to smooth,
              flawless, and rejuvenated skin. This advanced treatment is
              designed to target common skin concerns such as uneven texture,
              fine lines, pigmentation, and blemishes, leaving your face with a
              silky, radiant finish. Using cutting-edge laser technology, the
              Silk Touch Laser Facial works by gently resurfacing the skin and
              stimulating collagen production. This non-invasive treatment
              promotes natural healing, revealing a fresher, more youthful
              complexion with minimal downtime.
            </p>
            <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              The Silk Touch Laser Facial at Aria delivers smoother skin texture
              by diminishing rough patches, brightens your complexion by
              reducing dark spots, improves skin tone by targeting redness and
              discoloration, promotes a youthful glow by boosting collagen to
              minimize fine lines, and fits perfectly into your busy lifestyle
              with quick, visible results and minimal downtime.
            </p>
            <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              At Aria, we customize each Silk Touch Laser Facial to suit your
              skin’s unique needs, ensuring you achieve your desired results
              with precision and care. Whether you’re preparing for a special
              occasion or simply treating yourself, this facial is your ultimate
              skin-refreshing solution. Discover the magic of silky-smooth skin.
              Book your Silk Touch Laser Facial at Aria today!
            </p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-8 gap-6 md:gap-0">
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button className="p-2 bg-white border border-[#6C5E46] rounded shadow hover:bg-[#6C5E46] hover:text-white transition">
              <span className="sr-only">Previous</span>←
            </button>
            <button className="p-2 bg-white border border-[#6C5E46] rounded shadow hover:bg-[#6C5E46] hover:text-white transition">
              <span className="sr-only">Next</span>→
            </button>
          </div>

          {/* Book a Session */}
          <div className="flex items-center justify-center">
            <button className="border border-[#6C5E46] text-[#6c5e46] hover:bg-[#6C5E46] hover:text-white py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base">
              Book a Session
            </button>
          </div>
        </div>
      </div>
      {/* Body Sculpting */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Main Heading */}
        <div className="relative z-10 flex flex-col items-center px-4 md:px-12 lg:px-24 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-300 italic mb-4">
            Body Sculpting
          </h1>
        </div>

        {/* Content Box */}
        <div className="absolute bottom-[-250px] left-0 right-0 mx-auto w-full max-w-xl md:max-w-3xl lg:max-w-4xl bg-[#FAF4EE] py-8 px-6 md:py-12 md:px-16 lg:px-12 flex flex-col justify-center items-center text-center z-20">
          <div className="text-gray-600">
            {/* Paragraphs */}
            <p className="text-sm md:text-base lg:text-lg text-[#6C5E46] leading-relaxed mb-4 md:mb-6">
              Body contouring, a transformative treatment designed to help you
              achieve a toned and sculpted physique. Whether you’re looking to
              refine your natural curves, target stubborn fat, or enhance your
              overall body shape, our advanced body contouring solutions provide
              effective and non-invasive results.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#6C5E46] leading-relaxed mb-4 md:mb-6">
              Our body contouring treatments target areas such as the abdomen,
              thighs, arms, and waistline. We combine science and artistry to
              deliver noticeable results without the downtime of traditional
              surgical procedures.
            </p>
            {/* Button */}
            <button className="bg-[#8A6A50] text-white py-3 px-6 md:py-4 md:px-8 rounded-md shadow-lg hover:bg-[#6C5E46] transition">
              Book your Session
            </button>
          </div>
        </div>
      </div>

      <div className="h-[200px]"></div>

      {/* Third section */}
      <div className="py-12 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-y-8 gap-x-12">
          {/* Image Section */}
          <div
            className="lg:w-1/2 relative w-full h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${sectionImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Centralized Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative text-white px-4 py-3 rounded-md text-center md:text-left w-4/5 sm:w-3/4 md:w-2/3">
                <p className="mb-4">
                  Silk Touch Laser Facial: Experience Effortless Radiance The
                  Silk Touch Laser Facial at Aria is your gateway to smooth,
                  flawless, and rejuvenated skin.
                </p>
                <button className="border border-[#6C5E46] font-semibold text-white hover:bg-[#6C5E46] py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base">
                  Book a Session
                </button>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              The Silk Touch Laser Facial at Aria is your gateway to smooth,
              flawless, and rejuvenated skin. This advanced treatment is
              designed to target common skin concerns such as uneven texture,
              fine lines, pigmentation, and blemishes, leaving your face with a
              silky, radiant finish. Using cutting-edge laser technology, the
              Silk Touch Laser Facial works by gently resurfacing the skin and
              stimulating collagen production. This non-invasive treatment
              promotes natural healing, revealing a fresher, more youthful
              complexion with minimal downtime.
            </p>
            <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              The Silk Touch Laser Facial at Aria delivers smoother skin texture
              by diminishing rough patches, brightens your complexion by
              reducing dark spots, improves skin tone by targeting redness and
              discoloration, promotes a youthful glow by boosting collagen to
              minimize fine lines, and fits perfectly into your busy lifestyle
              with quick, visible results and minimal downtime.
            </p>
            {/* <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              At Aria, we customize each Silk Touch Laser Facial to suit your
              skin’s unique needs, ensuring you achieve your desired results
              with precision and care. Whether you’re preparing for a special
              occasion or simply treating yourself, this facial is your ultimate
              skin-refreshing solution. Discover the magic of silky-smooth skin.
              Book your Silk Touch Laser Facial at Aria today!
            </p> */}
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-8 gap-6 md:gap-0">
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button className="p-2 bg-white border border-[#6C5E46] rounded shadow hover:bg-[#6C5E46] hover:text-white transition">
              <span className="sr-only">Previous</span>←
            </button>
            <button className="p-2 bg-white border border-[#6C5E46] rounded shadow hover:bg-[#6C5E46] hover:text-white transition">
              <span className="sr-only">Next</span>→
            </button>
          </div>

          {/* Book a Session */}
          <div className="flex items-center justify-center">
            <button className="border border-[#6C5E46] text-[#6c5e46] hover:bg-[#6C5E46] hover:text-white py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base">
              Book a Session
            </button>
          </div>
        </div>
      </div>
      {/* Forth section */}
      <div className="py-12 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-y-8 gap-x-12">
          {/* Image Section */}
          <div
            className="lg:w-1/2 relative w-full h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${sectionImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Centralized Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative text-white px-4 py-3 rounded-md text-center md:text-left w-4/5 sm:w-3/4 md:w-2/3">
                <p className="mb-4">
                  Silk Touch Laser Facial: Experience Effortless Radiance The
                  Silk Touch Laser Facial at Aria is your gateway to smooth,
                  flawless, and rejuvenated skin.
                </p>
                <button className="border border-[#6C5E46] font-semibold text-white hover:bg-[#6C5E46] py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base">
                  Book a Session
                </button>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              The Silk Touch Laser Facial at Aria is your gateway to smooth,
              flawless, and rejuvenated skin. This advanced treatment is
              designed to target common skin concerns such as uneven texture,
              fine lines, pigmentation, and blemishes, leaving your face with a
              silky, radiant finish. Using cutting-edge laser technology, the
              Silk Touch Laser Facial works by gently resurfacing the skin and
              stimulating collagen production. This non-invasive treatment
              promotes natural healing, revealing a fresher, more youthful
              complexion with minimal downtime.
            </p>
            <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              The Silk Touch Laser Facial at Aria delivers smoother skin texture
              by diminishing rough patches, brightens your complexion by
              reducing dark spots, improves skin tone by targeting redness and
              discoloration, promotes a youthful glow by boosting collagen to
              minimize fine lines, and fits perfectly into your busy lifestyle
              with quick, visible results and minimal downtime.
            </p>
            {/* <p className="text-[#6C5E46] leading-relaxed text-sm md:text-base">
              At Aria, we customize each Silk Touch Laser Facial to suit your
              skin’s unique needs, ensuring you achieve your desired results
              with precision and care. Whether you’re preparing for a special
              occasion or simply treating yourself, this facial is your ultimate
              skin-refreshing solution. Discover the magic of silky-smooth skin.
              Book your Silk Touch Laser Facial at Aria today!
            </p> */}
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto mt-8 gap-6 md:gap-0">
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button className="p-2 bg-white border border-[#6C5E46] rounded shadow hover:bg-[#6C5E46] hover:text-white transition">
              <span className="sr-only">Previous</span>←
            </button>
            <button className="p-2 bg-white border border-[#6C5E46] rounded shadow hover:bg-[#6C5E46] hover:text-white transition">
              <span className="sr-only">Next</span>→
            </button>
          </div>

          {/* Book a Session */}
          <div className="flex items-center justify-center">
            <button className="border border-[#6C5E46] text-[#6c5e46] hover:bg-[#6C5E46] hover:text-white py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base">
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
