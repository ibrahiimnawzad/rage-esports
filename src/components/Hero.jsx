import React from 'react';
import './Hero.css';
import HeroImage from '../assets/hero-img.png';
import HeroImageExp from '../assets/hero-img-exp.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <img className="hero-image-background" src={HeroImageExp} alt="Background Hero" />
      
      <img className="hero-image" src={HeroImage} alt="Hero" />
    </section>
  );
};

export default Hero;
