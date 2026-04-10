/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "neon-purple": "#a855f7",
        "neon-purple-glow": "#c084fc",
        "lavender": "#c4b5fd",
        "cyan-accent": "#22d3ee",
        "dark-bg": "#0b0118",
        "dark-surface": "#140726",
      },
    },
  },
  plugins: [],
}