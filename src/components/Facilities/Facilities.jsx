import React, { useState, useEffect, useRef } from 'react';
import MobileCardSlider from '../MobileCardSlider/MobileCardSlider.jsx';
import './Facilities.css';

const amenities = [
  { title: 'Strength Equipment', detail: 'Heavy-duty machines, racks, and plates built for power and hypertrophy training.' },
  { title: 'Cardio Machines', detail: 'Modern treadmills, bikes, ellipticals, and rowers for conditioning and endurance.' },
  { title: 'Free Weights', detail: 'Dumbbells, barbells, kettlebells, and plates spanning every ability level.' },
  { title: 'Functional Area', detail: 'Dedicated space for mobility work, HIIT, battle ropes, and agility drills.' },
  { title: 'Washrooms & Changing Rooms', detail: 'Clean, spacious locker facilities for convenience before and after training.' },
  { title: 'Drinking Water', detail: 'Filtered hydration stations available throughout the studio floor.' },
  { title: 'Air Conditioning', detail: 'Climate-controlled training environment for maximum comfort and performance.' },
  { title: 'Parking', detail: 'Convenient on-site parking for quick, stress-free gym access.' },
  { title: 'Music System', detail: 'High-energy sound that keeps motivation high across every training zone.' },
  { title: 'Ventilated Space', detail: 'Open-air flow and spacious lanes to keep every workout fresh.' }
];

const Facilities = () => {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);
  const slideGroups = [];

  for (let i = 0; i < amenities.length; i += 6) {
    slideGroups.push(amenities.slice(i, i + 6));
  }

  const slideCount = slideGroups.length;

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slideCount);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const goPrev = () => setCurrent((c) => (c - 1 + slideCount) % slideCount);
  const goNext = () => setCurrent((c) => (c + 1) % slideCount);

  return (
    <section id="facilities" className="facilities-section">
      <div className="container">
        <div className="facilities-header">
          <div className="section-title-badge">PREMIUM AMENITIES</div>
          <h2 className="section-title">
            EVERYTHING YOU NEED FOR <span>AN ELITE TRAINING EXPERIENCE</span>
          </h2>
          <p className="section-subtitle">
            Everything you need for an elite training experience — nothing you don't.
          </p>
        </div>

        <div className="facilities-carousel" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
          <button className="carousel-control prev" onClick={goPrev} aria-label="Previous amenities">‹</button>

          <div className="carousel-track-wrapper">
            <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slideGroups.map((group, index) => (
                <div className="facilities-slide" key={index}>
                  <div className="facilities-slide-grid">
                    {group.map((item, itemIndex) => (
                      <div className="facility-card" key={itemIndex}>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-control next" onClick={goNext} aria-label="Next amenities">›</button>

          <div className="carousel-dots">
            {slideGroups.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to amenities slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="facilities-mobile-carousel">
          <MobileCardSlider className="facilities-mobile-grid" label="Studio amenities">
            {amenities.map((item) => (
              <div className="facility-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </MobileCardSlider>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
