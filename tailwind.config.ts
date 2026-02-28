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
        bg: "var(--color-bg)",
        "bg-alt": "var(--color-bg-alt)",
        "bg-tint": "var(--color-bg-tint)",
        "blue-light": "var(--color-blue-light)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
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
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
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
