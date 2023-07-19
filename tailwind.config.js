/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '96': '29rem', 
      },
      width: {
        '96': '29rem'
      }

    },
  },
  plugins: [],
}

