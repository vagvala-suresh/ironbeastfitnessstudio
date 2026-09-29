import React from 'react';
import './Trainers.css';

const trainerFiles = Object.values(import.meta.glob('../../../assets/trainers/*.{png,jpg,jpeg}', { eager: true, import: 'default' }))
  .map((url) => {
    const match = url.match(/\/assets\/trainers\/([^/]+)$/i);
    return match ? match[1] : '';
  })
  .filter(Boolean)
  .sort();

const trainersData = [
  {
    id: 1,
    name: 'Arjun Reddy',
    role: 'Head Strength Coach',
    specialty: 'Powerlifting specialist',
    bio: 'Built championship physiques and transformed 300+ members.',
    image: `/assets/trainers/${trainerFiles[0] || 'trainer-1-DZBAPzKK.jpg'}`
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: "Women's Fitness Lead",
    specialty: 'Fat-loss & Postnatal Recovery',
    bio: 'Empowering women through strength training and safe program design.',
    image: `/assets/trainers/${trainerFiles[1] || 'trainer-2-COwOnH3d.jpg'}`
  },
  {
    id: 3,
    name: 'Rohan Iyer',
    role: 'Bodybuilding Coach',
    specialty: 'Competition Prep & Hypertrophy',
    bio: 'Competition prep, hypertrophy, and nutrition — the full package.',
    image: `/assets/trainers/${trainerFiles[2] || 'trainer-3-BhxOt8gG.jpg'}`
  }
];

const Trainers = ({ onOpenBookModal }) => {
  return (
    <section id="trainers" className="trainers-section">
      <div className="container">
        <div className="trainers-header">
          <div className="section-title-badge">MEET THE TEAM</div>
          <h2 className="section-title">
            COACHES WHO <span>PUSH YOU</span>
          </h2>
          <p className="section-subtitle">
            Certified. experienced. relentless. Our trainers live and breathe fitness — and they're here to build your best version.
          </p>
        </div>

        <div className="trainers-grid">
          {trainersData.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-img-wrapper">
                <img src={`/ironbeastfitnessstudio${trainer.image}`} alt={trainer.name} className="trainer-img" />
                <span className="trainer-specialty-badge">{trainer.specialty}</span>
              </div>
              <div className="trainer-details">
                <h3 className="trainer-name">{trainer.name}</h3>
                <div className="trainer-role">{trainer.role}</div>
                <p className="trainer-bio">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
