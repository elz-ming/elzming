"use client";

export default function NameCard({
  image,
  title,
  name,
  content,
}: {
  image: string;
  title: string;
  name: string;
  content: string;
}) {
  return (
    <div className="relative flex flex-col w-full p-8 gap-2 bg-[#fae779] rounded-lg shadow-md text-center overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#fff4b9] rounded-full shadow-md z-0"></div>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#fff4b9] rounded-full shadow-md z-0"></div>

      {/* Main Content */}
      <img
        src={image}
        alt={title}
        className="w-full aspect-square rounded-full shadow-md relative z-10"
      />
      <h2 className="lg:text-xl 2xl:text-3xl text-black font-bold mb-2 relative z-10">
        {title}
      </h2>
      <h3 className="lg:text-lg 2xl:text-2xl text-black mb-4 relative z-10">
        {name}
      </h3>
      <p className="lg:text-base 2xl:text-sm text-black relative z-10">
        {content}
      </p>
    </div>
  );
}
