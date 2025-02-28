"use client";

// import HeroImages from "./subcomponents/HeroImages";
// import CompanyLogos from "./subcomponents/CompanyLogos";
import HeroContent from "./HeroContent";

export type Language = "English" | "Chinese" | "Malay";

export default function Hero({ language }: { language: Language }) {
  const content = HeroContent[language];

  // Background image from blob store
  const backgroundImageUrl =
    "https://uc6seleyxtaapmbh.public.blob.vercel-storage.com/Edmund_3-QZ5fIsjyUhP6KTmKknILRHYeoNGpcG.png";

  return (
    <section
      id="hero"
      className="justify-center aspect-[4/3] xl:h-[80vh] snap-start scroll-mt-[10vh] bg-[#fefbe6] dark:bg-[#171602]"
    >
      <div id="hero-content" className="container gap-y-10">
        <div className="flex flex-col justify-center col-span-2 sm:col-span-4 xl:col-span-7">
          <h2 className="text-[24px] sm:text-[28px] xl:text-[32px] text-black dark:text-white">
            {content.prefix}{" "}
            <span className="text-[26px] sm:text-[32px] xl:text-[40px] font-bold ">
              {content.title}
            </span>
          </h2>
          <p className="text-black dark:text-white">{content.subtitle}</p>
        </div>
        <div
          className="flex flex-col justify-center col-span-2 sm:col-span-4 xl:col-span-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
      </div>
    </section>
  );
}
