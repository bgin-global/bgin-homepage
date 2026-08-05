/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{js,ts,tsx}",
    "./lib/**/*.{js,ts,tsx}",
    "./styles/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Keep legacy class names used across the codebase
        Inter: [
          "var(--font-sans)",
          "var(--font-jp)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        FamiljenGrotesk: [
          "var(--font-display)",
          "var(--font-sans)",
          "var(--font-jp)",
          "system-ui",
          "sans-serif",
        ],
        sans: [
          "var(--font-sans)",
          "var(--font-jp)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "var(--font-jp)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
