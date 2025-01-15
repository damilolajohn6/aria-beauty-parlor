import React from "react";
import Slider from "react-slick";
import Image1 from "../asset/alan-caishan-cU53ZFBr3lk-unsplash.jpg";
import Image2 from "../asset/rosa-rafael-Pe9IXUuC6QU-unsplash.jpg";
import Image3 from "../asset/antonika-chanel-RJCslxmvBcs-unsplash.jpg";
import Image4 from "../asset/dominique-rivas-q3iVNEKJIyo-unsplash.jpg";
import image5 from "../asset/emiliano-vittoriosi-qTu9DppC3mM-unsplash.jpg";
import image6 from "../asset/engin-akyurt-SMwCQZWayj0-unsplash.jpg";


const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  image5,
  image6,
];

const Gallery = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 10000, // Autoplay interval (3 seconds)
    arrows: true, // Hide navigation arrows
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
