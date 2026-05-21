import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07070E",
        surface: "#0F0F1A",
        surface2: "#16162A",
        accent: "#6C63FF",
        "accent-dim": "rgba(108,99,255,0.15)",
        border: "rgba(255,255,255,0.07)",
        text: "#F0EDE8",
        muted: "#6B7280",
        success: "#2EE6A6",
        danger: "#FF5A7A",
      },
      fontFamily: {
        body: ["var(--font-body)", "Outfit", "sans-serif"],
        display: ["var(--font-display)", "DM Serif Display", "serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 32px rgba(108, 99, 255, 0.28), 0 8px 24px rgba(0, 0, 0, 0.5)",
        card: "0 20px 40px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
