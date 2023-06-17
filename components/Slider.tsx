"use client";

import React from "react";
import {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

export type SliderImage = {
  url: any; //todo: change image type
  alt: string;
};

type SliderProps = {
  images: Array<SliderImage>;
};

export const Slider: React.FC<SliderProps> = ({ images }) => (
  <Swiper
    modules={[Autoplay]}
    loop={true}
    autoplay={{
      delay: 3000,
    }}
  >
    {images.map((image) => {
      return (
        <SwiperSlide key={image.alt}>
          <div className="flex justify-center">
            <Image
              className="object-contain"
              src={image.url}
              alt={image.alt}
              placeholder="blur"
            />
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
);
