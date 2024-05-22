import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lora": ["lora", "sans-serif"],
        "single": ["Single Day", "sans-serif"]
      },
      colors: {
        "mygray": "#EBEBD3",
        "mydark": "#3C3C3B",
        "myblue": "#48A9A6",
        "mygray2": "#E4DFDA",
        "mywhite": "#FEEAFA",
        "primary": "#A18565",
        "secondary": "#EDECE9",
        "tertiary": "#FFFFFF",
        "primary2": "#EDCD9C"


      }
    },
  },
  plugins: [],
};
export default config;
