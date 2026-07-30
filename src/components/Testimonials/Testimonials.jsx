import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'David K.',
    meta: 'Lost 28 lbs in 4 Months',
    initials: 'DK',
    stars: '★★★★★',
    quote: '"Iron Feast transformed my entire mindset toward training. The coaches actually care about your form and progress rather than just counting reps."'
  },
  {
    id: 2,
    name: 'Elena R.',
    meta: 'Iron Monthly Member',
    initials: 'ER',
    stars: '★★★★★',
    quote: '"The equipment quality here is unmatched anywhere in the city. The community energy during morning HIIT classes keeps me motivated every single day."'
  },
  {
    id: 3,
    name: 'James T.',
    meta: 'Feast VIP Client',
    initials: 'JT',
    stars: '★★★★★',
    quote: '"Having 24/7 keycard access and personal coaching sessions pushed my squat and deadlift PRs to levels I never thought possible."'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-title-badge">SUCCESS STORIES</div>
          <h2 className="section-title">
            REAL MEMBERS. <span>REAL RESULTS.</span>
          </h2>
          <p className="section-subtitle">
            Hear from dedicated athletes who achieved their personal breakthroughs at Iron Feast.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map(item => (
            <div key={item.id} className="testimonial-card">
              <div>
                <div className="stars">{item.stars}</div>
                <p className="quote-text">{item.quote}</p>
              </div>
              <div className="author-info">
                <div className="author-avatar">{item.initials}</div>
                <div className="author-details">
                  <span className="author-name">{item.name}</span>
                  <span className="author-meta">{item.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
