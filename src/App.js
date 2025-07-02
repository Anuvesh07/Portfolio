import React, { useState } from 'react';
import './App.css';
import './components/Skills.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('dark');

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    document.body.classList.toggle('light-mode');
  };

  return (
    <div className={`App ${theme}-mode`}>
      {/* Floating profile avatar, outside nav bar */}
      <div
        className="floating-profile-avatar"
        onClick={handleToggleTheme}
        title="Toggle light/dark mode"
        tabIndex={0}
        role="button"
        aria-label="Toggle theme"
        onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && handleToggleTheme()}
      >
        <span>AC</span>
      </div>
      <Navigation theme={theme} />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
