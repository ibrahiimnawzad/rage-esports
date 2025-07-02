import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-glow"></div>

      <div className="hero-left">
        <h1 className="hero-heading">
          <span className="hero-letter-large">I</span>
          <span className="hero-letter-small">BRAHIIM</span>
        </h1>
        <h2 className="hero-subheading">
          <span className="hero-letter-large">N</span>
          <span className="hero-letter-small">AWZAD</span>
        </h2>
        <p className="hero-tagline">Creative Developer</p>
      </div>

      <div className="hero-right">
        {/* 3D Shape */}
      </div>
    </section>
  );
};

export default Hero;
