import type { Config } from "tailwindcss";

// 1. Custom dark mode colors (dark-100 through dark-700)
// 2. Shimmer animation for buttons
// 3. Grid/dot background utilities
// 4. CSS variables for all colors

// Required for grid/dot background utilities
const svgToDataUri = require("mini-svg-data-uri");

// Tailwind's color utilities
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  // Tell Tailwind where to look for class names
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Enable class-based dark mode (works with next-themes)
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // Tailwind blue-500 equivalent
        },
        dark: {
          100: "#0a0a0a", // Deepest black - main background
          200: "#1A1A1A", // Card backgrounds, navbar
          300: "#262626", // Hover states
          400: "#404040", // Subtle borders
          700: "#4D4D4D", // Visible borders
        },
      },

      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          // Start position - gradient at 0%
          from: {
            backgroundPosition: "0 0",
          },
          // End position - gradient moves left (creates loop illusion)
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },

  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          // Large grid background pattern
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          // Small grid background pattern
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          // Dot pattern background
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        // Use all background colors for these utilities
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));

  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Add all variables to :root for global access
  addBase({
    ":root": newVars,
  });
}

export default config;
