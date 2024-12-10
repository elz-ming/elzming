"use client";

import styles from "./About.module.css";
import NameCard from "./subcomponents/NameCard";
import AboutContent, { AboutImages } from "./AboutContent";

export type Language = "English" | "Chinese" | "Malay";

export default function About({ language }: { language: Language }) {
  const content = AboutContent[language];

  return (
    <section
      id="about"
      className={`${styles.aboutSection} w-full snap-start scroll-mt-[10vh]`}
    >
      <div
        id="about-header"
        className="flex h-[10vh] justify-center items-center"
      >
        <h2 className="text-4xl">
          About <del>Us</del> Me
        </h2>
      </div>
      <div id="about-content" className="flex w-full gap-8 px-8">
        {content.map((card, index) => (
          <NameCard
            key={index}
            image={AboutImages[index]} // Get the image by index
            title={card.title}
            name={card.name}
            content={card.content}
          />
        ))}
      </div>
    </section>
  );
}
