import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      height: {
        "89": "89vh",
        "83": "83vw",
        "34": "34Vw",
        "27": "27vw",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      safelist: [
        'high-contrast',
        'large-text',
      ],
    },
  },
  plugins: [],
};
export default config;
