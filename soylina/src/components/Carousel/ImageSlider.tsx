'use client';
import React, { useEffect, useState, useRef } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './ImageSlider.css';

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  function showPrev() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
  }
  function showNext() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(showNext, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageIndex, imageUrls.length]);

  return (
    <div
      style={{
        width: '100%',
        height: '90vh',
        aspectRatio: '10/6',
        position: 'relative',

      borderBottom: '0.5rem solid #232323',
      
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          overflow: 'hidden',
                   marginTop: 0, // <-- fuerza sin margen superior
    paddingTop: 0, 
        }}
      >
        {imageUrls.map((url, idx) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
            loading="lazy"
            alt={`slide-${idx + 1}`}
          />
        ))}
      </div>
      <button onClick={showPrev} className="img-slider-btn" style={{ left: 0 }}>
        <ArrowLeftIcon />
      </button>

      <button
        onClick={showNext}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
