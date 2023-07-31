/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      black: "#000000",
      white: "#fff",
      grayLight: "#f0f0f0",
      gray: "#5c5c5c",
      blue: "#4504f3",
      transparent: "trasparent",
    },
  },

  plugins: [],
};
