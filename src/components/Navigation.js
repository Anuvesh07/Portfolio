import React, { useState, useEffect } from 'react';

function Navigation({ theme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Interactive window dot handlers
  const handleDotClick = (color) => {
    if (color === 'red') alert('Close (Demo)');
    if (color === 'yellow') alert('Minimize (Demo)');
    if (color === 'green') alert('Maximize (Demo)');
  };

  return (
    <nav className={`navigation${isScrolled ? ' scrolled' : ''}`} aria-label="Main Navigation">
      <div className="nav-container">
        <div className="window-controls">
          <span className="window-dot dot-red" onClick={() => handleDotClick('red')} tabIndex={0} role="button" aria-label="Close" />
          <span className="window-dot dot-yellow" onClick={() => handleDotClick('yellow')} tabIndex={0} role="button" aria-label="Minimize" />
          <span className="window-dot dot-green" onClick={() => handleDotClick('green')} tabIndex={0} role="button" aria-label="Maximize" />
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 