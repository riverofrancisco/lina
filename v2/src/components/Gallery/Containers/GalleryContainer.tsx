import React, { useEffect, useState } from "react";
import "./GalleryContainer.css";

interface IGalleryComponent {
  inHome: boolean;
  picturesData: any[];
}

export const GalleryContainer = ({
  inHome,
  picturesData,
}: IGalleryComponent) => {
  let picsToShow = picturesData;

  if (inHome) {
    picsToShow = picsToShow.slice(0, 5);
  }

  return (
    <div className="gallery-container">
      {picsToShow.map((picture, index) => (
        <div
          key={index}
          className="gallery-back"
          style={{
            backgroundImage: `url(${picture.url})`,
          }}
        >
          <img
            src={picture.url}
            alt={`pic number ${index}`}
            className={`gallery-image`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};
