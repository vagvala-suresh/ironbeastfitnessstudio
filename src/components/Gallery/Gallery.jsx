import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const galleryModules = Object.entries(import.meta.glob('../../../assets/gallery/*.{png,jpg,jpeg}', { eager: true, import: 'default' }))
  .map(([path, src]) => {
    const match = path.match(/\/assets\/gallery\/([^/]+)$/i);
    return match ? { fileName: match[1], src } : null;
  })
  .filter(Boolean)
  .sort((a, b) => a.fileName.localeCompare(b.fileName));

const images = galleryModules.map(({ fileName, src }) => ({
  src,
  label: fileName.replace(/\.(png|jpg|jpeg)$/i, '').replace(/-/g, ' ').replace(/_/g, ' ')
}));

const Gallery = () => {
  const carouselRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const slides = [...carousel.querySelectorAll('.gallery-slide')];
      const firstSlideLeft = slides[0]?.offsetLeft ?? 0;
      const nextSlide = slides.find((slide) => slide.offsetLeft - firstSlideLeft > carousel.scrollLeft + 1);
      carousel.scrollTo({ left: nextSlide ? nextSlide.offsetLeft - firstSlideLeft : 0, behavior: 'smooth' });
    }, 1800);

    return () => window.clearInterval(intervalId);
  }, [paused]);

  const moveSlide = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = [...carousel.querySelectorAll('.gallery-slide')];
    if (!slides.length) return;
    const firstSlideLeft = slides[0].offsetLeft;
    const currentIndex = slides.reduce((nearest, slide, index) => (
      Math.abs(slide.offsetLeft - firstSlideLeft - carousel.scrollLeft) < Math.abs(slides[nearest].offsetLeft - firstSlideLeft - carousel.scrollLeft)
        ? index
        : nearest
    ), 0);
    const nextIndex = (currentIndex + direction + slides.length) % slides.length;
    carousel.scrollTo({ left: slides[nextIndex].offsetLeft - firstSlideLeft, behavior: 'smooth' });
  };

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
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div ref={carouselRef} className="carousel-track-wrapper" role="region" aria-label="Studio gallery" tabIndex={0}>
            <div className="carousel-track">
              {images.map((image) => (
                <div className="gallery-slide" key={image.src}>
                  <div className="gallery-card">
                    <img src={image.src} alt={image.label} />
                    <div className="gallery-caption">{image.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <button type="button" className="carousel-control prev" aria-label="Previous gallery image" onClick={() => moveSlide(-1)}>
              ‹
            </button>
            <button type="button" className="carousel-control next" aria-label="Next gallery image" onClick={() => moveSlide(1)}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
