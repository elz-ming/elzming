export const HeroContent: Record<
  "English" | "Chinese" | "Malay",
  { prefix: string; title: string; subtitle: string }
> = {
  English: {
    prefix: "I'm",
    title: "Edmund",
    subtitle: "Fintech is my game.",
  },
  Chinese: {
    prefix: "我是",
    title: "Edmund!",
    subtitle: "我是一名金融科技爱好者。",
  },
  Malay: {
    prefix: "Saya",
    title: "Edmund!",
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

export const backgroundImageUrl: string = "";

export default HeroContent;
