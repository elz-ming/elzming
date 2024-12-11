"use client";

import React from "react";
import TestimonialContent from "./TestimonialContent";
import TestimonialBox from "./subcomponents/TestimonialBox";

export type Language = "English" | "Chinese" | "Malay";

export default function Testimonials({ language }: { language: Language }) {
  return (
    <section id="testimonials" className="snap-start scroll-mt-[10vh]">
      <div
        id="testimonials-header"
        className="flex w-full h-[10vh] justify-center items-center"
      >
        <h2 className="text-4xl">Testimonials</h2>
      </div>
      <div
        id="testimonials-content"
        className="flex flex-wrap justify-center gap-6 px-10 py-6"
      >
        {TestimonialContent.map((testimonial, index) => (
          <TestimonialBox
            key={index}
            profilePicture={testimonial.profilePicture}
            name={testimonial[language]?.name || testimonial.English.name || ""}
            title={
              testimonial[language]?.title || testimonial.English.title || ""
            }
            headline={
              testimonial[language]?.headline ||
              testimonial.English.headline ||
              ""
            }
          />
        ))}
      </div>
    </section>
  );
}
