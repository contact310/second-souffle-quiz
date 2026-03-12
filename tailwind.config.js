/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E63946',
        'bg-main': '#0F0F0F',
        'bg-card': '#1A1A1A',
        'text-main': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'border-subtle': '#2A2A2A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
