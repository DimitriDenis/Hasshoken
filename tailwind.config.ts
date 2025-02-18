// File: /hasshoken/tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'combat-primary': '#FF4500',
        'combat-secondary': '#1E90FF',
        'combat-background': '#F4F4F4',
      },
      fontFamily: {
        'manga': ['Oswald', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      animation: {
        'technique-pulse': 'pulse 1.5s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config