import React from 'react';

function Header() {
  return (
    <header id="header">
      <div className="header-content">
        <h1>Anuvesh Chilwal</h1>
        <p>Computer Science Student | Web & Java Developer</p>
        <div className="social">
          <a href="mailto:anuveshchilwal007@gmail.com">
            <span>📧</span> Email
          </a>
          <a href="https://github.com/Anuvesh07" target="_blank" rel="noopener noreferrer">
            <span>🐙</span> GitHub
          </a>
          <a href="https://linkedin.com/in/anuvesh-chilwal" target="_blank" rel="noopener noreferrer">
            <span>💼</span> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header; 