"use client";

// Features:
// - Location badge at top ("Based in New Zealand")
// - Large animated heading with highlighted text
// - Subtitle description
// - CTA buttons (See My Work + Download CV)
// - Framer Motion entrance animations
// - Grid background pattern
// - Fully mobile responsive

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 px-4"
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 w-full h-full bg-grid grid-mask" />
      </div>

      {/* Location Badge - Small accent above main heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center gap-2 text-xs sm:text-sm text-stone-400 mb-3"
      >
        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-stone-500" />
        <span>Based in New Zealand</span>
        <span className="text-stone-600">•</span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span className="text-emerald-400">Open for Work</span>
      </motion.div>

      {/* Main Heading - Responsive typography */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-3xl leading-tight px-2"
      >
        {/* First line with gradient highlight */}
        <span className="text-stone-200">Building Modern </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
          &amp;
        </span>
        <br />
        {/* Second line */}
        <span className="text-stone-200">Scalable Web Solutions</span>
      </motion.h1>

      {/* Value Statement - Short one-liner */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-400 text-center px-2"
      >
        <span className="text-primary font-medium">Sam Bai</span> · Graduate
        Full-Stack Developer · Crafting clean, user-friendly experiences
      </motion.p>

      {/* CTA Buttons - Stack on mobile, side by side on larger screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-3"
      >
        {/* See My Work button - outlined style */}
        <a
          href="#projects"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-dark-200 border border-dark-700 text-stone-200 text-sm font-medium hover:border-primary/50 hover:bg-dark-300 transition-all duration-300"
        >
          See My Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>

        {/* Download CV - text link style with icon */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-stone-300 hover:text-primary transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          <span className="font-medium text-sm sm:text-base">Download CV</span>
        </a>
      </motion.div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-dark-700 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
