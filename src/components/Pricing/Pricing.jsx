import React, { useState } from 'react';
import './Pricing.css';

const Pricing = ({ onOpenJoinModal }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="plans" className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <div className="section-title-badge">MEMBERSHIP PLANS</div>
          <h2 className="section-title">
            UNLEASH THE <span>BEAST WITHIN</span>
          </h2>
          <p className="section-subtitle">
            Simple, transparent pricing. No hidden fees. Cancel anytime. All plans include full gym access.
          </p>
        </div>

        <div className="billing-toggle-container">
          <span className={`billing-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
          <button 
            className="filter-btn active"
            onClick={() => setIsAnnual(!isAnnual)}
            style={{ padding: '6px 16px', fontSize: '0.85rem' }}
          >
            {isAnnual ? 'Annual (Save 20%)' : 'Switch to Annual'}
          </button>
          <span className={`billing-label ${isAnnual ? 'active' : ''}`}>
            Annual <span className="save-badge">Save 20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <h3 className="plan-name">MONTHLY</h3>
            <p className="plan-desc">CONTACT US FOR PRICING</p>
            <div className="plan-price-box">
              <span className="price-currency">PRICE ON REQUEST</span>
            </div>
            <div className="plan-features">
              <div className="feature-item">Full gym access</div>
              <div className="feature-item">Cardio zone access</div>
              <div className="feature-item">General training guidance</div>
              <div className="feature-item">Dedicated Client App Access</div>
            </div>
            <button className="btn-select-plan" onClick={() => onOpenJoinModal('Monthly')}>
              JOIN NOW
            </button>
          </div>

          <div className="price-card">
            <h3 className="plan-name">3 MONTHS</h3>
            <p className="plan-desc">CONTACT US FOR PRICING</p>
            <div className="plan-price-box">
              <span className="price-currency">PRICE ON REQUEST</span>
            </div>
            <div className="plan-features">
              <div className="feature-item">Full gym access</div>
              <div className="feature-item">Cardio zone access</div>
              <div className="feature-item">General training guidance</div>
              <div className="feature-item">Dedicated Client App Access</div>
            </div>
            <button className="btn-select-plan" onClick={() => onOpenJoinModal('3 Months')}>
              JOIN NOW
            </button>
          </div>

          <div className="price-card">
            <h3 className="plan-name">6 MONTHS</h3>
            <p className="plan-desc">CONTACT US FOR PRICING</p>
            <div className="plan-price-box">
              <span className="price-currency">PRICE ON REQUEST</span>
            </div>
            <div className="plan-features">
              <div className="feature-item">Full gym access</div>
              <div className="feature-item">Cardio zone access</div>
              <div className="feature-item">General training guidance</div>
              <div className="feature-item">Dedicated Client App Access</div>
            </div>
            <button className="btn-select-plan" onClick={() => onOpenJoinModal('6 Months')}>
              JOIN NOW
            </button>
          </div>

          <div className="price-card popular">
            <div className="popular-badge">MOST POPULAR</div>
            <h3 className="plan-name">12 MONTHS</h3>
            <p className="plan-desc">SAVE ₹2,000 ON ANNUAL COMMITMENT</p>
            <div className="plan-price-box">
              <span className="price-currency">₹</span>
              <span className="price-amount">11,999</span>
              <span className="price-period">/ YEAR</span>
            </div>
            <div className="plan-features">
              <div className="feature-item">Customized Diet Plan</div>
              <div className="feature-item">Full gym access</div>
              <div className="feature-item">Cardio zone access</div>
              <div className="feature-item">Dedicated Client App Access</div>
            </div>
            <button className="btn-select-plan" onClick={() => onOpenJoinModal('12 Months')}>
              JOIN NOW
            </button>
          </div>

          <div className="price-card">
            <h3 className="plan-name">2 YEARS BEAST PLAN</h3>
            <p className="plan-desc">SAVE ₹6,000 ON LONG-TERM COMMITMENT</p>
            <div className="plan-price-box">
              <span className="price-currency">₹</span>
              <span className="price-amount">17,999</span>
              <span className="price-period">/ 2 YEARS</span>
            </div>
            <div className="plan-features">
              <div className="feature-item">FREE Training Shoes</div>
              <div className="feature-item">FREE Duffle / Gym Bag</div>
              <div className="feature-item">All benefits of annual plan</div>
            </div>
            <button className="btn-select-plan" onClick={() => onOpenJoinModal('2 Years Beast Plan')}>
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
