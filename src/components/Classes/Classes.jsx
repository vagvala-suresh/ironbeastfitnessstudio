import React from 'react';
import MobileCardSlider from '../MobileCardSlider/MobileCardSlider.jsx';
import './Classes.css';

const services = [
  {
    title: 'Personal Training',
    desc: 'Accelerate your transformation with elite 1-on-1 certified coaching and customized nutrition.',
    action: 'Meet Trainers'
  },
  {
    title: 'World-Class Equipment',
    desc: 'All-new strength and conditioning machines maintained daily to keep your sessions elite.',
    action: 'View Equipment'
  },
  {
    title: 'Strength Training',
    desc: 'Progressive overload programs that build real power, muscle, and athletic endurance.',
    action: 'Book Session'
  },
  {
    title: 'Weight Loss Programs',
    desc: 'Science-backed fat-loss protocols with targeted training and nutrition coaching.',
    action: 'Book Session'
  },
  {
    title: 'Muscle Building',
    desc: 'Hypertrophy-focused splits designed for measurable muscle gains and definition.',
    action: 'Book Session'
  },
  {
    title: 'Cardio Training',
    desc: 'High-energy conditioning routines designed to burn fat and boost stamina.',
    action: 'Book Session'
  },
  {
    title: 'Abs & Core Training',
    desc: 'Targeted stability and abdominal programs for athletic power and posture.',
    action: 'Book Session'
  },
  {
    title: 'Anytime Access',
    desc: 'Workout on your schedule with full-hour access during our operating hours.',
    action: 'Book Session'
  }
];

const Classes = ({ onOpenBookModal }) => {
  return (
    <section id="services" className="classes-section">
      <div className="container">
        <div className="classes-header">
          <div className="section-title-badge">WHAT WE OFFER</div>
          <h2 className="section-title">
            PROGRAMS <span>BUILT TO TRANSFORM</span>
          </h2>
          <p className="section-subtitle">
            From beginners to bodybuilders — every program is designed by certified coaches and delivered with intensity.
          </p>
        </div>

        <MobileCardSlider className="classes-grid" label="Training programs">
          {services.map((service, index) => (
            <div key={service.title} className="class-card">
              <div className="class-body service-body">
                <div className="service-icon">🔥</div>
                <h3 className="class-title">{service.title}</h3>
                <p className="class-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </MobileCardSlider>
      </div>
    </section>
  );
};

export default Classes;
