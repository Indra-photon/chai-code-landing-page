/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'navy': '#0F172A',
        'navy-light': '#1E293B',
        'amber': '#F59E0B',
        'blue-accent': '#3B82F6',
        'slate-700': '#334155',
        'slate-800': '#1E293B',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
        'cyan-300': '#67E8F9',
        'cyan-500': '#06B6D4',
        'success': '#10B981',
        'error': '#EF4444',
        'warning': '#F59E0B',
        'info': '#60A5FA',
      },
      borderColor: {
        'subtle': 'rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'rotate': 'rotate 10s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 5px #06B6D4, 0 0 10px #06B6D4' },
          '100%': { 'text-shadow': '0 0 10px #06B6D4, 0 0 20px #06B6D4, 0 0 30px #06B6D4' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
      },
    },
  },
  plugins: [],
}