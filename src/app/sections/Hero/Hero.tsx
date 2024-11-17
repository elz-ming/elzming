"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/images/edmund-1.jpg",
    "/images/edmund-2.jpg",
    "/images/edmund-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero"
      className="flex h-[80vh] bg-black snap-start scroll-mt-[10vh]"
    >
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
                    ? "-translate-x-60"
                    : isRight
                    ? "translate-x-60"
                    : "translate-x-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`w-60 rounded-full shadow-white ${
                    isMiddle ? "shadow-md" : "shadow-sm"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="hero-content"
        className="flex flex-col w-full h-full justify-center gap-y-10"
      >
        <h2 className="text-6xl text-white">Hi, I am Edmund Lin Zhenming!</h2>
        <p className="text-4xl text-white">Fintech is my game.</p>
        <div id="company-logos" className="flex gap-8">
          <img
            src="/images/setel-logo.png"
            alt="ASEAN Scholar"
            className="w-20 aspect-square rounded-full shadow-md shadow-black"
          />
          <img
            src="/images/asiaverify-logo.jpeg"
            alt="ASEAN Scholar"
            className="w-20 aspect-square rounded-full shadow-md shadow-black"
          />
          <img
            src="/images/mono-logo.png"
            alt="ASEAN Scholar"
            className="w-20 aspect-square rounded-full shadow-md shadow-black"
          />
        </div>
      </div>
    </section>
  );
}
