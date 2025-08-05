import Header from "./components/Header";
import Hero from "./components/sections/Hero";
// import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full bg-white">
        <Hero />
        {/* <Education /> */}
        <Projects />
      </main>
    </>
  );
}
