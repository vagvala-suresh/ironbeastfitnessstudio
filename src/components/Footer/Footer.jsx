import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#hero" className="brand-logo">
              <div className="logo-badge">IF</div>
              <div className="logo-text">
                <span className="logo-title">IRON FEAST</span>
                <span className="logo-subtitle">FITNESS STUDIO</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Iron Feast Fitness Studio is a premier athletic conditioning and personal training facility dedicated to building elite physical mental resilience.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">QUICK LINKS</h4>
            <div className="footer-links">
              <a href="#hero">Home</a>
              <a href="#features">About Studio</a>
              <a href="#classes">Class Schedule</a>
              <a href="#trainers">Master Coaches</a>
              <a href="#pricing">Membership Plans</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">PROGRAMS</h4>
            <div className="footer-links">
              <a href="#classes">Hypertrophy Training</a>
              <a href="#classes">HIIT & Cardio Surge</a>
              <a href="#classes">Power Mobility</a>
              <a href="#bmi">BMI Assessment</a>
              <a href="#contact">Private Coaching</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">NEWSLETTER</h4>
            <p className="footer-brand-desc" style={{ marginBottom: '14px' }}>
              Subscribe for fitness tips, workout routines, and exclusive member deals.
            </p>
            <form className="newsletter-box" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Iron Feast Newsletter!'); }}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="btn-newsletter">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Iron Feast Fitness Studio. All Rights Reserved.</div>
          <div>Built with React JS & Modular CSS Architecture.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
