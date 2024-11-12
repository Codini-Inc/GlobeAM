import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#bd9a5f",
        primaryBlack: "#222222",
        secondaryGreen: "#007e79",
        secondaryGreenish: "#9ed3c9",
        secondaryBlue: "#3070b7",
        secondaryGray: "#e3e3e3",
        lightbackground: "#ECE6DB",
      },
      fontFamily: {
        sans: ["var(--font-inter)"], // Default font
        heading: ["var(--font-montserrat)"], // For headings
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
