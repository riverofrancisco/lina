import car1 from "../../../../public/media/pictures/carousel/holaguido.jpg";
import car2 from "../../../../public/media/pictures/carousel/corrientes.jpg";
import car3 from "../../../../public/media/pictures/carousel/lacabeza.jpg";
import { ImageSlider } from "./ImageSlider";
import React from "react";

export function HomeCarousel() {
  const pictures = [car1.src, car2.src, car3.src];

  return <ImageSlider imageUrls={pictures} />;
}
