'use client';
import React, { useEffect, useState } from 'react';
import InteractiveGallery from './InteractiveGallery';
import { Box } from '@mui/material';
import './GalleryContainer.css';

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

  const [openPicture, setOpenPicture] = useState<boolean>(false);
  const [selectedItem, setSelected] = React.useState(0);
  const handleOpenPicture = (index: number) => {
    setSelected(index);
    setOpenPicture(true);
  };

  return (
    <Box>
      <div className="gallery-container">
        {picsToShow.map((picture, index) => (
          <div
            key={index}
            className="gallery-back"
            style={{
              backgroundImage: `url(${picture.src})`,
            }}
          >
            <img
              src={picture.src}
              alt={`pic number ${index}`}
              className={`gallery-image`}
              loading="lazy"
              onClick={() => handleOpenPicture(index)}
            />
          </div>
        ))}
      </div>
      <InteractiveGallery
        selectedItem={selectedItem}
        openPicture={openPicture}
        setOpen={setOpenPicture}
        pictures={picsToShow}
      />
    </Box>
  );
};
