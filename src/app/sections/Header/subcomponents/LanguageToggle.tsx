"use client";

type Language = "English" | "Chinese" | "Malay";

export default function LanguageToggle({
  language,
  toggleLanguage,
  isDark,
}: {
  language: Language;
  toggleLanguage: () => void;
  isDark: boolean;
}) {
  const getLanguageText = () => {
    if (language === "English") {
      return [
        { label: "En", isActive: true },
        { label: "Ch", isActive: false },
        { label: "Ma", isActive: false },
      ];
    } else if (language === "Chinese") {
      return [
        { label: "英", isActive: false },
        { label: "中", isActive: true },
        { label: "马", isActive: false },
      ];
    } else {
      return [
        { label: "BI", isActive: false },
        { label: "BC", isActive: false },
        { label: "BM", isActive: true },
      ];
    }
  };

  const languageOptions = getLanguageText();

  return (
    <div className="flex justify-center items-center col-span-1 sm:col-span-2 xl:col-span-3">
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center w-24 h-8 sm:w-36 sm:h-12 gap-2 bg-[#fae779] dark:bg-gray-600 rounded-full relative"
        style={{
          boxShadow: isDark
            ? "inset 0 0 4px rgba(0, 0, 0, 0.5)" // Dark mode: Black shadow
            : "inset 0 0 4px rgba(0, 0, 0, 0.5)", // Light mode: White shadow
        }}
      >
        {/* Toggle Circle */}
        {languageOptions.map((option, index) => (
          <div
            key={index}
            className={`flex items-center justify-center aspect-square w-6 h-6 sm:w-10 sm:h-10 p-1 rounded-full text-xs sm:text-lg font-bold transition-colors duration-300 ${
              option.isActive
                ? "bg-[#fefbe6] dark:bg-[#171602] shadow-md text-black dark:text-yellow-400"
                : "bg-transparent text-gray-800 dark:text-gray-400"
            }`}
            style={{
              transition: "background-color 0.3s ease, color 0.3s ease", // Inline transition
            }}
          >
            {option.label}
          </div>
        ))}
      </button>
    </div>
  );
}
