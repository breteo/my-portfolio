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
    "./src/Components/ProjectCard/*.{js,ts,jsx,tsx}",
    "./src/Components/Slideshow/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 5s ease",
        fadeInProject: "fadeInProject 3s ease"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInProject: {
          "0%": { opacity: 0,transform: 'scale(0.8)'},
          "100%": { opacity: 1, transform: 'scale(1)'},
        },
      },
      screens: {
        'xs': {'raw': '(min-width: 344px)'},
        'sm-height': {'raw': '(min-height: 640px)'},
        'md-height': {'raw': '(min-height: 768px)'},
        'lg-height': {'raw': '(min-height: 1024px)'},
        'xl-height': {'raw': '(min-height: 1280px)'},
      },
    },
  },
  plugins: [],
};
