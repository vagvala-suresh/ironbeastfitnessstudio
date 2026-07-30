import React from 'react';
import './Hero.css';

const Hero = ({ onOpenJoinModal }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-wrapper">
        <img 
          src="/assets/hero_gym.jpg" 
          alt="Iron Feast Fitness Studio Interior" 
          className="hero-bg-image"
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">NOW OPEN • PREMIER ATHLETIC CLUB</span>
          </div>

          <h1 className="hero-title">
            FORGE YOUR <span className="glow">LEGACY</span> IN <span className="lime">IRON</span>
          </h1>

          <p className="hero-description">
            Welcome to Iron Feast Fitness Studio. Premium weightlifting equipment, high-intensity functional training, expert personal coaching, and an unstoppable community built to unlock your peak potential.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={onOpenJoinModal}>
              CLAIM FREE 3-DAY PASS
            </button>
            <a href="#classes" className="btn-secondary">
              EXPLORE CLASSES
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1500<span>+</span></span>
              <span className="stat-label">Active Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40<span>+</span></span>
              <span className="stat-label">Expert Trainers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24<span>/7</span></span>
              <span className="stat-label">VIP Gym Access</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9<span>★</span></span>
              <span className="stat-label">Member Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
