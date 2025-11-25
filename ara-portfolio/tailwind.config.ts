import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./docs/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fef8ff",
        foreground: "#1f1235",
        primary: {
          50: "#fff0fb",
          100: "#ffd6f0",
          200: "#ffb0e1",
          300: "#ff8ad3",
          400: "#ff64c4",
          500: "#f73daa",
          600: "#d2248d",
          700: "#a3176b",
          800: "#750f4b",
          900: "#47062b",
          DEFAULT: "#f73daa",
        },
        lavender: {
          50: "#f8f2ff",
          100: "#e8d8ff",
          200: "#d0b0ff",
          300: "#b888ff",
          400: "#a16eff",
          500: "#8653e6",
          600: "#6a3fc2",
          700: "#4f2e95",
          800: "#351f68",
          900: "#1c123a",
          DEFAULT: "#a16eff",
        },
        blush: "#ffe2f1",
        midnight: "#1f1235",
        slate: "#5c5573",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...fontFamily.sans],
        display: ["var(--font-playfair)", ...fontFamily.serif],
      },
      boxShadow: {
        card: "0 15px 55px rgba(161, 110, 255, 0.15)",
        soft: "0 8px 30px rgba(247, 61, 170, 0.18)",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      backgroundImage: {
        "soft-grid":
          "radial-gradient(circle at 1px 1px, rgba(161,110,255,0.25) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;

