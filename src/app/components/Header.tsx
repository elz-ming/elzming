"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setShowHeader(false); // scroll down
      } else {
        setShowHeader(true); // scroll up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        w-full h-[10vh] fixed top-0 left-0 z-100
        flex justify-center items-center
        md:justify-start
        md:px-24 2xl:px-32
        transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        `}
    >
      <div
        className="
        bg-white
        text-lg font-semibold
        md:text-xl 2xl:text-4xl
        py-1/2 px-2 border-2 rounded-md 
        2xl:py-1 md:border-4 2xl:border-6"
      >
        ELZ MING
      </div>
    </header>
  );
}
