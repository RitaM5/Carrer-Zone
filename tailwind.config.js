/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'route1': "url('/images/route1-header-bg.jpg')",
        'route2': "url('/images/route2-header-bg.jpg')",
        'route3': "url('/images/route3-header-bg.jpg')"
      }
    },
  },
  plugins: [],
}

