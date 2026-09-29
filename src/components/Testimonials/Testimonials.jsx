import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Boppana Hansini',
    meta: '2 reviews · 6 days ago',
    stars: '★★★★★',
    quote: "Best gym with excellent equipment and trainer (Sandy) has great knowledge about fitness and body building. He trains as per the body and being a female I feel safe and comfortable. Thanks to Sandy's Iron Beast."
  },
  {
    id: 2,
    name: 'Priyanka Shukla',
    meta: '2 reviews · 4 weeks ago',
    stars: '★★★★★',
    quote: "Excellent gym & well-maintained environment by SANDY ANNA!!! with top-notch equipment and professional training support. The trainer is very helpful."
  },
  {
    id: 3,
    name: 'Vishwanath Muta',
    meta: 'Local Guide · 7 reviews',
    stars: '★★★★★',
    quote: "Spacious for strength training. Trainers are worth the money and time. Modern equipment, clean facilities, flexible timings. Completely safe and comfortable for Ladies."
  },
  {
    id: 4,
    name: 'Tejaswi Gedela',
    meta: 'Local Guide · 72 reviews · 3 months ago',
    stars: '★★★★★',
    quote: "Extremely nice and peaceful gym. Great ambience, music, comfortable people, friendly supportive and talented trainers. They always keep a close eye on you and correct your form."
  },
  {
    id: 5,
    name: 'Rumi Mukherjee',
    meta: '13 reviews · 5 months ago',
    stars: '★★★★★',
    quote: "I'm blown away by the top-notch facilities and expert guidance at Sandy's Iron Beast. The trainers (Sandy & Naresh) are super supportive, pushing me to reach my fitness goals while keeping it fun."
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = reviews.length;
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
    <section id="reviews" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-title-badge">RATED 5.0★ ON GOOGLE</div>
          <h2 className="section-title">What Our <span>Members Say</span></h2>
          <p className="section-subtitle">Real feedback from members who trained here and stayed.</p>
        </div>

        <div
          className="reviews-carousel"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <button className="carousel-control prev" onClick={goPrev} aria-label="Previous review">‹</button>

          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((r) => (
                <div className="review-slide" key={r.id}>
                  <div className="review-card">
                    <div className="review-stars">{r.stars}</div>
                    <p className="review-quote">{r.quote}</p>
                    <div className="review-author">
                      <div className="author-name">{r.name}</div>
                      <div className="author-meta">{r.meta}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-control next" onClick={goNext} aria-label="Next review">›</button>

          <div className="carousel-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
