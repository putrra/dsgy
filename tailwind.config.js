/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkpurple: '#2E0249',
        hoblue: '#1DA1F2',
        lightblue: '#87CEEB',
        blue: '#0000FF',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontSize: {
        '80xl': ['80rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};