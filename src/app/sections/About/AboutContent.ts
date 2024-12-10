// Type for the textual content
export type AboutContentType = {
  title: string;
  name: string;
  content: string;
};

// Array of images (shared across all languages)
export const AboutImages: string[] = [
  "/images/edmund-2.jpg",
  "/images/edmund-3.jpg",
  "/images/edmund-4.jpg",
  "/images/edmund-1.jpg",
];

// Textual content for each language
const AboutContent: Record<
  "English" | "Chinese" | "Malay",
  AboutContentType[]
> = {
  English: [
    {
      title: "Team Lead",
      name: "Edmund",
      content: "Something about Edmund.",
    },
    {
      title: "Software Developer",
      name: "Zhenming",
      content: "Something about Zhenming.",
    },
    {
      title: "Product Manager",
      name: "Zhen Zhen",
      content: "Something about Zhen Zhen.",
    },
    {
      title: "Data Scientist",
      name: "Ming Ming",
      content: "Something about Ming Ming.",
    },
  ],
  Chinese: [
    {
      title: "团队负责人",
      name: "Edmund",
      content: "关于Edmund的内容。",
    },
    {
      title: "软件开发员",
      name: "Zhenming",
      content: "关于Zhenming的内容。",
    },
    {
      title: "产品经理",
      name: "Zhen Zhen",
      content: "关于Zhen Zhen的内容。",
    },
    {
      title: "数据科学家",
      name: "Ming Ming",
      content: "关于Ming Ming的内容。",
    },
  ],
  Malay: [
    {
      title: "Ketua Pasukan",
      name: "Edmund",
      content: "Maklumat tentang Edmund.",
    },
    {
      title: "Pembangun Perisian",
      name: "Zhenming",
      content: "Maklumat tentang Zhenming.",
    },
    {
      title: "Pengurus Produk",
      name: "Zhen Zhen",
      content: "Maklumat tentang Zhen Zhen.",
    },
    {
      title: "Saintis Data",
      name: "Ming Ming",
      content: "Maklumat tentang Ming Ming.",
    },
  ],
};

export default AboutContent;
