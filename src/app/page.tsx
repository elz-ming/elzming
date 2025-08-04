import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Hero />
        {/* <Education /> */}
      </main>
    </>
  );
}
