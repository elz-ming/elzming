export const HeroContent: Record<
  "English" | "Chinese" | "Malay",
  { title: string; subtitle: string }
> = {
  English: {
    title: "Hi, I am Edmund Lin Zhenming!",
    subtitle: "Fintech is my game.",
  },
  Chinese: {
    title: "你好, 我是林震铭!",
    subtitle: "我是一名金融科技爱好者。",
  },
  Malay: {
    title: "Hai, saya Edmund Lin Zhenming!",
    subtitle: "Saya adalah seorang penggemar teknologi finansial.",
  },
};

export const HeroImages: string[] = [
  "/images/edmund-1.jpg",
  "/images/edmund-2.jpg",
  "/images/edmund-3.jpg",
];

export const CompanyLogos: Array<{ src: string; alt: string; link: string }> = [
  {
    src: "/images/setel-logo.png",
    alt: "Setel",
    link: "https://www.setel.com/",
  },
  {
    src: "/images/asiaverify-logo.jpeg",
    alt: "AsiaVerify",
    link: "https://www.asiaverify.com/",
  },
  {
    src: "/images/mono-logo.png",
    alt: "Mono SG",
    link: "https://www.mono.sg/",
  },
];

export default HeroContent;
