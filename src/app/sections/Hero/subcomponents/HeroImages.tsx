"use client";

import { useEffect, useState } from "react";

export type HeroImagesProps = {
  images: string[];
};

export default function HeroImages({ images }: HeroImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="hero-image" className="w-full h-full">
      <div className="flex justify-center items-center h-full">
        {images.map((image, index) => {
          const isMiddle = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + images.length) % images.length;
          const isRight = index === (currentIndex + 1) % images.length;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${
                isMiddle
                  ? "scale-[2.0] opacity-100 z-10 translate-y-4"
                  : isLeft || isRight
                  ? "scale-90 opacity-70 z-5"
                  : "hidden"
              } ${
                isLeft
                  ? "md:-translate-x-40 2xl:-translate-x-60"
                  : isRight
                  ? "md:translate-x-40 2xl:translate-x-60"
                  : "translate-x-0"
              }`}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className={`lg:w-40 2xl:w-60 rounded-full shadow-white ${
                  isMiddle ? "shadow-md" : "shadow-sm"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
