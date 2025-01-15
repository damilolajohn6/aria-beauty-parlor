import React from 'react'
import HomeAbout from '../components/HomeAbout';
import AboutContent from '../components/AboutContent';
import HomeServices from '../components/HomeServices';
import HomeServiceB from '../components/HomeServiceB';
import Testimonial from '../components/Testimonial';
import Gallery from '../components/Gallery';

const About = () => {
  return (
    <div>
      <HomeAbout />
      <AboutContent />
      <HomeServices />
      <HomeServiceB />
      <Testimonial />
      <Gallery />
    </div>
  )
}

export default About
