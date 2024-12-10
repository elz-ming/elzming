"use client";

import styles from "./About.module.css";
import NameCardCarousel from "./subcomponents/NameCardCarousel";
import AboutContent, { AboutImages } from "./AboutContent";

export type Language = "English" | "Chinese" | "Malay";

export default function About({ language }: { language: Language }) {
  const content = AboutContent[language];

  return (
    <section
      id="about"
      className={`${styles.aboutSection} w-full h-[80vh] snap-start scroll-mt-[10vh]`}
    >
      <div
        id="about-header"
        className="flex h-[10%] justify-center items-center"
      >
        <h2 className="text-4xl">
          About <del>Us</del> Me
        </h2>
      </div>
      <NameCardCarousel cards={content} images={AboutImages} />
    </section>
  );
}
