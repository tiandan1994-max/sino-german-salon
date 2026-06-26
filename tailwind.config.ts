import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#E8EEF7',
          100: '#C5D3E8',
          200: '#9FB8D9',
          300: '#7A9DCA',
          400: '#5580BA',
          500: '#2D5F9E',
          600: '#1B4A88',
          700: '#0D3370',
          800: '#0A2255',
          900: '#060E1F',
          950: '#030711',
        },
        gold: {
          300: '#F0D48A',
          400: '#E5C060',
          500: '#C8972A',
          600: '#A87920',
          700: '#8A6018',
        },
        brand: '#0D2E5E',
      },
      fontFamily: {
        sans: [
          'Inter',
          '"Noto Sans SC"',
          'PingFang SC',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #060E1F 0%, #0D2E5E 50%, #0A2255 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'shimmer':    'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%':       { opacity: '1' },
        },
      },
      boxShadow: {
        'card':   '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14)',
        'gold':   '0 4px 20px rgba(200,151,42,0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config
