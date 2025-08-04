export type Project = {
  id: string; // used for [id] route
  title: string;
  description: string;
  imageSrc: string;
  detail?: string; // full write-up for /[id]/page
};

export const projectData: Project[] = [
  {
    id: "maiscam",
    title: "mAIscam",
    description:
      "AI-powered scam awareness platform using LLM + RAG for Southeast Asia.",
    imageSrc: "/maiscam.png",
    detail:
      "mAIscam is a socially-driven scam detection and awareness platform built for Southeast Asia. It uses large language models (LLMs) and retrieval-augmented generation (RAG) to detect, educate, and inform users about the latest scams. The platform includes authentication, middleware, and a chatbot interface that empowers users to learn interactively.",
  },
  {
    id: "verizkp",
    title: "VeriZKP",
    description:
      "ZKP-based degree verification system for privacy-preserving education proof.",
    imageSrc: "/verizkp.png",
    detail:
      "VeriZKP is a privacy-first credential verification system built using Zero-Knowledge Proofs (ZKPs). It allows students to prove that they’ve completed a degree without revealing grades or specific modules. Employers get proof, students retain privacy.",
  },
  {
    id: "milkscholar",
    title: "MilkScholar",
    description:
      "Platform helping underserved students access micro-scholarships with transparency.",
    imageSrc: "/milkscholar.png",
    detail:
      "MilkScholar helps students access funding through micro-scholarships while gamifying academic and co-curricular progress. It promotes transparency, mentorship, and community-driven support to enhance educational equity.",
  },
];
