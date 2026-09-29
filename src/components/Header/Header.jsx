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
        <a href="#top" className="brand-logo" aria-label="Sandy's Iron Beast Fitness Studio home">
          <img
            src="/ironbeastfitnessstudio/assets/logo-CxuevWul.png"
            alt="Sandy's Iron Beast Fitness Studio logo"
            className="brand-logo-image"
          />
          <div className="logo-text">
            <span className="logo-title">Sandy's</span>
            <span className="logo-subtitle">Iron Beast Fitness Studio</span>
          </div>
        </a>

        <div className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#top" className="nav-link" onClick={() => setMobileOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMobileOpen(false)}>About</a></li>
            <li><a href="#services" className="nav-link" onClick={() => setMobileOpen(false)}>Programs</a></li>
            <li><a href="#plans" className="nav-link" onClick={() => setMobileOpen(false)}>Plans</a></li>
            <li><a href="#trainers" className="nav-link" onClick={() => setMobileOpen(false)}>Trainers</a></li>
            <li><a href="#transformations" className="nav-link" onClick={() => setMobileOpen(false)}>Transformations</a></li>
            <li><a href="#gallery" className="nav-link" onClick={() => setMobileOpen(false)}>Gallery</a></li>
            <li><a href="#reviews" className="nav-link" onClick={() => setMobileOpen(false)}>Reviews</a></li>
            <li><a href="#faq" className="nav-link" onClick={() => setMobileOpen(false)}>FAQ</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
