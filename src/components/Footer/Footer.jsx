import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand-logo">
              <div className="logo-text">
                <span className="logo-title">Sandy's</span>
                <span className="logo-subtitle">Iron Beast Fitness Studio</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Sandy's Iron Beast Fitness Studio is Bachupally's premium gym for transformation, strength, and community.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">QUICK LINKS</h4>
            <div className="footer-links">
              <a href="#top">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#plans">Plans</a>
              <a href="#trainers">Trainers</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">PROGRAMS</h4>
            <div className="footer-links">
              <a href="#services">Hypertrophy Training</a>
              <a href="#services">HIIT & Cardio Surge</a>
              <a href="#services">Power Mobility</a>
              <a href="#bmi">BMI Assessment</a>
              <a href="#contact">Private Coaching</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">NEWSLETTER</h4>
            <p className="footer-brand-desc" style={{ marginBottom: '14px' }}>
              Subscribe for fitness tips, workout routines, and exclusive member deals.
            </p>
            <form className="newsletter-box" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Sandy\'s Iron Beast newsletter!'); }}>
              <input type="email" placeholder="Enter your email" className="newsletter-input" required />
              <button type="submit" className="btn-newsletter">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Sandy's Iron Beast Fitness Studio. All Rights Reserved.</div>
          <div>Built with React JS & Modular CSS Architecture.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
