/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#84cc16",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "#1a2e05",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}