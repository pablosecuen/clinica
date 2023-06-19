/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        menu: "url('/src/assets/2x/landing.png')",
      },
      colors: {
        primary: "#5f8cd8",
        secondary: "#87edab",
      },
      fontFamily: {
        quicksand: ["quicksand", "sans-serif"],
        spartan: ["spartan", "serif"],
      },
      filter: {
        "drop-shadow":
          "custom-shadow(0 10px 7px rgba(0, 0, 0, 1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06))",
        "custom-shadow2": "drop-shadow(0 4px 6px rgba(0,0,0,1))",
        "custom-shadow3": "drop-shadow(0 7px 10px rgba(0,0,0,1))",
        "custom-shadow4": "drop-shadow(0 10px 10px rgba(0,0,0,1))",
        "custom-shadow5": "drop-shadow(0 20px 10px rgba(0,0,0,1))",
      },
    },
  },
  plugins: [],
};
