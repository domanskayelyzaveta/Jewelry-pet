import { button } from "framer-motion/client";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundGreen: "#98B7A4",
        buttonColor: "#CFE1E7",
        beigeBg: "#F0C1A6",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
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
