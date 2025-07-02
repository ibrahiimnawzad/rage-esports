import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sections = ['about', 'projects', 'contact'];

const handleClick = (section) => {
  setActive(section);
  setIsOpen(false);
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
};


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let found = false;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120; 
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActive(section);
            found = true;
            break;
          }
        }
      }

      // If above first section, remove active
      if (!found && scrollY < document.getElementById(sections[0]).offsetTop - 120) {
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar-container">
        <a
          className="navbar-logo"
          href="#"
          onClick={() => setActive('')}
        >
          IBRAHIIM
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
              {index !== sections.length - 1 && <span className="navbar-separator">/</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="navbar-hamburger lg:hidden" onClick={() => setIsOpen(!isOpen)}>
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
