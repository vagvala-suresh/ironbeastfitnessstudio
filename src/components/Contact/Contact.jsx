import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info-box">
            <div className="section-title-badge">VISIT & CONTACT</div>
            <h2 className="section-title">READY TO START YOUR <span>EVOLUTION?</span></h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
              Stop by Iron Feast Fitness Studio for a free walkthrough, or get in touch with our team to schedule your trial.
            </p>

            <div className="contact-cards-grid">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h4 className="info-title">STUDIO LOCATION</h4>
                <p className="info-detail">104 Iron Works Blvd, Suite 200<br/>Fitness District, NY 10001</p>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <h4 className="info-title">PHONE & WHATSAPP</h4>
                <p className="info-detail">+1 (555) 890-FEAST<br/>+1 (555) 789-IRON</p>
              </div>

              <div className="info-card">
                <div className="info-icon">⏰</div>
                <h4 className="info-title">WORKING HOURS</h4>
                <p className="info-detail">Mon - Fri: 5:00 AM - 11:00 PM<br/>VIP Keycard: 24 Hours / 7 Days</p>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <h4 className="info-title">EMAIL INQUIRIES</h4>
                <p className="info-detail">join@ironfeaststudio.com<br/>coaching@ironfeaststudio.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">BOOK YOUR FREE SESSION</h3>
            
            {submitted && (
              <div className="form-success-msg">
                ✓ Thank you! Your free trial pass reservation has been received. Our team will contact you shortly.
              </div>
            )}

            <div className="input-group">
              <label>YOUR FULL NAME</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required 
              />
            </div>

            <div className="input-group">
              <label>EMAIL ADDRESS</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required 
              />
            </div>

            <div className="input-group">
              <label>PHONE NUMBER</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="input-group">
              <label>YOUR FITNESS GOALS / MESSAGE</label>
              <textarea 
                className="form-textarea" 
                placeholder="Tell us what you want to achieve..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit-form">
              CLAIM MY FREE TRIAL NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
