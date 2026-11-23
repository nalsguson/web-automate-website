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
        navy: {
          950: "#050505",
          900: "#070b1a",
          850: "#0a1128",
          800: "#0d1533",
          700: "#16224d",
        },
        brand: {
          blue: "#2e6bff",
          teal: "#14b8a6",
          green: "#22c55e",
          cyan: "#22d3ee",
        },
      },
    },
  },
  plugins: [],
};
export default config;
