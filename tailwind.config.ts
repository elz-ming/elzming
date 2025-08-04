// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // <-- adjust to match your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: "var(--font-sora)",
        pacifico: "var(--font-pacifico)",
        mono: "var(--font-mono)", // optional if you're using JetBrains Mono
      },
    },
  },
  plugins: [],
};
export default config;
