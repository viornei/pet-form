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
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="relative w-full max-w-190 mx-auto py-25 ">
      <div className="overflow-hidden relative h-55">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={780}
              height={220}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 -left-35 -translate-y-1/2 rounded-2xl  bg-primary-pink-100 text-gray p-2"
        onClick={prevSlide}
      >
        ←
      </button>
      <button
        className="absolute top-1/2 -right-35 transform -translate-y-1/2 rounded-2xl  bg-primary-pink-100 text-gray p-2"
        onClick={nextSlide}
      >
        →
      </button>
    </div>
  );
};

export default Carousel;
