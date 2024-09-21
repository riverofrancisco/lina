import React, { useEffect, useState } from "react";
import { getGalleryPictures } from "../../services/queries";
import "./GalleryPictures.css";

interface IGalleryComponent {
  inHome: boolean;
  picturesData: any[];
}

export const GalleryComponent = ({
  inHome,
  picturesData,
}: IGalleryComponent) => {
  
  let picsToShow = picturesData
  if(inHome){
    picsToShow = picsToShow.slice(0,4)
  }

  return (
    <div className="gallery-container">
      {picsToShow.length > 0 ? (
        picsToShow.map((picture, index) => (
          <img
            key={index}
            src={picture.url}
            alt={`pic number ${index}`}
            className="gallery-image"
            loading="lazy"
          />
        ))
      ) : (
        <p>No pictures available</p>
      )}
    </div>
  );
};
