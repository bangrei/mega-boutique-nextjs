import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fc6d46",
        secondary: {
          DEFAULT: "#363434",
          light: "#3d3d3d",
          "super-light": "#808080",
        },
        badge: "#9ec152",
      },
      boxShadow: {
        center: "0 0 15px #93c5fd",
        "center-dark": "0 0 15px #3d3d3d",
        "dark-top": "0 -2 15px #ccc",
        modal: "0 0 15px #ccc",
      },
    },
  },
  plugins: [],
} satisfies Config;
