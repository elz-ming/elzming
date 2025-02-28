"use client";

export default function NameCard({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) {
  return (
    <div className="relative flex flex-col items-center col-span-4 xl:col-span-3 h-full p-4 gap-2 bg-[#fae779] rounded-lg shadow-md dark:shadow-white text-center overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#fff4b9] rounded-full shadow-md z-0"></div>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#fff4b9] rounded-full shadow-md z-0"></div>

      {/* Main Content */}
      <img
        src={image}
        alt={title}
        className="w-full aspect-square rounded-full shadow-md relative z-10"
      />
      <h3 className="flex items-center text-black font-bold relative z-10 min-h-auto lg:min-h-[5rem]">
        {title}
      </h3>
      <span className=".subtitle text-black text-justify relative z-10 h-full overflow-y-scroll conditional-scrollbar">
        {content}
      </span>
    </div>
  );
}
