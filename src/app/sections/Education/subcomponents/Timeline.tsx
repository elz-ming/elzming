import React from "react";
import Institution from "./Institution";

export default function Timeline({
  institutions,
}: {
  institutions: { image: string; title: string; year: string }[];
}) {
  return (
    <div className="flex justify-center items-center">
      {/* Horizontal Line */}
      <div className="absolute h-3 bg-[#fae779] w-full"></div>

      {/* Circles */}
      <div className="flex w-full justify-center">
        {institutions.map((item, index) => (
          <Institution key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}
