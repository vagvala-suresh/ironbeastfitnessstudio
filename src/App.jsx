import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Features from './components/Features/Features.jsx';
import Classes from './components/Classes/Classes.jsx';
import BMICalculator from './components/BMICalculator/BMICalculator.jsx';
import Trainers from './components/Trainers/Trainers.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('JOIN IRON FEAST TODAY');
  const [submitted, setSubmitted] = useState(false);

  const handleOpenJoin = (title = 'JOIN IRON FEAST TODAY') => {
    setModalTitle(typeof title === 'string' ? title : 'JOIN IRON FEAST TODAY');
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
    }, 3000);
  };

  return (
    <div className="app">
      <Header onOpenJoinModal={handleOpenJoin} />
      
      <main>
        <Hero onOpenJoinModal={handleOpenJoin} />
        <Features />
        <Classes onOpenBookModal={handleOpenJoin} />
        <BMICalculator />
        <Trainers onOpenBookModal={handleOpenJoin} />
        <Pricing onOpenJoinModal={handleOpenJoin} />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Interactive Modal */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>
            <h3 className="modal-title">{modalTitle}</h3>

            {submitted ? (
              <div className="form-success-msg">
                ✓ Success! Your request has been confirmed. A member of our team will contact you directly within 24 hours.
              </div>
            ) : (
              <form className="modal-form" onSubmit={handleModalSubmit}>
                <div className="input-group">
                  <label>FULL NAME</label>
                  <input type="text" className="bmi-input" placeholder="Your Name" required />
                </div>
                <div className="input-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" className="bmi-input" placeholder="your@email.com" required />
                </div>
                <div className="input-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" className="bmi-input" placeholder="+1 (555) 000-0000" required />
                </div>
                <button type="submit" className="btn-calc-bmi" style={{ marginTop: '10px' }}>
                  CONFIRM RESERVATION
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
