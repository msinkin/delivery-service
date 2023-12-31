/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'blue-300': '#819EC6',
      'blue-500': '#5278F7',
      'blue-900': '#273C99',
      'transparent': 'transparent'
    },
    extend: {
      fontFamily: {
        "mona": ["Mona Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
        "noto": ["Noto Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"]
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
