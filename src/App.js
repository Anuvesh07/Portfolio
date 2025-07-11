import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Skills.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Resume from './components/Resume';
import LeetCodeGraph from './components/LeetCodeGraph';
import GitHubGraph from './components/GitHubGraph';

function BackgroundVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showShimmer, setShowShimmer] = useState(true);

  const handleIframeLoad = () => {
    setShowShimmer(true);
    setTimeout(() => {
      setVideoLoaded(true);
      setShowShimmer(false);
    }, 4000);
  };

  // If the iframe src ever changes, reset shimmer and videoLoaded
  // (Not needed for your current static src, but this is a good pattern)

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {showShimmer && (
        <div className="youtube-shimmer" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(90deg, #e0e0e0 25%, #f8f8f8 50%, #e0e0e0 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
          zIndex: 2,
        }} />
      )}
      <iframe
        src="https://www.youtube.com/embed/zhDwjnYZiCo?autoplay=1&mute=1&controls=0&loop=1&playlist=zhDwjnYZiCo&modestbranding=1&showinfo=0&rel=0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{
          width: '100vw',
          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          display: videoLoaded ? 'block' : 'none',
        }}
        title="Home Background Video"
        onLoad={handleIframeLoad}
      />
    </div>
  );
}

function App() {
  const [navState, setNavState] = useState('normal'); // 'normal', 'minimized', 'maximized', 'hidden'

  return (
    <Router>
      <div className={`App`}>
        <BackgroundVideo />
        <Header />
        <Navigation navState={navState} setNavState={setNavState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/leetcode" element={<LeetCodeGraph />} />
          <Route path="/github" element={<GitHubGraph />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
