import { button } from "framer-motion/client";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundGreen: "#98B7A4",
        buttonColor: "#CFE1E7",
        buttonWhite: "#F9F6F0",
        beigeBg: "#F0C1A6",
        additionalTextColor: "#373938",
        aboutUsBg: "#E5DFD3",
        blueBg: "#CFE1E6",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
    },
    screens: {
      mobile: "375px",
      desktop: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px", // "mobile"
        lg: "60px", // "desktop"
      },
    },
  },
  plugins: [],
};
