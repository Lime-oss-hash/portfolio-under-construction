// Projects Section - Enhanced portfolio display with recruiter-friendly features
// Uses CSS-based scroll animation for smooth fade-in

"use client";

import { portfolioProjects } from "@/app/lib/constants";
import ProjectCard from "./ui/ProjectCard";
import { useEffect, useRef } from "react";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  // Lightweight intersection observer to trigger CSS animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el) => {
                el.classList.add("in-view");
              });
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-14 sm:py-20 content-auto"
      id="projects"
    >
      {/* Subtle background gradient for section separation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-dark-200/30 to-transparent" />

      {/* Section header with scroll animation */}
      <div className="animate-on-scroll space-y-3 mb-10">
        <h2 className="text-3xl min-[430px]:text-4xl font-bold text-stone-200">
          My Portfolio
        </h2>
        <p className="text-sm sm:text-base max-w-lg text-stone-400">
          Production-ready projects showcasing full-stack capabilities.
        </p>
      </div>

      {/* Projects grid - 2 columns for impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioProjects.map((project, index) => (
          <div
            key={project.id}
            className={`animate-on-scroll animate-delay-${index + 1}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
