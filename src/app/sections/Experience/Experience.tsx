import React from "react";
import TimelineItem from "./subcomponents/TimelineItem";
import ExperienceContent from "./ExperienceContent";

export default function Experience() {
  return (
    <section id="experience" className="snap-start scroll-mt-[10vh]">
      {/* Header */}
      <div
        id="experience-header"
        className="flex w-full h-[10vh] justify-center items-center"
      >
        <h2 className="text-4xl">Experience</h2>
      </div>

      {/* Content */}
      <div
        id="experience-content"
        className="relative flex flex-col w-full items-center"
      >
        {/* Timeline */}
        <div className="absolute w-2 bg-gray-300 h-full"></div>

        {/* Timeline Items */}
        <div className="relative w-full flex flex-col gap-10 px-20">
          {ExperienceContent.map((item, index) => (
            <div
              key={index}
              className={`relative flex w-full items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Circle */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-8 aspect-square bg-gray-300 rounded-full`}
              ></div>

              {/* Timeline Item */}
              <TimelineItem
                period={item.period}
                company={item.company}
                role={item.role}
                description={item.description}
                isRight={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
