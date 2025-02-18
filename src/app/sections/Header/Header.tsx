"use client";

import { useTheme } from "@/context/ThemeContext";
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

  return (
    <header className="sticky top-0 z-20 grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 gap-2 sm:gap-4 xl:gap-6 items-center w-full h-[10vh] bg-[#fefbe6] dark:bg-[#171602]">
      {/* Title */}
      <div
        id="title"
        className="flex justify-start items-center h-full col-span-2 sm:col-span-4 xl:col-span-6"
      >
        <h1 className="text-black text-[32px] sm:text-[40px] xl:text-[48px] dark:text-white">
          ELZ MING
        </h1>
      </div>

      {/* Toggle Buttons */}
      <div
        id="toggle-buttons"
        className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 xl:gap-6 h-full col-span-2 sm:col-span-4 xl:col-span-6"
      >
        <LanguageToggle
          language={language}
          toggleLanguage={toggleLanguage}
          isDark={isDark}
        />
        <ThemeToggle />
      </div>
    </header>
  );
}
