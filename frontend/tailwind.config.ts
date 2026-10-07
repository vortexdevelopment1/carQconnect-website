import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        // Global Tokens for public site
        silver: {
          1: "var(--silver-1)",
          2: "var(--silver-2)",
          3: "var(--silver-3)",
        },
        ink: {
          DEFAULT: "var(--ink)",
        },
        graphite: {
          DEFAULT: "var(--graphite)",
          2: "var(--graphite-2)",
          line: "var(--graphite-line)",
        },
        steel: {
          DEFAULT: "var(--steel)",
          light: "var(--steel-light)",
        },
        orange: {
          DEFAULT: "var(--orange)",
          text: "var(--orange-text)",
        },
        // Brand
        navy: {
          DEFAULT: "#0B1F3A",
          light: "#12294D",
        },
        blue: {
          DEFAULT: "#1789FF",
          dark: "#0047C9",
          light: "#EAF2FF",
        },
        cyan: {
          DEFAULT: "#09C2FF",
          light: "#E6F9FF",
        },
        // Neutrals
        background: "#F7F9FC",
        surface: "#FFFFFF",
        "surface-2": "#F1F4F9",
        border: "#E4E7EC",
        secondary: "#475467",
        tertiary: "#667985",
        disabled: "#98A2B3",
        // Semantic
        danger: {
          DEFAULT: "#E31B23",
          dark: "#B4231B",
          light: "#FEF3F2",
        },
        success: {
          DEFAULT: "#12B76A",
          dark: "#039855",
          light: "#ECFDF3",
        },
        warning: {
          DEFAULT: "#F79009",
          dark: "#B54708",
          light: "#FFFAEB",
        },
        info: {
          DEFAULT: "#1789FF",
          light: "#E6F9FF",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Marketing hero sizes (bigger than the in-app Display style, used
        // only for the public-site Hero/PageHeader banners)
        "hero-mobile": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "hero-desktop": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "section-mobile": ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "section-desktop": ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.015em" }],

        // Exact "Manrope Type Scale" from the carQconnect design system
        // (size / weight / line-height), for in-app-style UI text.
        display: ["2.25rem", { lineHeight: "2.75rem", fontWeight: "700" }], // 36/44/700
        h1: ["1.875rem", { lineHeight: "2.375rem", fontWeight: "700" }], // 30/38/700
        h2: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }], // 24/32/700
        h3: ["1.25rem", { lineHeight: "1.75rem", fontWeight: "700" }], // 20/28/700
        h4: ["1rem", { lineHeight: "1.625rem", fontWeight: "600" }], // 16/26/600
        "body-lg": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }], // 16/24/400
        "body-md": ["0.875rem", { lineHeight: "1.375rem", fontWeight: "400" }], // 14/22/400
        "body-sm": ["0.8125rem", { lineHeight: "1.25rem", fontWeight: "400" }], // 13/20/400
        label: ["0.75rem", { lineHeight: "1.125rem", fontWeight: "600" }], // 12/18/600
        caption: ["0.6875rem", { lineHeight: "1rem", fontWeight: "500" }], // 11/16/500
        "btn-text": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "600" }], // 14/20/600
        kpi: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }], // 24/32/700
      },
      spacing: {
        18: "4.5rem",
      },
      borderRadius: {
        card: "16px",
        "card-lg": "24px",
        "vehicle-card": "20px",
        "bottom-sheet": "28px",
        btn: "10px",
        input: "12px",
        pill: "999px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0B1F3A 85%), repeating-linear-gradient(0deg, rgba(23,137,255,0.08) 0px, rgba(23,137,255,0.08) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(23,137,255,0.08) 0px, rgba(23,137,255,0.08) 1px, transparent 1px, transparent 48px)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
        elevated: "0 4px 12px rgba(16, 24, 40, 0.06), 0 2px 4px rgba(16, 24, 40, 0.05)",
        glow: "0 0 0 4px rgba(255, 90, 0, 0.15)",
        panel: "0 20px 50px -20px rgba(11, 31, 58, 0.35)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "dash-draw": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        "blink-fast": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        "flow": {
          "0%": { strokeDashoffset: "17px" },
          "100%": { strokeDashoffset: "0px" },
        },
        "ping-out": {
          "0%": { transform: "scale(0.6)", opacity: "0.8" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 5s ease-in-out infinite",
        "dash-draw": "dash-draw 2.4s ease forwards",
        "blink-fast": "blink-fast 1.4s infinite",
        "flow": "flow 1.6s linear infinite",
        "ping-out": "ping-out 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
