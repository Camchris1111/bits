import React from 'react';
import Cubes from './components/Cubes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>🎲 Interactive 3D Cubes Demo</h1>
        <p>Move your mouse over the grids and click to see ripple effects!</p>
      </header>

      <main className="main-content">
        {/* Large Scale Demo - Primary Feature */}
        <section className="demo-section primary">
          <h2>Large Scale Grid (20x20)</h2>
          <div className="cube-container large">
            <Cubes
              gridSize={20}
              cubeSize={25}
              maxAngle={60}
              radius={4}
              faceColor="#0a0a2e"
              borderStyle="1px solid #16213e"
              rippleColor="#00ff88"
              rippleSpeed={1.5}
              shadow="0 0 8px rgba(0, 255, 136, 0.3)"
              duration={{ enter: 0.2, leave: 0.8 }}
            />
          </div>
        </section>

        {/* Medium Scale with Different Colors */}
        <section className="demo-section">
          <h2>Medium Scale Grid (15x15) - Purple Theme</h2>
          <div className="cube-container medium">
            <Cubes
              gridSize={15}
              cubeSize={30}
              maxAngle={45}
              radius={3}
              faceColor="#2d1b69"
              borderStyle="1px solid #8b5fbf"
              rippleColor="#ff6b9d"
              rippleSpeed={2}
              shadow="0 0 10px rgba(139, 95, 191, 0.4)"
            />
          </div>
        </section>

        {/* Compact High-Speed Demo */}
        <section className="demo-section">
          <h2>Fast Animation Grid (12x12) - Cyan Theme</h2>
          <div className="cube-container small">
            <Cubes
              gridSize={12}
              cubeSize={35}
              maxAngle={30}
              radius={5}
              faceColor="#001122"
              borderStyle="2px solid #00ccff"
              rippleColor="#ffff00"
              rippleSpeed={3}
              shadow="0 0 12px rgba(0, 204, 255, 0.5)"
              duration={{ enter: 0.15, leave: 0.4 }}
              easing="power2.out"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React + GSAP • Interactive 3D Animations</p>
      </footer>
    </div>
  );
}

export default App;