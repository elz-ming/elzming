"use client";

import HeroImages from "./subcomponents/HeroImages";
import CompanyLogos from "./subcomponents/CompanyLogos";
import HeroContent, {
  HeroImages as ImageData,
  CompanyLogos as LogoData,
} from "./HeroContent";

export type Language = "English" | "Chinese" | "Malay";

export default function Hero({ language }: { language: Language }) {
  const content = HeroContent[language];

  return (
    <section id="hero" className="flex h-[80vh] snap-start scroll-mt-[10vh]">
      <HeroImages images={ImageData} />

      <div
        id="hero-content"
        className="flex flex-col w-full h-full justify-center gap-y-10"
      >
        <h2 className="lg:text-4xl 2xl:text-6xl text-black dark:text-white">
          {content.title}
        </h2>
        <p className="lg:text-2xl 2xl:text-4xl text-black dark:text-white">
          {content.subtitle}
        </p>

        <CompanyLogos logos={LogoData} />
      </div>
    </section>
  );
}
