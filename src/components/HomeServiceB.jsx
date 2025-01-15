import React from "react";
import Image1 from "../asset/alan-caishan-cU53ZFBr3lk-unsplash.jpg";
import Image5 from "../asset/alan-caishan-cU53ZFBr3lk-unsplash.jpg";
import image2 from "../asset/rosa-rafael-Pe9IXUuC6QU-unsplash.jpg";
import Image3 from "../asset/engin-akyurt-SMwCQZWayj0-unsplash.jpg";
import Image4 from "../asset/antonika-chanel-RJCslxmvBcs-unsplash.jpg";

const HomeServiceB = () => {
  const services = [
    { title: "Face Rejuvenation", image: Image5 },
    { title: "Silk Touch Laser Facial", image: image2 },
    { title: "Silk Touch Laser Facial", image: Image3 },
    { title: "Age-Defy Sculpt Facial", image: Image4 },
  ];

  return (
    <>
      <section
        className="relative w-full h-[300px] sm:h-[400px] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center px-4 sm:px-16 justify-center h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-400 italic mb-4">
            Body Sculpting
          </h1>
        </div>

        <div className="absolute bottom-[-160px] sm:bottom-[-200px] left-0 right-0 mx-auto w-full max-w-4xl bg-[#FAF4EE] py-12 px-6 sm:px-8 md:px-12 justify-center items-center text-center z-20">
          <div className="text-gray-600">
            <p className="text-[#6C5E46] leading-relaxed mb-6">
              Body contouring, a transformative treatment designed to help you
              achieve a toned and sculpted physique. Whether you’re looking to
              refine your natural curves, target stubborn fat, or enhance your
              overall body shape, our advanced body contouring solutions provide
              effective and non-invasive results.
            </p>
            <p className="text-[#6C5E46] leading-relaxed mb-6">
              Our body contouring treatments target areas such as the abdomen,
              thighs, arms, and waistline. We combine science and artistry to
              deliver noticeable results without the downtime of traditional
              surgical procedures.
            </p>
            <button className="bg-[#8A6A50] text-white py-3 px-6 rounded-md shadow-lg hover:bg-[#6C5E46] transition">
              Book your Session
            </button>
          </div>
        </div>
      </section>

      <div className="h-[40px] sm:h-[108px]"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto w-full max-w-4xl bg-[#FAF4EE] py-6 sm:py-12 px-4 sm:px-16 justify-center items-center">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-md w-full h-[200px] sm:h-[250px] object-cover"
              loading="lazy"
            />
            <p className="mt-4 text-base sm:text-lg font-medium text-[#6C5E46] text-center">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeServiceB;
