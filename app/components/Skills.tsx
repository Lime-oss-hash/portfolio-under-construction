"use client";

// Skills Section - Compact category cards with staggered glow animations
// Features: Category cards with icon + name rows that "light up" on scroll

import { techCardsItems } from "@/app/lib/constants";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Define category order
const categories = ["Frontend", "Backend & Database", "Tools"];

// Animation variants for the container (category card)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Animation variants for each tech row
// PERF FIX: Removed filter: brightness() - not GPU-accelerated, causes repaints
// Using opacity alone achieves similar visual effect with hardware acceleration
const techRowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

// Animation for the icon container - glow pulse
const iconVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

// Animation for the text
const textVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Skills() {
  // Group tech items by category
  const groupedTech = categories.map((category) => ({
    name: category,
    items: techCardsItems.filter((item) => item.category === category),
  }));

  return (
    <section className="relative z-10 mt-12 md:mt-16" id="about">
      {/* Section header */}
      <motion.h2
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-2xl min-[430px]:text-3xl md:text-4xl font-bold text-stone-200"
      >
        Current Technologies
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -90 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-3 sm:mt-4 text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-stone-400"
      >
        I&apos;m constantly learning and building with modern technologies.
        These are the tools I&apos;ve been working with recently.
      </motion.p>

      {/* Category cards grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {groupedTech.map((group, groupIndex) => (
          <motion.div
            key={group.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: groupIndex * 0.15 }}
            className="rounded-xl border border-neutral-800 bg-neutral-900/70 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-4"
          >
            {/* Category title - fades in with card */}
            <motion.h3
              variants={textVariants}
              className="text-sm font-semibold text-neutral-200"
            >
              {group.name}
            </motion.h3>

            {/* Tech list with staggered animations */}
            <div className="flex flex-col gap-3">
              {group.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={techRowVariants}
                  className="flex items-center gap-3 group"
                >
                  {/* Icon with glow effect */}
                  <motion.div
                    variants={iconVariants}
                    className={`${tech.bgColor} p-1.5 rounded-lg transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]`}
                  >
                    <Image
                      src={tech.imageUrl}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 invert brightness-0 invert"
                    />
                  </motion.div>

                  {/* Tech name */}
                  <motion.span
                    variants={textVariants}
                    className="text-sm md:text-base font-medium text-neutral-50 transition-colors duration-300 group-hover:text-primary"
                  >
                    {tech.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
