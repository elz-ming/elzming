import React from "react";

const Insitution = ({
  image,
  title,
  year,
}: {
  image: string;
  title: string;
  year: string;
}) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Circle with Image */}
      <div className="w-80 aspect-square bg-white rounded-full flex items-center justify-center overflow-hidden border-8 border-gray-300">
        <img src={image} alt="Circle" className="w-full h-full object-cover" />
      </div>
      {/* Remark Below Circle */}
      <div className="text-center">
        <h3 className="text-2xl text-black">{title}</h3>
        <p className="text-lg"> {year}</p>
        <ul>
          <li>Something</li>
        </ul>
      </div>
    </div>
  );
};

export default function Education() {
  const Institutions = [
    {
      image: "/images/clhs-logo.png",
      title: "Chung Ling High School",
      year: "2015 - 2019",
    },
    {
      image: "/images/taylors-logo.png",
      title: "Taylor's College",
      year: "2021 - 2022",
    },
    {
      image: "/images/sit-logo.png",
      title: "Singapre Institute of Technology",
      year: "2023 - 2026",
    },
  ];

  return (
    <section
      id="education"
      className="flex flex-col w-full h-[80vh] snap-start scroll-mt-[10vh] items-center"
    >
      {/* Title */}
      <div
        id="education-header"
        className="flex w-full h-[10%] justify-center items-center"
      >
        <h2 className="text-4xl">Education</h2>
      </div>

      {/* Timeline */}
      <div
        id="education-content"
        className="relative flex w-full h-[90%] items-center"
      >
        {/* Horizontal Line */}
        <div className="absolute h-3 bg-gray-300 w-full"></div>

        {/* Circles */}
        <div className="flex w-full justify-between px-40">
          {/* Repeat this block for each circle */}
          {/* Circles */}
          <div className="flex w-full justify-between">
            {Institutions.map((item, index) => (
              <Insitution
                key={index}
                image={item.image}
                title={item.title}
                year={item.year}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
