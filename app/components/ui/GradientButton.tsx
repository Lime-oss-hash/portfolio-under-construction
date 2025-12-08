"use client";

// GradientButton - Button with animated gradient border effect
// Creates a moving gradient that loops infinitely for a premium look
// OPTIMIZED: Uses CSS animation-play-state for hover-only animation

import { cn } from "@/app/lib/utils";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GradientButton({
  children,
  className,
  onClick,
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Positioning for the gradient overlay
        "group relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]",
        // Focus states for accessibility
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-100",
        className
      )}
    >
      {/* Animated gradient border - PAUSED by default, plays on hover */}
      <span
        className={cn(
          "absolute inset-[-1000%]",
          // Rotating conic gradient - animation paused by default
          "bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#1A1A1A_50%,#3B82F6_100%)]",
          "animate-shimmer [animation-play-state:paused] group-hover:[animation-play-state:running]"
        )}
      />

      {/* Inner content area */}
      <span
        // PERF FIX: Removed backdrop-blur-3xl - expensive and unnecessary on opaque bg
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center",
          "rounded-lg bg-dark-200 px-6 py-2",
          "text-sm font-medium text-stone-200",
          "hover:bg-dark-300 transition-colors"
        )}
      >
        {children}
      </span>
    </button>
  );
}
