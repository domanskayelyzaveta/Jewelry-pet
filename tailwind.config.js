/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { backgroundGreen: "#98B7A4" },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      mobile: "375px",
      desktop: "1440px",
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
