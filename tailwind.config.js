/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'form-bg': "url(/suncloud.avif)",
        'dark-form-bg': "url(/mooncloud.avif)"
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

