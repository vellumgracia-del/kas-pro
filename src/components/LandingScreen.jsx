import { useState } from 'react';

export default function LandingScreen({ onEnter }) {
  const [fadingOut, setFadingOut] = useState(false);

  const handleEnter = () => {
    setFadingOut(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div className={`landing-screen ${fadingOut ? 'fade-out' : ''}`}>
      <svg className="logo-svg" viewBox="0 0 100 100">
        <path d="M50 5 L90 25 V75 L50 95 L10 75 V25 Z" />
        <path
          d="M30 50 L45 65 L70 40"
          style={{ strokeWidth: 6, strokeLinecap: 'round' }}
        />
      </svg>
      <div className="app-title-splash">Your Manage</div>
      <button className="btn-enter" onClick={handleEnter}>
        Mulai Kelola
      </button>
    </div>
  );
}
