"use client";

// Projects Section - Displays portfolio projects with animations
// Features:
// - Animated heading
// - Responsive grid of ProjectCard components
// - Framer Motion entrance animations

import { portfolioProjects } from "@/app/lib/constants";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative z-10 py-16 sm:py-24" id="projects">
      {/* Section header with animations */}
      <div className="space-y-4 mb-10">
        {/* Main heading - slides in from left */}
        <motion.h2
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-stone-200"
        >
          My Portfolio
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-stone-400"
        >
          Here are some of my recent projects. Each one was built to solve real
          problems and showcase different skills.
        </motion.p>
      </div>

      {/* Projects grid - fades in from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
