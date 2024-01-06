/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        happyMonkey: ["Happy Monkey", "system-ui"],
      },
    },
  },
  plugins: [],
};
