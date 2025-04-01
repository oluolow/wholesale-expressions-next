import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        gold: {
          light: "#f5d485",
          DEFAULT: "#d4af37",
          dark: "#9e7c1e",
        },
        black: {
          light: "#333333",
          DEFAULT: "#121212",
          dark: "#000000",
        },
        // Supporting colors
        beige: {
          light: "#f5f0e5",
          DEFAULT: "#e8d9c0",
          dark: "#c9b393",
        },
        cocoa: {
          light: "#8c6e5c",
          DEFAULT: "#6b4c3e",
          dark: "#4a3328",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        'hero': 'calc(100vh - 80px)',
      },
    },
  },
  plugins: [],
};
export default config;
