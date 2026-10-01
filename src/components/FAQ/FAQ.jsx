import React from 'react';
import MobileCardSlider from '../MobileCardSlider/MobileCardSlider.jsx';
import './FAQ.css';

const faqData = [
  {
    question: 'CAN BEGINNERS JOIN?',
    answer: 'Absolutely. Our beginner programs are designed to safely introduce you to strength and cardio training with full coach support.'
  },
  {
    question: 'DO YOU HAVE PERSONAL TRAINERS?',
    answer: 'Yes. Our coaches offer 1-on-1 sessions, custom workout plans, and nutrition guidance for every goal.'
  },
  {
    question: 'DO YOU PROVIDE DIET PLANS?',
    answer: 'Yes. We build personalized nutrition strategies to support your body composition and performance goals.'
  },
  {
    question: 'HOW CAN I ENQUIRE OR JOIN?',
    answer: 'Use the form, call or WhatsApp us, or click Book a Free Trial from any section to reserve your first visit.'
  },
  {
    question: 'DO WOMEN HAVE SEPARATE TRAINERS?',
    answer: 'We offer a welcoming environment and can pair you with a female coach when requested.'
  },
  {
    question: 'WHAT ARE YOUR TIMINGS?',
    answer: 'Mon - Sat: 5:30 AM - 11:00 AM and 5:30 PM - 9:30 PM. Sunday: 6:00 AM - 10:00 AM (evening closed).'
  },
  {
    question: 'HOW DO I ENROLL?',
    answer: 'Simply reach out via WhatsApp or call, or submit your details in the contact form to get started immediately.'
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <div className="section-title-badge">FAQ</div>
          <h2 className="section-title">
            FREQUENTLY <span>ASKED</span>
          </h2>
          <p className="section-subtitle">
            Answers to the most common questions about joining Sandy's Iron Beast Fitness Studio.
          </p>
        </div>

        <MobileCardSlider className="faq-grid" label="Frequently asked questions">
          {faqData.map((item, index) => (
            <div key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </MobileCardSlider>
      </div>
    </section>
  );
};

export default FAQ;
