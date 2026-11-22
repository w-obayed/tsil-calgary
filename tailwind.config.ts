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
        forest: {
          DEFAULT: "#173D2B",
          primary: "#173D2B",
          deep: "#10251C",
          dark: "#0C1B12",
          surface: "#132D20",
          card: "#152F22",
        },
        accent: {
          DEFAULT: "#82A83D",
          light: "#97C246",
          dark: "#6B8B32",
        },
        ivory: {
          DEFAULT: "#F7F7F0",
          warm: "#F7F7F0",
          soft: "#FDFDFB",
        },
        sage: {
          DEFAULT: "#EDF2E8",
          light: "#F4F7F1",
          border: "#DDE5D8",
        },
        text: {
          heading: "#14251B",
          body: "#59635C",
          muted: "#7E8A82",
          light: "#F7F7F0",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        editorial: ["var(--font-playfair)", "serif"],
      },
      maxWidth: {
        container: "1440px",
        content: "1280px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
