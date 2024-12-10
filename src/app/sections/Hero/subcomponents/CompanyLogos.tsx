"use client";

import { useState } from "react";

export type LogoProps = {
  src: string;
  alt: string;
  link: string;
};

export type CompanyLogosProps = {
  logos: LogoProps[];
};

export default function CompanyLogos({ logos }: CompanyLogosProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="company-logos" className="flex gap-8 relative">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Tooltip Preview */}
          {hoveredIndex === index && (
            <div className="absolute -top-12 bg-white text-black text-sm p-2 rounded-lg shadow-lg z-20">
              {logo.link}
            </div>
          )}

          <a
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-20 aspect-square rounded-full shadow-md shadow-black transition-transform duration-300 group-hover:scale-125"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
