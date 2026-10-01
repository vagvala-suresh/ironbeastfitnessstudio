import React from 'react';
import MobileCardSlider from '../MobileCardSlider/MobileCardSlider.jsx';
import './Features.css';

const Features = () => {
  return (
    <section id="about" className="features-section">
      <div className="container features-content">
        <div className="features-media">
          <div className="image-card">
            <img
              src="/ironbeastfitnessstudio/assets/sandy-trainer-CcULxw0u.jpg"
              alt="Sandy — Head Trainer & Founder of Iron Beast Fitness Studio"
              className="about-image"
            />
            <div className="image-accent" />
          </div>
        </div>

        <div className="features-copy">
          <div className="features-header">
            <div className="section-title-badge">ABOUT US</div>
            <h2 className="section-title">
              WHERE <span>BEASTS ARE BUILT.</span>
            </h2>
            <p className="section-subtitle">
              Sandy's Iron Beast Fitness Studio is Bachupally's #1 premium fitness destination for physical transformation and athletic excellence.
            </p>
          </div>

          <MobileCardSlider className="about-copy-grid" label="About Iron Beast">
            <div className="about-card" key="about-mission">
              <p>
                Founded on the conviction that fitness is not merely a routine but a complete lifestyle revolution, we deliver a state-of-the-art training sanctuary equipped with world-class biomechanical machinery maintained to the highest professional standards.
              </p>
            </div>
            <div className="about-card" key="about-coaching">
              <p>
                With over 20 years of elite coaching experience, our head trainer Sandy has personally guided 2,500+ members through extraordinary transformations. We engineer customized training blueprints and precision nutrition strategies that are calibrated to your unique body composition, metabolism, and performance goals — not generic cookie-cutter plans.
              </p>
            </div>
            <div className="about-card" key="about-programs">
              <p>
                From aggressive fat-loss protocols and hypertrophy-driven muscle building to posture correction and cardio conditioning — every program is crafted with surgical precision. At Iron Beast, we don't just build bodies. We forge unbreakable champions.
              </p>
            </div>
            <div className="about-card" key="about-community">
              <p>
                Our community is built on accountability, discipline, and relentless ambition. Whether you are taking your very first step toward fitness or chasing a new personal record, Iron Beast gives you the tools, expertise, and unstoppable energy to become the strongest version of yourself — every single day.
              </p>
            </div>
          </MobileCardSlider>

          <MobileCardSlider className="about-stats-row" label="Studio statistics">
            <div className="feature-card stat-card" key="members-trained">
              <h3>2,500+</h3>
              <p>Members Trained</p>
            </div>
            <div className="feature-card stat-card" key="years-experience">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
            <div className="feature-card stat-card" key="success-stories">
              <h3>500+</h3>
              <p>Success Stories</p>
            </div>
            <div className="feature-card stat-card" key="fitness-programs">
              <h3>13+</h3>
              <p>Fitness Programs</p>
            </div>
          </MobileCardSlider>
        </div>
      </div>
    </section>
  );
};

export default Features;
