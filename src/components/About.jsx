import React from 'react';
import './About.css';
import Watermark from '../assets/logo-bg.png';
import BlackLogo from '../assets/black-logo.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <img src={Watermark} alt="bg" className='watermark' />
        <div className="text-container">
          <h2 className='text-header'>Who Are We?</h2>
          <p className='paragraph'>
            Rage Esports is a professional esports team founded in 2025 with the goal of competing at the highest levels and creating content that matches the ambitions of the digital generation. We bring together a select group of players and content creators united by passion, discipline, and a drive for excellence. We participate in both local and international tournaments and produce high-quality content that reflects the spirit of the team and the culture of modern gaming.
          </p>
          <p className='sub-header'> <span className='highlighted'>In Rage, We Play To Win. And Win To Inspire.</span></p>
        </div>

        <div className="ribbon">
          <div className="ribbon-track">
            <div className="ribbon-content">
              {[...Array(10)].map((_, index) => (
                <React.Fragment key={index}>
                  <img src={BlackLogo} alt="logo" className="ribbon-logo" />
                  <p>{['RAGE', 'ESPORTS', '2025'][index % 3]}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
