import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Edmund Lin Zhenming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex justify-center w-screen">
      <body
        className={`${poppins.className} w-full mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-32 2xl:mx-48 bg-[#fefbe6] dark:bg-[#171602] text-black dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
