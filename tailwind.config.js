/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bright: "#ff8000",
        newGrey: "#f7f7fc"
      }
    },
  },
  plugins: [],
}