"use client";

// WordReveal Component - Performance Optimized
// Features:
// - Word-by-word reveal with smooth entrance
// - Scale up + vertical slide + blur (no 3D rotation for performance)
// - Spring physics for premium feel
// - GPU-accelerated transforms

import { motion, Variants } from "framer-motion";

interface WordRevealProps {
  words: string;
  className?: string;
  duration?: number;
}

export default function WordReveal({
  words,
  className = "",
  duration = 0.6,
}: WordRevealProps) {
  // Split the input text into individual words
  const wordArray = words.split(" ");

  // Container animation - staggers children
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Individual word animation - optimized for GPU (no filter animations)
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {wordArray.map((word, index) => {
        // Highlight words at index 1-4 with primary/accent color
        const isHighlighted = index >= 1 && index <= 4;

        return (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className={`inline-block mr-[0.25em] ${
              isHighlighted
                ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400"
                : "text-stone-100"
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
