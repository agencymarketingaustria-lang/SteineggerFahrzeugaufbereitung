"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  style?: React.CSSProperties;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Vorher',
  afterAlt = 'Nachher',
  style,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="before-after-slider" style={style}>
      {/* Image Container */}
      <div className="before-after-slider__container">
        {/* Background / After Image */}
        <Image 
          src={afterSrc} 
          alt={afterAlt} 
          fill 
          className="before-after-slider__img" 
          sizes="(max-width: 768px) 100vw, 50vw" 
          quality={85}
        />
        
        {/* Foreground / Before Image (Clipped) */}
        <div 
          className="before-after-slider__clip"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image 
            src={beforeSrc} 
            alt={beforeAlt} 
            fill 
            className="before-after-slider__img" 
            sizes="(max-width: 768px) 100vw, 50vw" 
            quality={85}
          />
        </div>
        
        {/* Labels */}
        <span className="before-after-slider__label before-after-slider__label--left">Vorher</span>
        <span className="before-after-slider__label before-after-slider__label--right">Nachher</span>

        {/* Custom Drag Handle Line */}
        <div className="before-after-slider__handle-line" style={{ left: `${sliderPosition}%` }}>
          <div className="before-after-slider__handle-btn">
            {/* Left arrow */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            {/* Right arrow */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Native Range Input (Transparent overlay for accessible and smooth dragging) */}
      <input 
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="before-after-slider__range"
        aria-label="Bildvergleich Schieberegler"
      />
    </div>
  );
}
