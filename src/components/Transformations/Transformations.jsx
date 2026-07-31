import React, { useState, useEffect, useRef } from 'react';
import './Transformations.css';

const items = [
  {
    before: '/assets/ravi_before-C2EVwo4z.png',
    after: '/assets/ravi_after-BCmUOrvI.png',
    name: 'Bhanu Pratap',
    note: '84 KG → 75 KG (1 MONTH)',
    quote: 'Iron Beast changed my life. The trainers corrected my form and the 1-month results are mind-blowing.'
  },
  {
    before: '/assets/vikram_before-Bul8L0nU.png',
    after: '/assets/vikram_after-BaBzw5Pw.png',
    name: 'Venkatesh',
    note: 'POSTURAL CORRECTION (1 MONTH)',
    quote: 'Correcting my posture and getting fit within a month changed my health completely. Highly support staff.'
  },
  {
    before: '/assets/kiran_before-b6PzD4lC.png',
    after: '/assets/kiran_after-DXmVppC9.png',
    name: 'Madhu',
    note: 'ATHLETIC BUILD (1 MONTH)',
    quote: 'Went from a sedentary lifestyle to an active, athletic build. Highly professional trainers who focus on results.'
  },
  {
    before: '/assets/prasad_before-BG0O7a8q.jpg',
    after: '/assets/prasad_after-xXoIiO6G.jpg',
    name: 'Prasad',
    note: 'FAT LOSS & MUSCLE GAIN (1 MONTH)',
    quote: 'Trained directly under Sandy’s guidance. The nutrition blueprint combined with precise workout routine gave me incredible strength and visible fat loss.'
  }
];

const Transformations = () => {
  const [current, setCurrent] = useState(0);
  const slideGroups = [];
  for (let i = 0; i < items.length; i += 2) {
    slideGroups.push(items.slice(i, i + 2));
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
    <section id="transformations" className="transformations-section">
      <div className="container">
        <div className="transform-header">
          <div className="section-title-badge">TRANSFORMATIONS</div>
          <h2 className="section-title">REAL PEOPLE. <span>REAL RESULTS.</span></h2>
          <p className="section-subtitle">Every body is different. What's common is the discipline, the coaching, and the results that follow.</p>
        </div>

        <div className="transform-carousel" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
          <button className="carousel-control prev" onClick={goPrev} aria-label="Previous transformation">‹</button>

          <div className="carousel-track-wrapper">
            <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slideGroups.map((group, index) => (
                <div className="transform-slide" key={index}>
                  <div className="transform-slide-row">
                    {group.map((it, i) => (
                      <div className="transform-card" key={i}>
                        <div className="before-after">
                          <div className="before">
                            <img src={it.before} alt={`${it.name} before`} />
                            <div className="label">BEFORE</div>
                          </div>
                          <div className="after">
                            <img src={it.after} alt={`${it.name} after`} />
                            <div className="label">AFTER</div>
                          </div>
                        </div>
                        <div className="transform-meta">
                          <div className="transform-note">{it.note}</div>
                          <div className="transform-author">{it.name}</div>
                          <p className="transform-quote">"{it.quote}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-control next" onClick={goNext} aria-label="Next transformation">›</button>

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

export default Transformations;
