import React, { useEffect, useState, useRef } from 'react';
import './Transformations.css';

const normalizeKey = (key) => key.toLowerCase().replace(/(\d+)$/, '');

const getTransformationMeta = (key) => {
  const normalizedKey = normalizeKey(key);
  const fallbackName = normalizedKey
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    name: fallbackName,
    note: `${fallbackName.toUpperCase()} TRANSFORMATION`,
    quote: ''
  };
};

const transformationModules = Object.entries(import.meta.glob('../../../assets/transformation/*.{png,jpg,jpeg}', { eager: true, import: 'default' }))
  .map(([path, src]) => {
    const match = path.match(/\/assets\/transformation\/([^/]+)$/i);
    return match ? { fileName: match[1], src } : null;
  })
  .filter(Boolean)
  .sort((a, b) => a.fileName.localeCompare(b.fileName));

const items = transformationModules.reduce((pairs, fileName) => {
  const { fileName: name, src } = fileName;
  const lowerName = name.toLowerCase();

  if (lowerName.includes('_before')) {
    const key = name.replace(/_before.*$/i, '');
    const existing = pairs.find((entry) => entry.key === key);
    if (existing) {
      existing.before = src;
    } else {
      pairs.push({ key, before: src, after: '' });
    }
  } else if (lowerName.includes('_after')) {
    const key = name.replace(/_after.*$/i, '');
    const existing = pairs.find((entry) => entry.key === key);
    if (existing) {
      existing.after = src;
    } else {
      pairs.push({ key, before: '', after: src });
    }
  }

  return pairs;
}, []);

const transformedItems = items
  .filter((item) => item.before && item.after)
  .map((item) => {
    const meta = getTransformationMeta(item.key);
    const displayName = meta.name || item.key.replace(/^[a-z]/, (char) => char.toUpperCase());

    return {
      before: item.before,
      after: item.after,
      name: displayName,
      note: meta.note || 'TRANSFORMATION STORY',
      quote: meta.quote || ''
    };
  });

const TransformationCard = ({ item }) => {
  const [split, setSplit] = useState(50);
  const dragStartX = useRef(null);
  const containerRef = useRef(null);

  const handleDragStart = (event) => {
    dragStartX.current = event.clientX ?? null;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handleDragMove = (event) => {
    if (dragStartX.current === null || !containerRef.current) return;

    event.preventDefault();
    const currentX = event.clientX ?? null;
    if (currentX === null) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = ((currentX - rect.left) / rect.width) * 100;
    const clamped = Math.min(95, Math.max(5, relativeX));
    setSplit(clamped);
  };

  const handleDragEnd = (event) => {
    dragStartX.current = null;
    event?.currentTarget?.releasePointerCapture?.(event.pointerId);
  };

  return (
    <div className="transform-card">
      <div className="transformation-stage">
        <div
          ref={containerRef}
          className="image-panel"
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={handleDragEnd}
          onPointerCancel={handleDragEnd}
        >
          <div className="comparison-frame">
            <img className="comparison-image before-image" src={item.before} alt={`${item.name} before`} />
            <div className="comparison-image after-layer" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
              <img className="comparison-image" src={item.after} alt={`${item.name} after`} />
            </div>
            <div className="comparison-divider" style={{ left: `${split}%` }}>
              <span className="comparison-handle" />
            </div>
            <div className="comparison-label before-label">BEFORE</div>
            <div className="comparison-label after-label">AFTER</div>
          </div>
        </div>
      </div>

      <div className="transform-meta">
        <div className="transform-note">{item.note}</div>
        {item.quote ? <p className="transform-quote">"{item.quote}"</p> : null}
      </div>
    </div>
  );
};

const Transformations = () => {
  const slideItems = transformedItems;
  const carouselRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slideItems.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const slides = [...carousel.querySelectorAll('.transform-slide')];
      const firstSlideLeft = slides[0]?.offsetLeft ?? 0;
      const nextSlide = slides.find((slide) => slide.offsetLeft - firstSlideLeft > carousel.scrollLeft + 1);
      carousel.scrollTo({ left: nextSlide ? nextSlide.offsetLeft - firstSlideLeft : 0, behavior: 'smooth' });
    }, 1800);

    return () => window.clearInterval(intervalId);
  }, [paused, slideItems.length]);

  const moveSlide = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = [...carousel.querySelectorAll('.transform-slide')];
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
    <section id="transformations" className="transformations-section">
      <div className="container">
        <div className="transform-header">
          <div className="section-title-badge">TRANSFORMATIONS</div>
          <h2 className="section-title">REAL PEOPLE. <span>REAL RESULTS.</span></h2>
          <p className="section-subtitle">Every body is different. What's common is the discipline, the coaching, and the results that follow.</p>
        </div>

        <div
          className="transform-carousel"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div ref={carouselRef} className="carousel-track-wrapper" role="region" aria-label="Member transformations" tabIndex={0}>
            <div className="carousel-track">
              {slideItems.map((item) => (
                <div className="transform-slide" key={item.name}>
                  <div className="transform-slide-row">
                    <TransformationCard item={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <button type="button" className="carousel-control prev" aria-label="Previous transformation" onClick={() => moveSlide(-1)}>
              ‹
            </button>
            <button type="button" className="carousel-control next" aria-label="Next transformation" onClick={() => moveSlide(1)}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
