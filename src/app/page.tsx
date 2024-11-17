"use client";

import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Education from "@/sections/Education/Education";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 flex w-full h-[10vh] justify-between items-center px-10 bg-black">
        <div id="title">
          <div id="icon"></div>
          <h1 className="text-white text-4xl">ELZ MING</h1>
        </div>
        <nav className="flex gap-10">
          <a
            href="#hero"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Hero
          </a>
          <a
            href="#about"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#education"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Contact
          </a>
        </nav>
      </header>
      <main
        id="scroll-container"
        className="flex flex-col w-full h-full snap-y snap-mandatory scroll-smooth gap-[5vh]"
      >
        <Hero />

        <About />

        <Education />

        <section
          id="experience"
          className="h-[80vh] snap-start scroll-mt-[10vh]"
        >
          <div id="experience-header" className="flex justify-center">
            <h2 className="text-4xl">Experience</h2>
          </div>
          <div id="experience-content"></div>
        </section>

        <section
          id="skills"
          className="h-[80vh] bg-yellow-300 snap-start scroll-mt-[10vh]"
        >
          <div id="skills-header" className="flex justify-center">
            <h2 className="text-4xl">Skills</h2>
          </div>
          <div id="skills-content"></div>
        </section>
        <section
          id="projects"
          className="h-[80vh] bg-yellow-500 snap-start scroll-mt-[10vh]"
        >
          <h2>Projects</h2>
        </section>
        <section
          id="testimonials"
          className="h-[80vh] bg-yellow-100 snap-start scroll-mt-[10vh]"
        >
          <h2>Testimonials</h2>
        </section>
        <section
          id="contact"
          className="h-[80vh] bg-yellow-300 snap-start scroll-mt-[10vh]"
        >
          <h2>Contact Us</h2>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
