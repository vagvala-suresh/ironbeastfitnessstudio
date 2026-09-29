import React, { useState, useRef } from 'react';
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

const transformationModules = Object.values(import.meta.glob('/assets/transformation/*.{png,jpg,jpeg}', { eager: true, import: 'default' }))
  .map((url) => {
    const match = url.match(/\/assets\/transformation\/([^/]+)$/i);
    return match ? match[1] : '';
  })
  .filter(Boolean)
  .sort();

const items = transformationModules.reduce((pairs, fileName) => {
  const lowerName = fileName.toLowerCase();

  if (lowerName.includes('_before')) {
    const key = fileName.replace(/_before.*$/i, '');
    const existing = pairs.find((entry) => entry.key === key);
    if (existing) {
      existing.before = `/assets/transformation/${fileName}`;
    } else {
      pairs.push({ key, before: `/assets/transformation/${fileName}`, after: '' });
    }
  } else if (lowerName.includes('_after')) {
    const key = fileName.replace(/_after.*$/i, '');
    const existing = pairs.find((entry) => entry.key === key);
    if (existing) {
      existing.after = `/assets/transformation/${fileName}`;
    } else {
      pairs.push({ key, before: '', after: `/assets/transformation/${fileName}` });
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
            <img className="comparison-image before-image" src={`/ironbeastfitnessstudio${item.before}`} alt={`${item.name} before`} />
            <div className="comparison-image after-layer" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
              <img className="comparison-image" src={`/ironbeastfitnessstudio${item.after}`} alt={`${item.name} after`} />
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
  const [paused, setPaused] = useState(false);
  const slideItems = transformedItems;
  const marqueeItems = [...slideItems, ...slideItems];
  const duration = Math.max(14, slideItems.length * 1.8);

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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{
                animation: `transform-marquee ${duration}s linear infinite`,
                animationPlayState: paused ? 'paused' : 'running'
              }}
            >
              {marqueeItems.map((item, index) => (
                <div className="transform-slide" key={`${item.name}-${index}`}>
                  <div className="transform-slide-row">
                    <TransformationCard item={item} />
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

export default Transformations;
