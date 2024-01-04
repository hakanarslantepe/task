/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      orange: "#FF7B5D",
      lightOrange: "#FFF5EB",
      white: "#FFFFFF",
      black: "#505254",
      lightBlue: "#EAEBE4",
      blue: "#6FB2B8",
      success: "#85AC17",
      progress: "#93C2C4",
      error: "#FF7B5D",
    },
  },
  plugins: [],
};
