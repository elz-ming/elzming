"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import HeaderContent from "./HeaderContent";
import ThemeToggle from "./subcomponents/ThemeToggle";
import LanguageToggle from "./subcomponents/LanguageToggle";

type Language = "English" | "Chinese" | "Malay";

export default function Header({
  language,
  toggleLanguage,
}: {
  language: Language;
  toggleLanguage: () => void;
}) {
  const { isDark } = useTheme();

  const navigationItems = HeaderContent[language];

  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the section is in view
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 flex w-full h-[10vh] justify-between items-center px-10 bg-[#fefbe6] dark:bg-[#171602]">
      {/* Title */}
      <div id="title" className="flex justify-start flex-1 basis-1/5">
        <h1 className="text-black text-4xl dark:text-white">ELZ MING</h1>
      </div>

      {/* Toggle Buttons */}
      <div id="toggle-buttons" className="flex gap-4 px-2 flex-1 basis-1/5">
        <LanguageToggle
          language={language}
          toggleLanguage={toggleLanguage}
          isDark={isDark}
        />
        <ThemeToggle />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-4 justify-center items-center flex-3 basis-3/5 h-full">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative flex justify-center items-center flex-1 basis-1/7 h-full lg:text-sm 2xl:text-base transition duration-300 ${
              activeSection === item.id
                ? "text-black dark:text-yellow-400 font-bold scale-110 border-b-2 border-black dark:border-yellow-400"
                : "text-gray-600 dark:text-gray-400 hover:scale-110 hover:text-black dark:hover:text-yellow-400"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
