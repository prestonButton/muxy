export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0e',
        fg: '#d4d4d8',
        muted: 'rgba(212,212,216,0.65)',
        border: 'rgba(212,212,216,0.12)',
        accent: '#6366f1',
        cyan: '#22d3ee',
        pink: '#ec4899',
        violet: '#a78bfa',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'monospace'],
      },
      backgroundImage: {
        'muxy-gradient': 'linear-gradient(135deg,#22d3ee,#6366f1)',
        'muxy-full':
          'linear-gradient(135deg,#22d3ee 0%,#6366f1 40%,#ec4899 70%,#a78bfa 100%)',
      },
    },
  },
  plugins: [],
};
