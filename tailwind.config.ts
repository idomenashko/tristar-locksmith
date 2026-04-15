import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A5C',
          light: '#2a5480',
          dark: '#122840',
        },
        gold: {
          DEFAULT: '#D4A03C',
          light: '#e8bc6a',
          dark: '#b8842a',
        },
        forest: {
          DEFAULT: '#2E7D4F',
          light: '#3d9e66',
          dark: '#1f5e38',
        },
        warm: {
          white: '#F5F5F0',
        },
      },
      fontFamily: {
        headline: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
