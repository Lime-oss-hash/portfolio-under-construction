"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        syncTouch: true, // "smoothTouch" in older versions - enables smooth scrolling on touch devices
        touchMultiplier: 1, // Reduced from 2 to 1 to fix over-sensitivity on mobile
      }}
    >
      {children}
    </ReactLenis>
  );
}
