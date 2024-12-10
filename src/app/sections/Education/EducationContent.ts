export type InstitutionType = {
  image: string;
  title: string;
  year: string;
};

const EducationContent: InstitutionType[] = [
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
    title: "Singapore Institute of Technology",
    year: "2023 - 2026",
  },
];

export default EducationContent;
