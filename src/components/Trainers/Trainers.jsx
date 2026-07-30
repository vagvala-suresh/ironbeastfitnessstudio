import React from 'react';
import './Trainers.css';

const trainersData = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'HEAD STRENGTH & HYPERTROPHY COACH',
    specialty: 'Powerlifting & Bodybuilding',
    bio: '10+ years experience training competitive athletes, powerlifters, and body transformation clients.',
    image: '/assets/trainer_1.jpg'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'HIIT & FUNCTIONAL ATHLETICS',
    specialty: 'Fat Loss & Athletic Conditioning',
    bio: 'Former collegiate sprinter certified in functional movement systems and metabolic conditioning.',
    image: '/assets/trainer_2.jpg'
  },
  {
    id: 3,
    name: 'Alex Rivera',
    role: 'NUTRITION & BODY RECOMP SPEC',
    specialty: 'Macro Coaching & Posture',
    bio: 'Specializes in tailored macro nutrition plans paired with progressive overload strength routines.',
    image: '/assets/trainer_1.jpg'
  }
];

const Trainers = ({ onOpenBookModal }) => {
  return (
    <section id="trainers" className="trainers-section">
      <div className="container">
        <div className="trainers-header">
          <div className="section-title-badge">MASTER COACHES</div>
          <h2 className="section-title">
            GUIDED BY THE <span>BEST IN THE INDUSTRY</span>
          </h2>
          <p className="section-subtitle">
            Our certified master coaches are committed to guiding, encouraging, and pushing you beyond your boundaries.
          </p>
        </div>

        <div className="trainers-grid">
          {trainersData.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-img-wrapper">
                <img src={trainer.image} alt={trainer.name} className="trainer-img" />
                <span className="trainer-specialty-badge">{trainer.specialty}</span>
              </div>
              <div className="trainer-details">
                <h3 className="trainer-name">{trainer.name}</h3>
                <div className="trainer-role">{trainer.role}</div>
                <p className="trainer-bio">{trainer.bio}</p>
                <button 
                  className="btn-trainer-consult"
                  onClick={() => onOpenBookModal(`Private Consultation with ${trainer.name}`)}
                >
                  BOOK 1-ON-1 SESSION
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
