import Image from "next/image";
import Link from "next/link";
import { projectData } from "@/app/data/ProjectData";

export default function Projects() {
  // === Reusable ProjectCard Component ===
  function ProjectCard({
    id,
    title,
    description,
    imageSrc,
    href,
  }: {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    href?: string;
  }) {
    return (
      <Link
        className="
				w-full h-32 overflow-hidden
				md:flex-1 md:h-full
				flex flex-row
				md:flex-col
				rounded-xl shadow-[4px_4px_4px_rgba(254,229,117,0.75)]
				md:rounded-4xl
				cursor-pointer hover:scale-105
				"
        href={href ?? `/projects/${id}`}
        key={id}
      >
        {/* Project Image */}
        <div
          className="
					relative w-auto h-full aspect-square
					md:w-full md:h-auto

					"
        >
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>

        {/* Project Words */}
        <div
          className="
					w-full flex-grow
					p-2
					md:p-3 md:border-0 2xl:p-4
					"
        >
          {/* Project Title */}
          <h2
            className="
						text-lg font-semibold
						md:text-xl 2xl:text-2xl"
          >
            {title}
          </h2>

          {/* Project Description */}
          <p
            className="
						text-xs text-gray-600 line-clamp-5
						md:text-sm md:line-clamp-4 2xl:text-base 2xl:line-clamp-none
						"
          >
            {description}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <section
      className="
      w-full h-auto z-0
			md:h-screen
			px-8 
			md:px-24 2xl:px-32
			"
    >
      {/* Title */}
      <div
        className="
				w-full h-[10%]
				flex justify-center items-center
				text-lg font-semibold
        md:text-2xl 2xl:text-4xl
				py-2
				md:py-4
				"
      >
        <h1>Projects</h1>
      </div>

      {/* Projects */}
      <div
        className="
				w-full h-auto
				md:h-[80%]
				flex flex-col gap-8
				md:flex-row md:gap-12 2xl:gap-16
				py-2
				md:py-4"
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            href={project.href}
          />
        ))}
      </div>

      {/* Button */}
      <div
        className="
				w-full
				md:h-[10%]
				flex justify-center items-center
				py-2
				md:py-4"
      >
        <Link href="/projects">
          <button
            className="
           	bg-[#FEE575] 
            px-4 py-2 rounded-md
            font-bold
            cursor-pointer hover:scale-110
            "
          >
            See More
          </button>
        </Link>
      </div>
    </section>
  );
}
