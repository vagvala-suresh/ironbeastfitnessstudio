import React, { useState } from 'react';
import './Pricing.css';

const Pricing = ({ onOpenJoinModal }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <div className="section-title-badge">MEMBERSHIP PLANS</div>
          <h2 className="section-title">
            INVEST IN YOUR <span>PHYSICAL LEGACY</span>
          </h2>
          <p className="section-subtitle">
            Transparent pricing with zero hidden fees. Choose a plan that matches your commitment level.
          </p>
        </div>

        <div className="billing-toggle-container">
          <span className={`billing-label ${!isAnnual ? 'active' : ''}`}>Monthly Billing</span>
          <button 
            className="filter-btn active"
            onClick={() => setIsAnnual(!isAnnual)}
            style={{ padding: '6px 16px', fontSize: '0.85rem' }}
          >
            {isAnnual ? 'Annual (Save 20%)' : 'Switch to Annual'}
          </button>
          <span className={`billing-label ${isAnnual ? 'active' : ''}`}>
            Annual Billing <span className="save-badge">20% OFF</span>
          </span>
        </div>

        <div className="pricing-grid">
          {/* Day Pass */}
          <div className="price-card">
            <h3 className="plan-name">Day Pass</h3>
            <p className="plan-desc">Perfect for visitors, travelers, or single workout sessions.</p>
            <div className="plan-price-box">
              <span className="price-currency">$</span>
              <span className="price-amount">25</span>
              <span className="price-period">/ day</span>
            </div>
            <div className="plan-features">
              <div className="feature-item check"><span className="check-icon">✓</span> Full Gym & Weightroom Access</div>
              <div className="feature-item check"><span className="check-icon">✓</span> Locker Room & Shower Access</div>
              <div className="feature-item check"><span className="check-icon">✓</span> Free High-Speed Wi-Fi</div>
              <div className="feature-item"><span className="check-icon">✕</span> Group Class Included</div>
              <div className="feature-item"><span className="check-icon">✕</span> 24/7 Keycard Access</div>
            </div>
            <button className="btn-select-plan" onClick={() => onOpenJoinModal('Day Pass')}>
              GET DAY PASS
            </button>
          </div>

          {/* Iron Monthly */}
          <div className="price-card popular">
            <div className="popular-badge">MOST POPULAR</div>
            <h3 className="plan-name">Iron Monthly</h3>
            <p className="plan-desc">For committed athletes seeking regular studio access and classes.</p>
            <div className="plan-price-box">
              <span className="price-currency">$</span>
              <span className="price-amount">{isAnnual ? '69' : '85'}</span>
              <span className="price-period">/ mo</span>
            </div>
            <div className="plan-features">
              <div className="feature-item check"><span className="check-icon">✓</span> Unlimited Gym Access</div>
              <div className="feature-item check"><span className="check-icon">✓</span> All Group Fitness Classes</div>
              <div className="feature-item check"><span className="check-icon">✓</span> 24/7 Biometric Keycard</div>
              <div className="feature-item check"><span className="check-icon">✓</span> Free Monthly Body Scan (InBody)</div>
              <div className="feature-item check"><span className="check-icon">✓</span> Locker & Towel Service</div>
            </div>
            <button className="btn-select-plan" onClick={() => onOpenJoinModal('Iron Monthly')}>
              JOIN IRON MONTHLY
            </button>
          </div>

          {/* Feast VIP */}
          <div className="price-card">
            <h3 className="plan-name">Feast VIP Elite</h3>
            <p className="plan-desc">The ultimate package including private personal training & nutrition.</p>
            <div className="plan-price-box">
              <span className="price-currency">$</span>
              <span className="price-amount">{isAnnual ? '149' : '179'}</span>
              <span className="price-period">/ mo</span>
            </div>
            <div className="plan-features">
              <div className="feature-item check"><span className="check-icon">✓</span> Everything in Iron Monthly</div>
              <div className="feature-item check"><span className="check-icon">✓</span> 4x 1-on-1 Personal Training / Mo</div>
              <div className="feature-item check"><span className="check-icon">✓</span> Custom Macro Nutrition Plan</div>
              <div className="feature-item check"><span className="check-icon">✓</span> Infrared Sauna & Cold Plunge</div>
              <div className="feature-item check"><span className="check-icon">✓</span> Guest Pass (2 per Month)</div>
            </div>
            <button className="btn-select-plan" onClick={() => onOpenJoinModal('Feast VIP Elite')}>
              GET VIP ACCESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
