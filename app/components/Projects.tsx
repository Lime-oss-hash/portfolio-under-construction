"use client";

// Projects Section - Enhanced portfolio display with recruiter-friendly features
// Features:
// - Animated heading and description
// - Responsive grid (1 col mobile, 2 cols desktop with featured spanning full width)

import { portfolioProjects } from "@/app/lib/constants";
import ProjectCard from "./ui/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="relative z-10 py-16 sm:py-24" id="projects">
      {/* Section header with animations */}
      <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
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

        {/* Description - professional tone */}
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-2xl text-stone-400 leading-relaxed"
        >
          Production-ready projects showcasing full-stack capabilities—from
          intuitive UIs to robust backend architectures.
        </motion.p>
      </div>

      {/* Projects grid - responsive with featured project spanning full width */}
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
