import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#F6EFE7',
          100: '#F3E9DF',
          200: '#E9DCCB',
          300: '#E1D2BF',
          400: '#D6C4AE',
          500: '#C7B398'
        },
        brass: {
          400: '#B39470',
          500: '#A7835D',
          600: '#8C6C4B'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
export default config
