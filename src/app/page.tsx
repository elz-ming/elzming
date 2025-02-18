"use client";

import { useState } from "react";

import Header from "@/sections/Header/Header"; // Import Header
import Hero from "@/sections/Hero/Hero";
// import About from "@/sections/About/About";
// import Education from "@/sections/Education/Education";
// import Experience from "@/sections/Experience/Experience";
// import Skills from "@/sections/Skills/Skills";
// import Projects from "@/sections/Projects/Projects";
// import Testimonials from "./sections/Testimonials/Testimonials";
// import Contact from "./sections/Contact/Contact";

type Language = "English" | "Chinese" | "Malay";

export default function Home() {
  const [language, setLanguage] = useState<Language>("English");

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === "English" ? "Chinese" : prev === "Chinese" ? "Malay" : "English"
    );
  };

  return (
    <>
      {/* Use Header Component */}
      <Header language={language} toggleLanguage={toggleLanguage} />

      <main
        id="scroll-container"
        className="flex flex-col w-full h-full snap-y snap-mandatory scroll-smooth gap-[5vh]"
      >
        <Hero language={language} />

        {/* <About language={language} />

        <Education />

        <Experience />

        <Skills />

        <Projects />

        <Testimonials language={language} />

        <Contact /> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
