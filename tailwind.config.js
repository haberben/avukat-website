/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          dark: '#1F0408',
          DEFAULT: '#4A0E17',
          light: '#6B121F',
          muted: '#35080E',
        },
        silver: {
          dark: '#9BA0A8',
          DEFAULT: '#D1D5DB',
          light: '#E5E7EB',
          bright: '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
