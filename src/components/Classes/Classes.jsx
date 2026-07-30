import React, { useState } from 'react';
import './Classes.css';

const classesData = [
  {
    id: 1,
    category: 'hiit',
    title: 'Iron HIIT Surge',
    duration: '45 MINS',
    calories: '650 CAL',
    intensity: 'HIGH INTENSITY',
    desc: 'Heart-pounding interval training blending battle ropes, kettlebell swings, and plyometrics to torch calories.',
    trainer: 'Coach Sarah',
    image: '/assets/class_hiit.jpg'
  },
  {
    id: 2,
    category: 'strength',
    title: 'Hypertrophy Powerlifting',
    duration: '60 MINS',
    calories: '500 CAL',
    intensity: 'HEAVY WEIGHT',
    desc: 'Barbell deadlifts, squats, bench press, and structural accessory lifts focused on raw muscular strength.',
    trainer: 'Coach Marcus',
    image: '/assets/hero_gym.jpg'
  },
  {
    id: 3,
    category: 'crossfit',
    title: 'Functional Cross Athletic',
    duration: '50 MINS',
    calories: '700 CAL',
    intensity: 'EXTREME',
    desc: 'Functional body movements, rowing ergometers, sled pushes, and box jumps engineered for total body conditioning.',
    trainer: 'Coach Sarah',
    image: '/assets/class_hiit.jpg'
  },
  {
    id: 4,
    category: 'yoga',
    title: 'Power Mobility & Yoga',
    duration: '60 MINS',
    calories: '300 CAL',
    intensity: 'MODERATE',
    desc: 'Deep dynamic stretching, hip/shoulder decompression, core stability, and targeted athletic recovery.',
    trainer: 'Coach Marcus',
    image: '/assets/trainer_2.jpg'
  }
];

const Classes = ({ onOpenBookModal }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredClasses = activeTab === 'all' 
    ? classesData 
    : classesData.filter(item => item.category === activeTab);

  return (
    <section id="classes" className="classes-section">
      <div className="container">
        <div className="classes-header">
          <div className="section-title-badge">SCHEDULE & CLASSES</div>
          <h2 className="section-title">
            DOMINATE YOUR <span>WORKOUTS</span>
          </h2>
          <p className="section-subtitle">
            Choose from a wide spectrum of high-energy studio classes led by certified master trainers.
          </p>
        </div>

        <div className="filter-bar">
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Classes
          </button>
          <button 
            className={`filter-btn ${activeTab === 'hiit' ? 'active' : ''}`}
            onClick={() => setActiveTab('hiit')}
          >
            HIIT & Cardio
          </button>
          <button 
            className={`filter-btn ${activeTab === 'strength' ? 'active' : ''}`}
            onClick={() => setActiveTab('strength')}
          >
            Heavy Strength
          </button>
          <button 
            className={`filter-btn ${activeTab === 'crossfit' ? 'active' : ''}`}
            onClick={() => setActiveTab('crossfit')}
          >
            Functional
          </button>
          <button 
            className={`filter-btn ${activeTab === 'yoga' ? 'active' : ''}`}
            onClick={() => setActiveTab('yoga')}
          >
            Mobility
          </button>
        </div>

        <div className="classes-grid">
          {filteredClasses.map(cls => (
            <div key={cls.id} className="class-card">
              <div className="class-img-box">
                <img src={cls.image} alt={cls.title} className="class-img" />
                <span className="class-intensity-tag">{cls.intensity}</span>
              </div>
              <div className="class-body">
                <div className="class-meta">
                  <span>⏱️ {cls.duration}</span>
                  <span>🔥 {cls.calories}</span>
                </div>
                <h3 className="class-title">{cls.title}</h3>
                <p className="class-desc">{cls.desc}</p>
                <div className="class-footer">
                  <span className="trainer-name">By {cls.trainer}</span>
                  <button className="btn-book-class" onClick={() => onOpenBookModal(cls.title)}>
                    Reserve Seat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
