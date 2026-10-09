/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Inter', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        iith: {
          orange: '#f15a22',
          orangeHover: '#d94814',
          blue: '#1e3a8a',
          blueDark: '#172554',
          gold: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}
