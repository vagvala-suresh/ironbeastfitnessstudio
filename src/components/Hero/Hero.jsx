import React from 'react';
import './Hero.css';

const Hero = ({ onOpenJoinModal }) => {
  return (
    <>
      <section id="top" className="hero-section">
        <div className="hero-bg-wrapper">
          <img
            src="/assets/hero-BSeVQnra.png"
            alt="Sandy's Iron Beast Gym Hero"
            className="hero-bg-image"
          />
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              <span className="badge-text">5.0 GOOGLE RATING · 40+ REVIEWS</span>
            </div>

            <h1 className="hero-title">
              TRAIN HARD. <span className="glow">STAY STRONG.</span> <span className="lime">BECOME THE BEAST.</span>
            </h1>

            <p className="hero-description">
              Sandy's Iron Beast Fitness Studio is Bachupally's premium gym for transformation, strength, and community. Certified trainers, elite equipment, and personalized plans built to forge your strongest self.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary" onClick={onOpenJoinModal}>
                BOOK A FREE TRIAL
              </button>
              <a href="#plans" className="btn-secondary">
                VIEW MEMBERSHIPS
              </a>
            </div>

            <div className="hero-features-row">
              <div className="hero-feature-item">
                <span>Premium Equipment</span>
              </div>
              <div className="hero-feature-item">
                <span>Certified Trainers</span>
              </div>
              <div className="hero-feature-item">
                <span>Clean & Spacious</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
