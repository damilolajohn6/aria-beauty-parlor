import React from "react";
import Image1 from "../asset/alan-caishan-cU53ZFBr3lk-unsplash.jpg";
import image2 from "../asset/rosa-rafael-Pe9IXUuC6QU-unsplash.jpg";
import Image3 from "../asset/engin-akyurt-SMwCQZWayj0-unsplash.jpg";
import Image4 from "../asset/antonika-chanel-RJCslxmvBcs-unsplash.jpg";

function HomeServices() {
  const services = [
    {
      title: "Face Rejuvenation",
      image: Image1,
    },
    {
      title: "Silk Touch Laser Facial",
      image: image2,
    },
    {
      title: "Silk Touch Laser Facial",
      image: Image3,
    },
    {
      title: "Age-Defy Sculpt Facial",
      image: Image4,
    },
  ];

  return (
    <section className="bg-[#FAF4EE] py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#6C5E46] mb-4">
          Result Driven Aesthetics
        </h2>
        <p className="text-sm md:text-base text-[#6C5E46] mb-12">
          Lorem ipsum dolor sit amet consectetur. Sollicitudin et dictum mauris
          ultrices nisl sapien quis neque.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-md w-full h-[200px] object-cover"
                loading="lazy"
              />
              <p className="mt-4 text-base font-medium text-[#6C5E46]">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button className="p-2 bg-white border border-[#6C5E46] rounded-full shadow hover:bg-[#6C5E46] hover:text-white transition">
            <span className="sr-only">Previous</span>←
          </button>
          <button className="p-2 bg-white border border-[#6C5E46] rounded-full shadow hover:bg-[#6C5E46] hover:text-white transition">
            <span className="sr-only">Next</span>→
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
