"use client";

// Skills Section - Compact category cards with glowing icons
// Clean layout: 3 cards (Frontend, Backend & Database, Tools) with icon + name rows

import { techCardsItems } from "@/app/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

// Define category order
const categories = ["Frontend", "Backend & Database", "Tools"];

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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {groupedTech.map((group) => (
          <div
            key={group.name}
            className="rounded-xl border border-neutral-800 bg-neutral-900/70 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-4"
          >
            {/* Category title */}
            <h3 className="text-sm font-semibold text-neutral-200">
              {group.name}
            </h3>
            {/* Tech list with icons */}
            <div className="flex flex-col gap-3">
              {group.items.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3">
                  <div className={`${tech.bgColor} p-1.5 rounded-lg`}>
                    <Image
                      src={tech.imageUrl}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 invert brightness-0 invert"
                    />
                  </div>
                  <span className="text-sm md:text-base font-medium text-neutral-50">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
