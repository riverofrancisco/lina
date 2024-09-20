import type { ImageMetadata } from "astro";
import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  function showPrev() {
    setImageIndex((index) => {
      if (index === 0) {
        return imageUrls.length - 1;
      } else return index - 1;
    });
  }
  function showNext() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      showNext();
    }, 2000);
    return () => clearInterval(timer);
  }, [imageIndex]);

  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        aspectRatio: "10/6",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }} loading="lazy"
          />
        ))}
      </div>
      <button onClick={showPrev} className="img-slider-btn" style={{ left: 0 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-player-skip-back"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20 5v14l-12 -7z" />
          <path d="M4 5l0 14" />
        </svg>
      </button>

      <button
        onClick={showNext}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-player-skip-forward"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5v14l12 -7z" />
          <path d="M20 5l0 14" />
        </svg>
      </button>
    </div>
  );
}
