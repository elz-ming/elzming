import React from "react";

export default function Institution({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative flex justify-center flex-1 basis-1/3">
      {/* Circle with Image */}
      <div className="w-72 aspect-square bg-white rounded-full flex items-center justify-center overflow-hidden border-8 border-gray-300">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
