"use client";

// Skills Section - Performance Optimized with CSS Animations
// PERF: Uses CSS transitions instead of Framer Motion for scroll animations
// Intersection Observer adds 'in-view' class to trigger animations

import { techCardsItems } from "@/app/lib/constants";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Define category order
const categories = ["Frontend", "Backend & Database", "Tools"];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  // Lightweight intersection observer to trigger CSS animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add in-view class to all animate-on-scroll elements
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

  // Group tech items by category
  const groupedTech = categories.map((category) => ({
    name: category,
    items: techCardsItems.filter((item) => item.category === category),
  }));

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mt-12 md:mt-16 content-auto"
      id="about"
    >
      {/* Section header with slide-in animation */}
      <h2 className="animate-on-scroll text-2xl min-[430px]:text-3xl md:text-4xl font-bold text-stone-200">
        Current Technologies
      </h2>
      <p className="animate-on-scroll animate-delay-1 mt-3 sm:mt-4 text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-stone-400">
        I&apos;m constantly learning and building with modern technologies.
        These are the tools I&apos;ve been working with recently.
      </p>

      {/* Category cards grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {groupedTech.map((group, groupIndex) => (
          <div
            key={group.name}
            className={`animate-on-scroll animate-delay-${
              groupIndex + 2
            } rounded-xl border border-neutral-800 bg-neutral-900/70 px-4 py-4 md:px-5 md:py-5 flex flex-col gap-4`}
          >
            {/* Category title */}
            <h3 className="text-sm font-semibold text-neutral-200">
              {group.name}
            </h3>

            {/* Tech list with CSS hover effects */}
            <div className="flex flex-col gap-3">
              {group.items.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 group">
                  {/* Icon with glow effect on hover */}
                  <div
                    className={`${tech.bgColor} p-1.5 rounded-lg transition-shadow duration-300 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]`}
                  >
                    <Image
                      src={tech.imageUrl}
                      alt={tech.name}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert"
                    />
                  </div>

                  {/* Tech name */}
                  <span className="text-sm md:text-base font-medium text-neutral-50 transition-colors duration-300 group-hover:text-primary">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
