import Header from "./components/Header";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Hero />
      </main>
    </>
  );
}
