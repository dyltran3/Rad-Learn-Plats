/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#8c2bee", // Screen 1
        "primary-pink": "#ee2b8c", // Screen 4
        "background-light": "#f7f6f8",
        "background-dark": "#191022",
        "mint": "#e0f2f1",
        "soft-pink": "#fce4ec",
        "accent-cyan": "#00f5ff",
        "accent-gold": "#ffd700",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
