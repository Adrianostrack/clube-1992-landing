import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["high-contrast", "large-text"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#0d0c0a",
        coal: "#171512",
        bone: "#f2ede4",
        gold: {
          DEFAULT: "#b39556",
          deep: "#9b834c",
          dark: "#6a4d29",
        },
      },
      textColor: {
        "1992": "#9b834c",
        "silver-100": "#808080",
        "1992-dark": "#6a4d29",
      },
      borderColor: {
        "1992": "#9b834c",
        "silver-100": "#ffffff21",
      },
      backgroundColor: {
        "1992": "#9b834c",
      },
    },
  },
  plugins: [],
};
export default config;
