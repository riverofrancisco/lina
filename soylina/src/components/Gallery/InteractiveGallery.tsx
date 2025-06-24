'use client';
import * as React from 'react';
import { Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './InteractiveGallery.css';

interface Props {
  selectedItem: any;
  openPicture: boolean;
  setOpen: any;
  pictures: any;
}

export default function InteractiveGallery({
  selectedItem,
  openPicture,
  setOpen,
  pictures,
}: Props) {
  let formatedPictures = pictures.map((picture: any) => ({
    original: picture.src,
    thumbnail: picture.src,
    description: picture.description || '',
  }));

  return (
    <Box
      sx={{
        display: openPicture ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 110,
      }}
    >
   
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 120,
        }}
      >
        <Button onClick={() => setOpen(false)} sx={{ minWidth: 0, p: 1 }}>
          <CloseIcon sx={{ color: '#fff', fontSize: 32 }} />
        </Button>
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageGallery
          items={formatedPictures}
          autoPlay={true}
          thumbnailPosition="bottom"
          startIndex={selectedItem}
          additionalClass='image-gallery-slide'
          lazyLoad
        />
      </Box>
    </Box>
  );
}
