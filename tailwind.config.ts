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
        deep: "#0e0b13",
        soft: "#1a1420",
        gold: "#d9a23a",
        "gold-soft": "#ffd78a",
        cream: "#fff2df"
      },
      fontFamily: {
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
