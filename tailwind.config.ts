import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#eae2d1',
        ivory: '#f7f3ed',
        linen: '#e6dfd5',
        stone: '#d8d1c7',
        clay: '#bf8c73',
        taupe: '#b1a09b',
        olive: '#9fa48a',
        charcoal: '#1b1a19',
        bronze: '#8e7059',
        ember: '#c17a4d',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(26, 22, 18, 0.12)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 1px 1px, rgba(72,65,57,0.08) 1px, transparent 0)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
