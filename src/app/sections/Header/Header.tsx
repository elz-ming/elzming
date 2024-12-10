"use client";

import { useTheme } from "@/context/ThemeContext";
import HeaderContent from "./HeaderContent";

type Language = "English" | "Chinese" | "Malay";

export default function Header({
  language,
  toggleLanguage,
}: {
  language: Language;
  toggleLanguage: () => void;
}) {
  const { isDark, toggleTheme } = useTheme();

  // Get navigation items for the current language
  const navigationItems = HeaderContent[language];

  // Button text for language toggle
  const languageButtonText =
    language === "English"
      ? "English"
      : language === "Chinese"
      ? "华文"
      : "Melayu";

  // Button text for theme toggle
  const themeButtonText = isDark
    ? language === "English"
      ? "Dark Mode"
      : language === "Chinese"
      ? "暗模式"
      : "Mod Gelap"
    : language === "English"
    ? "Light Mode"
    : language === "Chinese"
    ? "亮模式"
    : "Mod Terang";

  return (
    <header className="sticky top-0 z-20 flex w-full h-[10vh] justify-between items-center px-10 bg-white dark:bg-black">
      {/* Title */}
      <div id="title" className="flex justify-start flex-1 basis-1/5">
        <h1 className="text-black text-4xl dark:text-white">ELZ MING</h1>
      </div>

      {/* Toggle Buttons */}
      <div id="toggle-buttons" className="flex gap-4 px-2 flex-1 basis-1/5">
        <button
          onClick={toggleLanguage}
          className="p-2 flex-1 basis-1/2 text-white text-sm bg-blue-500 rounded hover:bg-blue-700 transition"
        >
          {languageButtonText}
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 flex-1 basis-1/2 text-white text-sm bg-gray-500 rounded hover:bg-gray-700 transition"
        >
          {themeButtonText}
        </button>
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
