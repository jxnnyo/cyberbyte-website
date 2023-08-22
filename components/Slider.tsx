"use client";

import { useRef } from 'react';
import { register } from 'swiper/element/bundle';

import Image from "next/image";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'swiper-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export type SliderImage = {
  url: any; //todo: change image type
  alt: string;
};

type SliderProps = {
  images: Array<SliderImage>;
};

export const Slider: React.FC<SliderProps> = ({ images }) => {
  const swiperElRef = useRef(null);

  register();
  
  return (
  <swiper-container ref={swiperElRef}>
    {images.map((image) => {
      return (
        <swiper-slide key={image.alt}>
          <div className="flex justify-center">
            <Image
              className="object-contain"
              src={image.url}
              alt={image.alt}
              placeholder="blur"
            />
          </div>
        </swiper-slide>
      );
    })}
  </swiper-container>
)};
