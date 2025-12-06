"use client";

// Features:
// - Location badge at top ("Based in New Zealand")
// - Large animated heading with highlighted text
// - Subtitle description
// - Shimmer CTA button (Download CV)
// - Framer Motion entrance animations

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import GradientButton from "./ui/GradientButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center py-20"
    >
      {/* Location Badge - Animated fade in from bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-3 px-4 py-2 rounded-full bg-dark-200 border border-dark-700 mb-8"
      >
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-stone-100">Based In New Zealand</span>
        </div>
        <span className="text-stone-600">|</span>
        <div className="flex items-center gap-2">
          {/* Pulsing green dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-emerald-400">
            Open for Work
          </span>
        </div>
      </motion.div>

      {/* Main Heading - Large animated title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl min-[430px]:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl leading-tight"
      >
        {/* First line with gradient highlight */}
        <span className="text-stone-200">Building Modern </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
          &
        </span>
        <br />
        {/* Second line */}
        <span className="text-stone-200">Scalable Web Solutions</span>
      </motion.h1>

      {/* Description Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 text-base md:text-lg text-stone-400 text-center max-w-2xl px-4"
      >
        Hi, I&apos;m <span className="text-primary font-medium">Sam Bai</span>,
        a graduate developer passionate about building clean, user-friendly web
        applications.
      </motion.p>

      {/* CTA Button - Shimmer effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10"
      >
        <GradientButton>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Download CV
          </a>
        </GradientButton>
      </motion.div>

      {/* Optional: Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
