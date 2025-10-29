import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0A1929",
        titanium: "#4A5568",
        bone: "#FAFAFA",
        crimson: "#DC143C", // Brighter crimson with better contrast on navy
        gold: "#D4AF37", // Brighter gold for Family Law
        steel: "#5D7FA3", // Softer steel blue for Criminal Defense
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-crimson)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
