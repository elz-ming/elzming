import React from "react";

export default function TestimonialBox({
  profilePicture,
  name,
  title,
  headline,
}: {
  profilePicture: string;
  name: string;
  title: string;
  headline: string;
}) {
  return (
    <div className="flex flex-col w-80 bg-[#fae779] shadow-lg rounded-lg p-6 gap-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#fff4b9] rounded-full z-0"></div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#fff4b9] rounded-full z-0"></div>

      {/* Profile Picture */}
      <div className="relative z-10 mx-auto">
        <img
          src={profilePicture}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-[#fff4b9] shadow-md"
        />
      </div>

      {/* Name and Title */}
      <div className="text-center relative z-10">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>

      {/* Headline as a Quote */}
      <div className="relative text-gray-700 text-center italic z-10">
        <p className="before:content-['“'] after:content-['”'] text-lg font-medium">
          {headline}
        </p>
      </div>

      {/* Read More Button */}
      <button className="relative z-10 mt-4 px-4 py-2 text-sm bg-[#fff9d5] text-black rounded shadow-md hover:bg-[#fdee9f] transition">
        Read More
      </button>
    </div>
  );
}
