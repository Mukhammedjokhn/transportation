/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        capri: "#2eb9ff",
        royalblue: "#081225",
        azure: "#4a6dff",
        oceangradient: "linear-gradient(135deg, #2eb9ff, #4a6dff)",
      },
    },
  },
  plugins: [],
};
