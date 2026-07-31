import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

const images = [
  { src: '/assets/gallery-1-C-Nca7-z.png', label: 'Elite Coach Team' },
  { src: '/assets/gallery-2-CNRLKvCB.png', label: 'Strength Transformation' },
  { src: '/assets/gallery-3-VLd5ayKn.png', label: 'Shredding Program' },
  { src: '/assets/gallery-4-DuTY1vCx.png', label: 'Beast Neon Hub' },
  { src: '/assets/gym-exterior-night-CIySPjbR.png', label: 'Iron Beast Exterior' },
  { src: '/assets/hero-BSeVQnra.png', label: 'Premium Gym Floor' }
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const slideGroups = [];
  for (let i = 0; i < images.length; i += 2) {
    slideGroups.push(images.slice(i, i + 2));
  }
  const slideCount = slideGroups.length;
  const autoplayRef = useRef(null);

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
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <div className="section-title-badge">SEE THE GRIND</div>
          <h2 className="section-title">INSIDE THE <span>STUDIO</span></h2>
          <p className="section-subtitle">Every corner is engineered for progress. Every rep counts.</p>
        </div>

        <div className="gallery-carousel" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
          <button className="carousel-control prev" onClick={goPrev} aria-label="Previous image">‹</button>

          <div className="carousel-track-wrapper">
            <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slideGroups.map((group, index) => (
                <div className="gallery-slide" key={index}>
                  <div className="gallery-slide-row">
                    {group.map((image, i) => (
                      <div key={i} className="gallery-card">
                        <img src={image.src} alt={image.label} />
                        <div className="gallery-caption">{image.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-control next" onClick={goNext} aria-label="Next image">›</button>

          <div className="carousel-dots">
            {slideGroups.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
