import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        deep: "#07111f",
        soft: "#0d1b2e",
        gold: "#d6a84f",
        "gold-soft": "#f2d18b",
        cream: "#f7efe2"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(214, 168, 79, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
