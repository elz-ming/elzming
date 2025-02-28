"use client";

import NameCard from "./subcomponents/NameCard";
import AboutContent, { AboutImages } from "./AboutContent";

export type Language = "English" | "Chinese" | "Malay";

export default function About({ language }: { language: Language }) {
  const content = AboutContent[language];

  return (
    <section
      id="about"
      className="flex-col items-center h-fit snap-start scroll-mt-[10vh] bg-[#fefbe6] dark:bg-[#171602] py-4 gap-4 sm:py-8 sm:gap-8 md:py-12 md:gap-12"
    >
      {/* Header */}
      <div id="about-header" className="container-header h-[10%]">
        <h2 className="text-4xl">
          About <del>Us</del> Me
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div
        id="about-content"
        className="container !h-fit !gap-4 sm:!gap-8 md:!gap-12 lg:!gap-12"
      >
        {content.map((card, index) => (
          <NameCard
            key={index}
            image={AboutImages[index]} // Get the image by index
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </section>
  );
}
