import React, { Children, useEffect, useRef, useState } from 'react';
import './MobileCardSlider.css';

const MobileCardSlider = ({ children, className = '', label }) => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const slides = Children.toArray(children);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateMobile = () => setIsMobile(mediaQuery.matches);

    updateMobile();
    mediaQuery.addEventListener('change', updateMobile);
    return () => mediaQuery.removeEventListener('change', updateMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || paused || slides.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const intervalId = window.setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const slideElements = [...slider.querySelectorAll('.mobile-card-slider-slide')];
      if (slideElements.length < 2) return;

      const firstSlideLeft = slideElements[0].offsetLeft;
      const nextSlide = slideElements.find(
        (slide) => slide.offsetLeft - firstSlideLeft > slider.scrollLeft + 1
      );
      slider.scrollTo({
        left: nextSlide ? nextSlide.offsetLeft - firstSlideLeft : 0,
        behavior: 'smooth'
      });
    }, 1800);

    return () => window.clearInterval(intervalId);
  }, [isMobile, paused, slides.length]);

  const moveSlide = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideElements = [...slider.querySelectorAll('.mobile-card-slider-slide')];
    if (!slideElements.length) return;

    const firstSlideLeft = slideElements[0].offsetLeft;
    const currentIndex = slideElements.reduce((nearest, slide, index) => (
      Math.abs(slide.offsetLeft - firstSlideLeft - slider.scrollLeft) <
      Math.abs(slideElements[nearest].offsetLeft - firstSlideLeft - slider.scrollLeft)
        ? index
        : nearest
    ), 0);
    const nextIndex = (currentIndex + direction + slideElements.length) % slideElements.length;
    slider.scrollTo({
      left: slideElements[nextIndex].offsetLeft - firstSlideLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`mobile-card-slider ${className}`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={sliderRef}
        className="mobile-card-slider-track"
        role="region"
        aria-label={label}
        tabIndex={0}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        {slides.map((slide, index) => (
          <div className="mobile-card-slider-slide" key={slide.key ?? index}>
            {slide}
          </div>
        ))}
      </div>
      <div className="mobile-card-slider-controls">
        <button
          type="button"
          className="carousel-control prev"
          aria-label={`Previous ${label} item`}
          onClick={() => moveSlide(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-control next"
          aria-label={`Next ${label} item`}
          onClick={() => moveSlide(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default MobileCardSlider;
