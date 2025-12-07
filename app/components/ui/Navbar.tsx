"use client";

// Navbar - Floating pill navigation
// Features:
// - Floating centered pill design
// - Hides when scrolling down, shows when scrolling up
// - Smooth framer-motion animations
// - Shows icons on mobile, text on desktop
// - Responsive padding and spacing

import { cn } from "@/app/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { JSX, useState } from "react";

// TypeScript interface for navigation items
interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface NavbarProps {
  navItems: NavItem[];
  className?: string;
}

export const Navbar = ({ navItems, className }: NavbarProps) => {
  // Hook to track scroll position (0 to 1, where 1 = bottom of page)
  const { scrollYProgress } = useScroll();

  // State to control navbar visibility
  const [visible, setVisible] = useState(true);

  // Listen to scroll changes and show/hide navbar
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Safety check: ensure we have a valid number
    if (typeof current === "number") {
      // Calculate scroll direction by comparing current vs previous position
      const direction = current - scrollYProgress.getPrevious()!;

      // RULE 1: Always show navbar when near the top of page (< 5% scrolled)
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        // RULE 2: Show when scrolling UP (direction < 0), hide when scrolling DOWN
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    // AnimatePresence enables exit animations when component unmounts
    <AnimatePresence mode="wait">
      <motion.nav
        // Initial state: navbar starts above viewport (hidden)
        initial={{
          opacity: 1,
          y: -100,
        }}
        // Animate to: slide down when visible, slide up when hidden
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        // Smooth 200ms transition
        transition={{
          duration: 0.2,
        }}
        // Styling classes for the floating pill navbar
        className={cn(
          // Layout: centered, auto-width based on content
          "flex max-w-fit fixed top-4 sm:top-10 inset-x-0 mx-auto",
          // Appearance: dark background with subtle border
          "border border-dark-700 rounded-full sm:rounded-lg bg-dark-200/95 backdrop-blur-sm",
          // Shadow for depth effect
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          // High z-index to stay above all content
          "z-[5000]",
          // Responsive padding and spacing
          "px-4 sm:px-8 py-3 sm:py-4 items-center justify-center gap-3 sm:gap-4",
          className
        )}
      >
        {/* Render each navigation item */}
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              // Base styling: light text with flex layout
              "relative text-neutral-50 items-center flex",
              // Hover effect: changes to primary color
              "hover:text-primary transition-colors duration-200",
              // Focus state for accessibility
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            )}
            aria-label={navItem.name}
          >
            {/* Mobile: show only icon */}
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* Desktop: show text label */}
            <span className="hidden sm:block text-sm font-medium">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};

// Also export as default for flexibility
export default Navbar;
