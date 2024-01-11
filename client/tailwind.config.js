/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html", 
    "./src/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        lg: "6rem",
      }
    }
  },
  plugins: [],
}

