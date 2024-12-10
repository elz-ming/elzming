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
    <div className="flex flex-col w-full p-8 gap-2 bg-black dark:bg-white rounded-lg shadow-2xl text-center">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square rounded-full shadow-md"
      />
      <h2 className="lg:text-xl 2xl:text-3xl text-white dark:text-black font-bold mb-2">
        {title}
      </h2>
      <h3 className="lg:text-lg 2xl:text-2xl text-white dark:text-black mb-4">
        {name}
      </h3>
      <p className="lg:text-base 2xl:text-sm text-white dark:text-black">
        {content}
      </p>
    </div>
  );
}
