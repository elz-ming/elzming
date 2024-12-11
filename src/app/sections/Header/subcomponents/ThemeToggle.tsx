"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center cursor-pointer w-16 h-8 p-1 rounded-full bg-[#fae779] dark:bg-gray-600 transition duration-300`}
      style={{
        boxShadow: isDark
          ? "inset 0 0 4px rgba(0, 0, 0, 0.5)" // Dark mode: Black shadow
          : "inset 0 0 4px rgba(0, 0, 0, 0.5)", // Light mode: White shadow
      }}
    >
      {/* Toggle Circle */}
      <div
        className={`w-6 h-6 rounded-full bg-[#fefbe6] dark:bg-[#171602] shadow-md flex items-center justify-center transition-all duration-300 ${
          isDark ? "transform translate-x-8" : "transform translate-x-0"
        }`}
      >
        {isDark ? (
          <span className="text-md">🌙</span> // Moon icon for dark mode
        ) : (
          <span className="text-sm">☀️</span> // Sun icon for light mode
        )}
      </div>
    </div>
  );
}
