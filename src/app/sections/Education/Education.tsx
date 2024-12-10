"use client";

import React from "react";
import Timeline from "./subcomponents/Timeline";
import Remark from "./subcomponents/Remark";
import EducationContent from "./EducationContent";

export default function Education() {
  return (
    <section
      id="education"
      className="flex flex-col w-full snap-start scroll-mt-[10vh] items-center"
    >
      {/* Title */}
      <div
        id="education-header"
        className="flex w-full h-[10vh] justify-center items-center"
      >
        <h2 className="text-4xl">Education</h2>
      </div>

      {/* Timeline */}
      <div id="education-content" className="flex flex-col w-full">
        <Timeline institutions={EducationContent} />

        {/* Remarks */}
        <div className="flex w-full justify-center">
          {EducationContent.map((item, index) => (
            <Remark key={index} title={item.title} year={item.year} />
          ))}
        </div>
      </div>
    </section>
  );
}
