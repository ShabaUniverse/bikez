/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        96: "29rem",
        80: "24rem",
      },
      width: {
        96: "29rem",
      }
    },
  },
  plugins: [],
  
};
