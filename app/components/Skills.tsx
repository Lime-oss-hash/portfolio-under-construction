"use client";

// Skills Section - Displays technology cards with animations
// Features:
// - Animated heading and description
// - Responsive grid of TechCard components
// - Framer Motion entrance animations

import { techCardsItems } from "@/app/lib/constants";
import TechCard from "./ui/TechCard";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="relative z-10 py-16 sm:py-24" id="about">
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
          Current Technologies
        </motion.h2>

        {/* Description - slides in from left with slight delay */}
        <motion.p
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-stone-400"
        >
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </motion.p>
      </div>

      {/* Tech cards grid - fades in from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {techCardsItems.map((cardItem) => (
          <TechCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </motion.div>
    </section>
  );
}
