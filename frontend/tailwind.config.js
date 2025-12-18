/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        dark: "#0f172a", // This is very dark, almost black
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
