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
      fontFamily: {
        sans: ['var(--font-open-sans)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
