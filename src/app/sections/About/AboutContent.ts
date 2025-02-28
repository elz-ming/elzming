// Type for the textual content
export type AboutContentType = {
  title: string;
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
      content:
        "Led teams in school and hackathon projects, ensuring smooth execution and collaboration.",
    },
    {
      title: "Web Developer",
      content:
        "Developed scalable web solutions at Mono SG, improving system efficiency and user experience.",
    },
    {
      title: "Product Manager",
      content:
        "Managed API and UI development at AsiaVerify, bridging technical and business needs for seamless integration.",
    },
    {
      title: "Data Scientist",
      content:
        "Built predictive models and enhanced data analytics at Setel Ventures to drive business insights.",
    },
  ],
  Chinese: [
    {
      title: "团队负责人",
      content: "在学校和黑客松项目中领导团队，确保高效协作和执行。",
    },
    {
      title: "网页开发员",
      content: "在Mono SG开发可扩展网页解决方案，提高系统效率和用户体验。",
    },
    {
      title: "产品经理",
      content: "在AsiaVerify负责API和UI开发，推动技术与业务的无缝对接。",
    },
    {
      title: "数据科学家",
      content: "在Setel Ventures构建预测模型，提升数据分析能力，助力业务增长。",
    },
  ],
  Malay: [
    {
      title: "Ketua Pasukan",
      content:
        "Memimpin pasukan dalam projek sekolah dan hackathon, memastikan kerjasama dan kejayaan projek.",
    },
    {
      title: "Pembangun Web",
      content:
        "Membangunkan penyelesaian web berskala di Mono SG, meningkatkan kecekapan dan pengalaman pengguna.",
    },
    {
      title: "Pengurus Produk",
      content:
        "Mengurus pembangunan API dan UI di AsiaVerify, menyelaraskan keperluan teknologi dan perniagaan.",
    },
    {
      title: "Saintis Data",
      content:
        "Membina model ramalan dan meningkatkan analisis data di Setel Ventures untuk pandangan perniagaan yang lebih baik.",
    },
  ],
};

export default AboutContent;
