import React, { useEffect, useState } from "react";
import "./GalleryPictures.css";

interface IGalleryComponent {
  inHome: boolean;
  picturesData: any[];
}

export const GalleryComponent = ({
  inHome,
  picturesData,
}: IGalleryComponent) => {
  let picsToShow = picturesData;
  if (inHome) {
    picsToShow = picsToShow.slice(0, 5);
  }

  return (
    <div className="gallery-container">
      {picsToShow.length > 0 ? (
        picsToShow.map((picture, index) => (
          <div
            key={index}
            className="gallery-back"
            style={{
              backgroundImage: `url(${picture.url})`, // Set the background image here
            }}
          >
            <img
              /* key={index} */
              src={picture.url}
              alt={`pic number ${index}`}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        ))
      ) : (
        <p>No pictures available</p>
      )}
    </div>
  );
};
