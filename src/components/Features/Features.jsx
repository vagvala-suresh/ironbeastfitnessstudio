import React from 'react';
import './Features.css';

const featuresData = [
  {
    icon: '⚡',
    title: 'Modern Equipment',
    desc: 'Top-of-the-line Eleiko bars, Rogue power racks, custom cable stations, and biometrically engineered cardio technology.'
  },
  {
    icon: '🔥',
    title: 'Custom Programming',
    desc: 'Scientifically crafted workout and hypertrophy plans tailored specifically to your body type, goals, and experience level.'
  },
  {
    icon: '🏆',
    title: 'Elite Coaches',
    desc: 'Certified master trainers dedicated to perfecting your form, keeping you motivated, and breaking your personal records.'
  },
  {
    icon: '🥗',
    title: 'Macro Nutrition',
    desc: 'Comprehensive meal plans, body scan analysis, and tailored nutritional coaching to accelerate fat loss and muscle gain.'
  },
  {
    icon: '🔒',
    title: '24/7 Keycard Access',
    desc: 'Train on your schedule. Keycard biometric entry lets active VIP members access the studio around the clock.'
  },
  {
    icon: '💧',
    title: 'Recovery Lounge',
    desc: 'Infrared saunas, cold plunge tubs, and sports massage therapy rooms to maximize muscle repair and recovery.'
  }
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <div className="section-title-badge">WHY IRON FEAST</div>
          <h2 className="section-title">
            BUILT FOR THOSE WHO <span>DEMAND MORE</span>
          </h2>
          <p className="section-subtitle">
            Every square foot of Iron Feast Fitness Studio is designed to deliver maximum results in minimum time.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((item, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-box">{item.icon}</div>
              <h3 className="feature-card-title">{item.title}</h3>
              <p className="feature-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
