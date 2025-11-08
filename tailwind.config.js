/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      'xs': '480px',   // Fold outer, small phones
      'sm': '640px',   // Regular phones
      'md': '768px',   // Large phones / small tablets
      'lg': '1024px', // Tablets
      'xl': '1280px', // Laptops
      'xxl': '1440px', // Large desktops / ultrawide
    },
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        secondary: "#c026d3",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "text-gradient": "text-gradient 1.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "text-gradient": {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  darkMode: "class",
};
