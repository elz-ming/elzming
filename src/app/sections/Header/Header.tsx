"use client";

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
      <nav className="flex gap-2 flex-3 basis-3/5 justify-center">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-black dark:text-white lg:text-sm 2xl:text-base hover:text-gray-400 transition duration-300 flex justify-center flex-1 basis-1/7"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
