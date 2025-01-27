import React, { useEffect, useState } from "react";
import "./GalleryContainerLoader.css";

interface IGalleryComponent {
  inHome: boolean;
}

export const GalleryContainerLoader = ({ inHome }: IGalleryComponent) => {
  let picsToShow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (inHome) {
    picsToShow = picsToShow.slice(0, 5);
  }

  return (
    <div className="gallery-container">
      {picsToShow.map((picture, index) => (
        <div key={`SkeletonPic(${index})`} className="skeleton-loader"></div>
      ))}
    </div>
  );
};
