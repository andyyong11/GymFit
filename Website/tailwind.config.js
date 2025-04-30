/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo
        secondary: "#10B981", // Emerald
        dark: "#1F2937",
        light: "#F9FAFB",
        accent: "#F43F5E", // Rose
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
        'about-pattern': "url('/src/assets/images/about-bg.jpg')",
      }
    },
  },
  plugins: [],
} 