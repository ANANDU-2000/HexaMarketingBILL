import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        "navy-2": "var(--color-navy-2)",
        "navy-3": "var(--color-navy-3)",
        cyan: "var(--color-cyan)",
        "cyan-dark": "var(--color-cyan-dark)",
        gold: "var(--color-gold)",
        "gold-dark": "var(--color-gold-dark)",
        green: "var(--color-green)",
        red: "var(--color-red)",
        orange: "var(--color-orange)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "Syne", "sans-serif"],
        dm: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      boxShadow: {
        cyan: "var(--shadow-cyan)",
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
      },
    },
  },
  plugins: [],
};
export default config;
