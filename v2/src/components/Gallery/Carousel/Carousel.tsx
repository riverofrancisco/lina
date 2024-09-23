import car1 from "../../../../public/media/pictures/carousel/guitarra.webp";
import car2 from "../../../../public/media/pictures/carousel/holaguido.webp";
import car3 from "../../../../public/media/pictures/carousel/corrientes.webp";
import car5 from "../../../../public/media/pictures/carousel/lacabeza.webp";
import car4 from "../../../../public/media/pictures/carousel/toma1.webp";

import { ImageSlider } from "./ImageSlider";

export function HomeCarousel() {
  const pictures = [car1.src, car2.src, car3.src, car4.src, car5.src];

  return <ImageSlider imageUrls={pictures} />;
}
