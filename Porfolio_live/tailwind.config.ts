import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080C08',
        screen: '#0A0F0A',
        neon: {
          green: '#39FF14',
          cyan: '#00FFFF',
          yellow: '#FFE600',
          red: '#FF3131',
        },
        terminal: '#1A2E1A',
        pixel: '#2A3D2A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'monospace'],
        body: ['var(--font-body)', 'monospace'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'scanline': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
        'grid-game': 'linear-gradient(rgba(57,255,20,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.04) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(57,255,20,0.12), transparent 70%)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(57,255,20,0.5), 0 0 40px rgba(57,255,20,0.2)',
        'neon-cyan': '0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.2)',
        'neon-sm': '0 0 8px rgba(57,255,20,0.4)',
        'pixel': '4px 4px 0px rgba(57,255,20,0.6)',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        flicker: {
          '0%,19%,21%,23%,25%,54%,56%,100%': { opacity: '1' },
          '20%,24%,55%': { opacity: '0.6' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        flicker: 'flicker 4s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
