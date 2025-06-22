import { ImageSlider } from './ImageSlider';

export function HomeCarousel() {
  // Si tus imágenes están en /public/pictures/carousel/
  const pictures = [
    '/pictures/carousel/carousel_1b.webp',
    '/pictures/carousel/corrientes.webp',
    '/pictures/carousel/carousel_1.webp',
    '/pictures/carousel/toma1.webp',
    '/pictures/carousel/carousel_5.webp',
  ];

  return <ImageSlider imageUrls={pictures} />;
}
