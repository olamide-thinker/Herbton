// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poor-richard": ["PoorRichard", "serif"],
        "porter-sans-inline": ["PorterSansBlock", "serif"],
      },
      textShadow: {
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        sm: "1px 1px 2px rgba(0, 0, 0, 0.05)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.15)",
        lg: "5px 5px 10px rgba(0, 0, 0, 0.2)",
        xl: "10px 10px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
    function ({ addUtilities, theme, e }) {
      const textShadows = theme("textShadow");
      const textShadowUtilities = Object.keys(textShadows).reduce(
        (acc, key) => {
          acc[`.${e(`text-shadow-${key}`)}`] = {
            textShadow: textShadows[key],
          };
          return acc;
        },
        {}
      );

      addUtilities(textShadowUtilities, ["responsive", "hover"]);
    },
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};

export default config;
