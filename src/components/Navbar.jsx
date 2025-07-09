import React, { useState, useEffect } from 'react';
import './Navbar.css';
import RageLogo from '../assets/rage-logo.png';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sections = ['about', 'news', 'esports', 'contact'];

  const handleClick = (section) => {
    setActive(section); // Immediately update UI
    setIsOpen(false);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2; // center of viewport
      let found = false;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            if (active !== section) setActive(section);
            found = true;
            break;
          }
        }
      }

      // If above the first section
      const firstTop = document.getElementById(sections[0])?.offsetTop || 0;
      if (!found && scrollY < firstTop) {
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <>
      <nav className="navbar-container">
        <a href="#" onClick={() => setActive('')}>
          <img className="navbar-logo" src={RageLogo} alt="Rage Logo" />
        </a>

        <div className="navbar-links hidden lg:flex">
          {sections.map((section, index) => (
            <React.Fragment key={section}>
              <a
                href={`#${section}`}
                onClick={() => handleClick(section)}
                className={`navbar-link ${active === section ? 'active-link' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              {index !== sections.length - 1 && (
                <span className="navbar-separator">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div
          className="navbar-hamburger lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu lg:hidden">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => handleClick(section)}
              className="mobile-link"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
