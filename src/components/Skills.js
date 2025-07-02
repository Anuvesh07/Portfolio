import React from 'react';
import './Skills.css';

// Each array is a ring, innermost to outermost
const skills = [
  ['C'], // center
  ['HTML', 'CSS', 'Python', 'Java'], // first ring
  ['JavaScript', 'React', 'Node.js', 'SQL', 'C++', 'AI', 'Next.js', 'TypeScript'], // second ring
];

// Dynamically calculate radii based on number of rings and container size
const containerSize = 500; // px, increased for more space
const center = containerSize / 2;
const baseRadius = 80; // px, distance from center for first ring
const ringGap = 80; // px, gap between rings

function getCirclePosition(index, total, radius) {
  // For a given index in a ring, return {left, top} in px for absolute positioning
  const angle = (2 * Math.PI * index) / total - Math.PI / 2; // start at top
  const x = center + radius * Math.cos(angle);
  const y = center + radius * Math.sin(angle);
  return {
    left: `${x}px`,
    top: `${y}px`,
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  };
}

function Skills() {
  return (
    <section id="skills" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Skills</h2>
      <div className="skills-circles-container">
        <div
          className="skills-circles"
          style={{ width: containerSize, height: containerSize, position: 'relative' }}
        >
          {/* Render all rings dynamically */}
          {skills.map((ring, ringIdx) =>
            ring.map((skill, i) => (
              <div
                className={`skill-circle${ringIdx === 0 ? ' core' : ''}`}
                key={`ring${ringIdx}-skill${i}`}
                style={
                  ringIdx === 0
                    ? {
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute',
                      }
                    : getCirclePosition(i, ring.length, baseRadius + ringGap * (ringIdx - 1))
                }
              >
                {skill}
              </div>
            ))
          )}
        </div>
      </div>
      <p style={{ color: '#888', fontSize: '0.95rem', marginTop: '1rem' }}>
        Skills are arranged in concentric circles, with C at the core.
      </p>
    </section>
  );
}

export default Skills; 