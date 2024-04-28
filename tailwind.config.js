/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/Components/About/*.{js,ts,jsx,tsx}",
    "./src/Components/Nav/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray': "#b4b4b4",
    },
    extend: {},
  },
  plugins: [],
};
