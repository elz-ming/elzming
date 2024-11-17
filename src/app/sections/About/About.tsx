"use client";

import styles from "./About.module.css";

const NameCard = ({
  image,
  title,
  name,
  content,
}: {
  image: string;
  title: string;
  name: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col w-full p-8 gap-4 bg-white rounded-lg shadow-2xl text-center">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square rounded-full shadow-md"
      />
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <h3 className="text-2xl text-gray-600 mb-4">{name}</h3>
      <p className="text-sm text-gray-500">{content}</p>
    </div>
  );
};

const NameCards = [
  {
    image: "/images/edmund-2.jpg",
    title: "Team Lead",
    name: "Edmund",
    content: "Something",
  },
  {
    image: "/images/edmund-3.jpg",
    title: "Software Developer",
    name: "Zhenming",
    content: "Something",
  },
  {
    image: "/images/edmund-4.jpg",
    title: "Product Manager",
    name: "Zhen Zhen",
    content: "Something",
  },
  {
    image: "/images/edmund-1.jpg",
    title: "Data Scientist",
    name: "Ming Ming",
    content: "Something",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className={`${styles.aboutSection} w-full h-[80vh] snap-start scroll-mt-[10vh]`}
    >
      <div
        id="about-header"
        className="flex h-[10%] justify-center items-center"
      >
        <h2 className="text-4xl">About Us</h2>
      </div>
      <div
        id="about-content"
        className={`flex w-full h-[90%] gap-8 px-8 ${styles.carousel}`}
      >
        {NameCards.map((item, index) => (
          <NameCard
            key={index}
            image={item.image}
            title={item.title}
            name={item.name}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
}
