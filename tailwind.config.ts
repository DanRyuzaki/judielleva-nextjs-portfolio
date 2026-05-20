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
        plum: {
          950: "#0d0518",
          900: "#1a0a2e",
          800: "#2d1b4e",
          700: "#3f2868",
          600: "#54387f",
          500: "#6b4a9b",
        },
        lavender: {
          100: "#f0ebfa",
          200: "#ddd0f5",
          300: "#c5aeed",
          400: "#a886e0",
          500: "#8b5fcf",
        },
        tulip: {
          pink: "#c8748a",
          mauve: "#9b5a7a",
          rose: "#e89ab5",
          bud: "#d4a0bc",
        },
        cream: "#f5f0e8",
        gold: "#d4af7a",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-med": "floatMed 6s ease-in-out infinite",
        "petal-drift": "petalDrift 12s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
        floatMed: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(-2deg)" },
        },
        petalDrift: {
          "0%": { transform: "translateY(-10px) translateX(0px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.4" },
          "100%": { transform: "translateY(100vh) translateX(60px) rotate(360deg)", opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
