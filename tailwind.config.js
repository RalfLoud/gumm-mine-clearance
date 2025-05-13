/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#89f901',
        dark: '#0F1115',
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        fadeInUp: "fadeInUp 0.4s ease-out",
        'spin-slow': 'spin 3s linear infinite',
        'spin-slower': 'spin 4s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          "0%": {opacity: 0, transform: "translateY(10px)"},
          "100%": {opacity: 1, transform: "translateY(0)"},
        },
        pulseRing: {
          '0%, 100%': {transform: 'scale(1)', opacity: '1'},
          '50%': {transform: 'scale(1.05)', opacity: '0.6'},
        },
      }
    },
    
    safelist: [
      'from-gray-700/10',
      'to-gray-900/10',
      'from-gray-800/10',
      'to-gray-600/10',
    ]
  },
  plugins: [],
}