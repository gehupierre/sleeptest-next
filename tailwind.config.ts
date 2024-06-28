import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ion-bluelite": "#E5F2FF",
        "ion-bluesky": "#5fa6e0",
        "ion-blue": "#2478BA",
        "ion-orange": "#FF7F00",
        "ion-green": "#690",
        "ion-mint-lite": "#f8faf2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
