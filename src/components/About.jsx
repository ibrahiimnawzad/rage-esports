import React, { useState } from 'react';
import './About.css';
import Globe from 'react-globe.gl';

import aboutImage from '../assets/about.png';
import passionImage from '../assets/coding-passion.png';
import educationImage from '../assets/education.png';
import contactImage from '../assets/contact-me.png';
import copyImage from '../assets/Copy.svg';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ibrahimnawzad@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };
  
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="card">
          <img src={aboutImage} alt="About Me" className="card-image about-image" />
          <div>
            <h3>Hi, I'm Ibrahim</h3>
            <p className="text-desktop">
              I turn ideas into interactive websites that not only look good but feel alive. With 3 years of experience, I blend design, code, and creativity to craft digital experiences people remember.
            </p>
            <p className="text-mobile">
              Creative web developer with 3 years of experience turning ideas into interactive sites.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={educationImage} alt="education" className="card-image education-image" />
          <div>
            <h3>Education</h3>
            <p className="text-desktop">
              I'm studying Computer Science at Salahaddin University in Erbil. I'm in my third stage, sharpening my coding skills and learning how things work under the hood.
            </p>
            <p className="text-mobile">
              Studying Computer Science at Salahaddin University, 3rd stage.
            </p>
          </div>
        </div>

        <div className="card tech">
          <div className="globe-wrapper w-full sm:h-[276px] h-fit flex justify-center items-center">
            <Globe
              height={260}
              width={260}
              backgroundColor="rgba(0, 0, 0, 0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[{ lat: 40, lng: -100, text: 'React Globe', color: 'white', size: 15 }]}
              className='globe'
            />
          </div>
          <div>
            <h3>Availability And Flexibility</h3>
            <p className="text-desktop">
              I'm ready to collaborate across any time zone or location. Based in Erbil, Iraq — available for remote work worldwide.
            </p>
            <p className="text-mobile">
              Based in Erbil. Available for remote work anywhere.
            </p>
          </div>
        </div>

        <div className="card passion">
          <img src={passionImage} alt="Passion for Coding" className="card-image passion-image" />
          <div>
            <h3>My Passion for Coding</h3>
            <p className="text-desktop">
              Coding is my passion because it combines problem-solving with creativity. I love taking challenges and turning them into intuitive, well-designed solutions. The process of refining ideas and creating something functional and visually appealing is what excites me most.
            </p>
            <p className="text-mobile">
              I love solving problems and building creative, intuitive solutions through code.
            </p>
          </div>
        </div>

        <div className="card contact">
          <img src={contactImage} alt="Contact" className="contact-img" />
          <h3 className="contact-me-header">Contact Me</h3>

          <div className="email-container">
            <img
              onClick={handleCopy}
              src={copyImage}
              alt="copy email"
              className="copy-img"
            />
            <p className={`text-desktop email ${hasCopied ? 'copied-text' : ''}`}>
              {hasCopied ? 'Copied!' : 'ibrahimnawzad@gmail.com'}
            </p>
            <p className={`text-mobile email ${hasCopied ? 'copied-text' : ''}`}>
              {hasCopied ? 'Copied!' : 'ibrahimnawzad@gmail.com'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;