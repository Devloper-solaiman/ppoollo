import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily:{
      // Pencerio:["var(--Pencerio-Hairline)"],
      // Rosaline:["var(--Rosaline-Regular)"],
      GreatVibes:["var(--GreatVibes-Regular)"],
      // Poppins:["var(--Poppins-Thin)"],
      // Lato:["var(--Lato-Thin)"],
    },
    colors: {
      primary: "#1182c5",
      secondary: "#2aa6df",
      dark: "#1e1e1e",
      light: "#f5f5f5",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
    animation: {
      "spin-slow": "spin 40s linear infinite",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  plugins: [],
} satisfies Config;
