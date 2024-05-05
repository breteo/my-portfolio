/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/Components/Home/*.{js,ts,jsx,tsx}",
    "./src/Components/About/*.{js,ts,jsx,tsx}",
    "./src/Components/Nav/*.{js,ts,jsx,tsx}",
    "./src/Components/Projects/*.{js,ts,jsx,tsx}",
    "./src/Components/Contact/*.{js,ts,jsx,tsx}",
    "./src/Components/Footer/*.{js,ts,jsx,tsx}",
    "./src/Components/Card/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 5s ease",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
