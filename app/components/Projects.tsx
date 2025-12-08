"use client";

// Projects Section - Enhanced portfolio display with recruiter-friendly features
// Features:
// - CSS-only animations (no Framer Motion whileInView for performance)
// - Responsive grid (1 col mobile, 2 cols desktop with featured spanning full width)

import { portfolioProjects } from "@/app/lib/constants";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  return (
    <section
      className="relative z-10 py-14 sm:py-20 content-auto"
      id="projects"
    >
      {/* Subtle background gradient for section separation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-dark-200/30 to-transparent" />
      {/* Section header - using CSS animations for performance */}
      <div className="space-y-3 mb-10">
        <h2 className="text-3xl min-[430px]:text-4xl font-bold text-stone-200">
          My Portfolio
        </h2>
        <p className="text-sm sm:text-base max-w-lg text-stone-400">
          Production-ready projects showcasing full-stack capabilities.
        </p>
      </div>

      {/* Projects grid - 2 columns for impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
