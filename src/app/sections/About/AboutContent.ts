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
      name: "LinLin",
      content: "Something about LinLin.",
    },
    {
      title: "Product Manager",
      name: "ZhenZhen",
      content: "Something about ZhenZhen.",
    },
    {
      title: "Data Scientist",
      name: "MingMing",
      content: "Something about MingMing.",
    },
  ],
  Chinese: [
    {
      title: "团队负责人",
      name: "林震铭",
      content: "关于Edmund的内容。",
    },
    {
      title: "软件开发员",
      name: "双木",
      content: "关于Zhenming的内容。",
    },
    {
      title: "产品经理",
      name: "雨辰",
      content: "关于Zhen Zhen的内容。",
    },
    {
      title: "数据科学家",
      name: "金名",
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
      name: "LinLin",
      content: "Maklumat tentang LinLin.",
    },
    {
      title: "Pengurus Produk",
      name: "ZhenZhen",
      content: "Maklumat tentang ZhenZhen.",
    },
    {
      title: "Saintis Data",
      name: "MingMing",
      content: "Maklumat tentang MingMing.",
    },
  ],
};

export default AboutContent;
