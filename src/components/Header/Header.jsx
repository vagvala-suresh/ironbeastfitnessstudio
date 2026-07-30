import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onOpenJoinModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#hero" className="brand-logo">
          <div className="logo-badge">IF</div>
          <div className="logo-text">
            <span className="logo-title">IRON FEAST</span>
            <span className="logo-subtitle">FITNESS STUDIO</span>
          </div>
        </a>

        <div className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero" className="nav-link" onClick={() => setMobileOpen(false)}>Home</a></li>
            <li><a href="#features" className="nav-link" onClick={() => setMobileOpen(false)}>About</a></li>
            <li><a href="#classes" className="nav-link" onClick={() => setMobileOpen(false)}>Classes</a></li>
            <li><a href="#bmi" className="nav-link" onClick={() => setMobileOpen(false)}>BMI Tool</a></li>
            <li><a href="#trainers" className="nav-link" onClick={() => setMobileOpen(false)}>Trainers</a></li>
            <li><a href="#pricing" className="nav-link" onClick={() => setMobileOpen(false)}>Pricing</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</a></li>
          </ul>
        </div>

        <div className="header-actions">
          <button className="btn-header-cta" onClick={onOpenJoinModal}>
            JOIN NOW
          </button>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
