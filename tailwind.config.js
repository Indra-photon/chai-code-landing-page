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
       
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
      
        'success': '#10B981',
        'error': '#EF4444',
        'warning': '#F59E0B',
        'info': '#60A5FA',
      },
      borderColor: {
        'subtle': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}