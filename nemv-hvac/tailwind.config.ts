import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        'on-primary': '#FFFFFF',
        secondary: '#334155',
        accent: '#0369A1',
        background: '#F8FAFC',
        foreground: '#020617',
        muted: '#E8ECF1',
        border: '#E2E8F0',
        destructive: '#DC2626',
        ring: '#0F172A',
      },
      borderColor: {
        DEFAULT: '#E2E8F0',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4xs': '0.25rem',
        '3xs': '0.5rem',
        '2xs': '0.75rem',
        'xs': '1rem',
        'sm': '1.5rem',
        'md': '2rem',
        'lg': '2.5rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
