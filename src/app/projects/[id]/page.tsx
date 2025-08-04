"use client";

import { projectData } from "@/app/data/ProjectData";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

type Params = {
  params: {
    id: string;
  };
};

export default function ProjectDetailPage({ params }: Params) {
  const router = useRouter();
  const project = projectData.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <section className="px-8 md:px-16 2xl:px-32 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <h1 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h1>

        <div className="flex justify-center">
          <div className="relative h-64 aspect-square mb-6 rounded-lg overflow-hidden shadow-md">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
          {project.detail}
        </p>
      </div>
    </section>
  );
}
