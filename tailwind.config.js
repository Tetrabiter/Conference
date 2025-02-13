/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'pc-bg': "url('src/assets/images/background-desktop.png')",
      'mobile-bg': "url('src/assets/images/background-mobile.png')",
      'tablet-bg': "url('src/assets/images/background-tablet.png')",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'neutral-0' : 'hsl(0, 0%, 100%)',
      'neutral-300' : 'hsl(252, 6%, 83%)',
      'neutral-500' : 'hsl(245, 15%, 58%)',
      'neutral-700' : 'hsl(245, 19%, 35%)',
      'neutral-900' : 'hsl(248, 70%, 10%)',
      'orange-500' : 'hsl(7, 88%, 67%)',
      'orange-700' : 'hsl(7, 71%, 60%)',
      'gradient-text' : 'bg-gradient-to-r from-orange-500 to neutral-0',
    },
  },
  plugins: [],
}