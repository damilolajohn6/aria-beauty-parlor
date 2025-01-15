import React from 'react'
import Slider from 'react-slick';

const testimonials = [
  {
    id: 1,
    name: "Christopher Peterson",
    text: "Aria has truly transformed my confidence! I was struggling with stubborn areas that just wouldn’t budge no matter how much I exercised or adjusted my diet. After just a few body contouring sessions, I noticed a significant difference—not only in my appearance but in how I felt about myself. The team at Aria was so welcoming and professional, guiding me every step of the way and tailoring the treatment to my goals. The results were beyond what I imagined! I can’t recommend Aria enough—it’s the best decision I’ve ever made for myself.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Donna Smith",
    text: "Aria has truly transformed my confidence! I was struggling with stubborn areas that just wouldn’t budge no matter how much I exercised or adjusted my diet. After just a few body contouring sessions, I noticed a significant difference—not only in my appearance but in how I felt about myself. The team at Aria was so welcoming and professional, guiding me every step of the way and tailoring the treatment to my goals. The results were beyond what I imagined! I can’t recommend Aria enough—it’s the best decision I’ve ever made for myself.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Mary John",
    text: "Aria has truly transformed my confidence! I was struggling with stubborn areas that just wouldn’t budge no matter how much I exercised or adjusted my diet. After just a few body contouring sessions, I noticed a significant difference—not only in my appearance but in how I felt about myself. The team at Aria was so welcoming and professional, guiding me every step of the way and tailoring the treatment to my goals. The results were beyond what I imagined! I can’t recommend Aria enough—it’s the best decision I’ve ever made for myself.",
    image: "https://via.placeholder.com/150",
  },
];

const Testimonial = () => {

    const settings = {
      dots: true, // Enable navigation dots
      infinite: true, // Loop through slides
      speed: 500, // Transition speed
      slidesToShow: 1, // Show one slide at a time
      slidesToScroll: 1, // Scroll one slide at a time
      autoplay: true, // Enable autoplay
      autoplaySpeed: 9000, // Autoplay interval
      arrows: true, // enable previous/next arrows
    };


  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-center text-3xl italic font-semibold text-gray-700 mb-6">
        Testimonial
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center justify-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <p className="text-lg italic text-gray-600 mb-4">
              "{testimonial.text}"
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              - {testimonial.name}
            </h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonial
