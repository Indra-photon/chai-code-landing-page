/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0F172A',
        'navy-light': '#1E293B',
        'amber': '#F59E0B',
        'blue-accent': '#3B82F6',
      },
    },
  },
  plugins: [],
}

