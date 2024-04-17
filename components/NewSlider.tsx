import { Carousel } from "flowbite-react";
import Image from "next/image";


export type SliderImage = {
  url: any; //todo: change image type
  alt: string;
};

type SliderProps = {
  images: Array<SliderImage>;
};

const Slider: React.FC<SliderProps> = ({ images }) => {

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000}>
        {images.map((image) => (
            <Image
              // className="object-contain"
              key={image.alt}
              src={image.url}
              alt={image.alt}
              placeholder="blur"
            />
          ))}
      </Carousel>
    </div>
  );
};

export default Slider;
