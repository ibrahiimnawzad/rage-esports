import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import chefsCode from '../assets/chefs code.png';
import screenzy from '../assets/screenzy.png';
import fitnessLab from '../assets/fitnessLab.png';
import listify from '../assets/listify.png';
import Github from '../assets/Github.png';

import './Works.css';

const projects = [
  {
    name: "The Fitness Lab",
    description: "A fitness tracker web app built with React to monitor daily workouts and goals.",
    tags: [
      { name: "react", color: "tag-react" },
      { name: "css", color: "tag-css" },
      { name: "mui", color: "tag-mui" }
    ],
    image: fitnessLab,
    source_code_link: "https://github.com/ibrahiimnawzad/The-fitness-Lab",
        live_link: "https://thefitnesslab.netlify.app",

  },
  {
   name: "Listify",
    description: "Listify helps you organize tasks and get things done—fast and simple.",
    tags: [
      { name: "react", color: "tag-react" },
      { name: "css", color: "tag-css" },
    ],
    image: listify,
    source_code_link: "https://github.com/ibrahiimnawzad/Listify",
    live_link: "https://listfyy.netlify.app",

  },
  {
    name: "Chef's Code",
    description: "Chef's Code is a modern app to explore and save recipes.",
    tags: [
      { name: "react", color: "tag-react" },
      { name: "tailwind", color: "tag-css" },
    ],
    image: chefsCode,
    source_code_link: "https://github.com/ibrahiimnawzad/chefscode",
    live_link: "https://chefs-code.netlify.app",

  },
  {
     name: "Screenzy",
    description: "A web app for browsing movies and series with ratings and summaries.",
    tags: [
      { name: "react", color: "tag-react" },
      { name: "css", color: "tag-css" },
    ],
    image: screenzy,
    source_code_link: "https://github.com/ibrahiimnawzad/screenzy",
    live_link: "https://screenzy.netlify.app",

  },
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='project-card'
      >
        <div className='project-image-wrapper'>
          <img src={image} alt={`${name} preview`} className='project-image' />
          <div className='card-img-hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='card-icon'
            >
              <img src={Github} alt='source code' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <a href={live_link} target="_blank" rel="noopener noreferrer" className="project-title hover-link">
            {name}
          </a>
          <p className='project-description'>{description}</p>
        </div>

        <div className="tags-and-live-btn-container">
          <div className='project-tags'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`project-tag ${tag.color}`}>
                #{tag.name}
              </p>
                  ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = 3;
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };
  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + visibleCount, projects.length - visibleCount));
  };

  const visibleProjects = isDesktop
    ? projects.slice(startIndex, startIndex + visibleCount)
    : projects;

  return (
    <section className="works-container" id="projects">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className='works-subtitle'>My Latest</p>
        <h2 className='works-title'>Projects.</h2>
      </motion.div>

      <div className='works-description-wrapper'>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='works-description'
        >
          Following projects showcase my skills and experience through real-world examples. Each project is briefly described with links to code and live demos.
        </motion.p>
      </div>

      <div className="projects-slider-wrapper">
        {isDesktop && (
          <button
            className="navigation-btn left-btn"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            ⬅
          </button>
        )}

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`project-${startIndex + index}`} index={index} {...project} />
          ))}
        </div>

        {isDesktop && (
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= projects.length}
            className="navigation-btn right-btn"
          >
            ➡
          </button>
        )}
      </div>
    </section>
  );
};

export default Works;
