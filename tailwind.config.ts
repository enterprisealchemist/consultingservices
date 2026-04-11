import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0F',
        'bg-secondary': '#12121A',
        'bg-surface': '#1A1A26',
        'text-primary': '#F5F5F7',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',
        'accent-gold': '#E6C068',
        'accent-gold-hover': '#D4A84E',
        'accent-cool': '#3B82F6',
        'border-subtle': '#1F1F2E',
        'gold-light': '#F0D68A',
        'gold-dim': '#B8963E',
        'warm-800': '#1E1D24',
        'warm-700': '#26252E',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
