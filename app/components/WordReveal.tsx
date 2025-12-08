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
  filter?: boolean;
  duration?: number;
}

export default function WordReveal({
  words,
  className = "",
  filter = true,
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

  // Individual word animation - optimized for GPU (no rotateX/perspective)
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
      filter: filter ? "blur(8px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
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
            style={{
              willChange: "transform, opacity, filter",
              textShadow: isHighlighted
                ? "0 0 20px rgba(59, 130, 246, 0.25)"
                : undefined,
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
