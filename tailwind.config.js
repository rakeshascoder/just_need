/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { boxShadow: {
      'custom': '0px 4px 20px 0px #0000001A',
  },},
  },
  plugins: [],
}