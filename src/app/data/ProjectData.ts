export type Project = {
  title: string;
  description: string;
  imageSrc: string;
};

export const projectData: Project[] = [
  {
    title: "mAIscam",
    description:
      "An AI-powered scam awareness platform that uses LLM + RAG to educate Southeast Asian users on the latest scam tactics. Built with authentication, a middleware system, and an interactive chatbot interface.",
    imageSrc: "/maiscam.png",
  },
  {
    title: "VeriZKP",
    description:
      "A Zero-Knowledge Proof-based degree verification system allowing students to prove graduation without revealing grades. Built for selective disclosure and institutional trust using modern cryptography.",
    imageSrc: "/verizkp.png",
  },
  {
    title: "MilkScholar",
    description:
      "An education support platform built to help underserved students access micro-scholarships and showcase their achievements. Combines financial transparency with a gamified user experience.",
    imageSrc: "/milkscholar.png",
  },
];
