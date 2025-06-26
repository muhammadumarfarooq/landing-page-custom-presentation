import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F9FAFB",
          dark: "#0D1117",
        },
        foreground: {
          light: "#111827",
          dark: "#F9FAFB",
        },
        card: {
          light: "#FFFFFF",
          dark: "#161B22",
        },
        border: {
          light: "#E5E7EB",
          dark: "#30363D",
        },
        accent: {
          DEFAULT: "#2563EB", // Blue-600 (Main accent)
          hover: "#1D4ED8", // Blue-700
        },
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
