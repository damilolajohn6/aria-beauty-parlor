import React from "react";
import teamImage from "../asset/engin-akyurt-ZbzYDboN7fg-unsplash.jpg";
import teamImage2 from "../asset/antonika-chanel-RJCslxmvBcs-unsplash.jpg";

const AboutContent = () => {
  return (
    <section className="bg-white py-12 px-6">
      {/* Section 1 */}
      <div className="flex flex-col-reverse lg:flex-row mx-auto items-center gap-8 px-4 lg:px-12 justify-center">
        <div className="lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#6C5E46]">
            State-Of-The-Art Technology
          </h3>
          <p className="text-sm md:text-base text-[#6C5E46] py-4 leading-relaxed">
            We are proud to offer face beauty treatments powered by the latest
            advancements in non-invasive and minimally invasive technology. Our
            goal is to deliver safe, effective, and cutting-edge solutions that
            rejuvenate your skin and enhance your natural beauty. Our
            state-of-the-art equipment includes advanced laser systems,
            radiofrequency devices, and ultrasound technology designed to
            address a range of skin concerns with precision and care. These
            technologies are ideal for targeting fine lines, wrinkles, dark
            spots, redness, and other signs of aging or skin damage.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={teamImage}
            alt="State-of-the-art technology"
            className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto lg:max-w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row mx-auto my-12 items-center gap-8 px-4 lg:px-12 justify-center">
        <div className="lg:w-1/2">
          <img
            src={teamImage2}
            alt="Expert professionals"
            className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto lg:max-w-full"
            loading="lazy"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#6C5E46]">
            Expert Professionals for Body Contouring Procedures
          </h3>
          <p className="text-sm md:text-base text-[#6C5E46] py-4 leading-relaxed">
            Our body contouring services are delivered by a team of highly
            skilled and experienced professionals who specialize in helping you
            achieve your ideal silhouette. Our experts are trained in the latest
            non-invasive and minimally invasive body contouring techniques,
            ensuring that every treatment is both effective and safe. From
            initial consultation to post-treatment care, our team takes the time
            to understand your unique body goals and creates a personalized plan
            tailored to your needs. Whether you're looking to target stubborn
            fat, enhance body tone, or improve skin tightness, our professionals
            use advanced technology and precise techniques to deliver
            exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
