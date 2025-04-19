import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ---- hier hinzufügen ----
      fontFamily: {
        // Nutzt deine CSS‑Variable --font-body (Roboto) als erstes
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        headings: ["var(--font-headings)", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        scroll:
            "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lakers: "#010d1e",
        navgray: "#000d1e",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
