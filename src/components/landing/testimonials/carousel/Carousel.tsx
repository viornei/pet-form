"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
};
const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };
  return (
    <div className="relative mx-auto w-full max-w-190 py-25">
      <div className="relative h-40 w-full overflow-hidden md:h-50">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transform transition-transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={780}
              height={220}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="bg-primary-pink-100 text-gray-500 absolute top-1/2 -left-4 -translate-y-1/2 rounded-2xl p-2 md:-left-35"
        onClick={prevSlide}
      >
        ←
      </button>
      <button
        className="bg-primary-pink-100 text-gray-500 absolute top-1/2 -right-4 -translate-y-1/2 transform rounded-2xl p-2 md:-right-35"
        onClick={nextSlide}
      >
        →
      </button>
    </div>
  );
};

export default Carousel;
