/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1540px",
      },
      colors: {
        primary: "#0700EC",
        alternative: "#24d4C4",
        secondary: "#FFFFFF",
        accent: "#030832",
        highlight: "#EE5B0B",
      },
    },
  },
  plugins: [],
};

