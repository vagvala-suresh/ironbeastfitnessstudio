import React, { useState } from 'react';
import './Gallery.css';

const galleryModules = Object.entries(import.meta.glob('../../../assets/gallery/*.{png,jpg,jpeg}', { eager: true, import: 'default' }))
  .map(([path, src]) => {
    const match = path.match(/\/assets\/gallery\/([^/]+)$/i);
    const fileName = match ? match[1] : '';

    if (!fileName) return null;

    return {
      src,
      label: fileName.replace(/\.(png|jpg|jpeg)$/i, '').replace(/-/g, ' ').replace(/_/g, ' ')
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.label.localeCompare(b.label));

const images = galleryModules;

const Gallery = () => {
  const [paused, setPaused] = useState(false);
  const marqueeItems = [...images, ...images];
  const duration = Math.max(12, images.length * 1.5);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <div className="section-title-badge">SEE THE GRIND</div>
          <h2 className="section-title">INSIDE THE <span>STUDIO</span></h2>
          <p className="section-subtitle">Every corner is engineered for progress. Every rep counts.</p>
        </div>

        <div
          className="gallery-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{
                animation: `gallery-marquee ${duration}s linear infinite`,
                animationPlayState: paused ? 'paused' : 'running'
              }}
            >
              {marqueeItems.map((image, index) => (
                <div className="gallery-slide" key={`${image.label}-${index}`}>
                  <div className="gallery-card">
                    <img src={image.src} alt={image.label} />
                    <div className="gallery-caption">{image.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
