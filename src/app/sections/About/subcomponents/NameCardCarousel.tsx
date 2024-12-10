"use client";

import NameCard from "./NameCard";
import { AboutContentType } from "../AboutContent";

export default function NameCardCarousel({
  cards,
  images,
}: {
  cards: AboutContentType[];
  images: string[];
}) {
  return (
    <div id="about-content" className="flex w-full h-[90%] gap-8 px-8">
      {cards.map((card, index) => (
        <NameCard
          key={index}
          image={images[index]} // Get the image by index
          title={card.title}
          name={card.name}
          content={card.content}
        />
      ))}
    </div>
  );
}
