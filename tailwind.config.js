/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cactus: {
          olive: {
            light: '#5F7530',
            DEFAULT: '#4A5D23',
            dark: '#38461A',
            deep: '#283313',
          },
          sand: {
            light: '#FCFBF8',
            DEFAULT: '#F9F6F0',
            dark: '#EFEAE1',
          },
          charcoal: {
            DEFAULT: '#141414',
            light: '#222222',
            card: '#1A1A1A'
          },
          gold: '#C5A880',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        editorial: '.3em',
        ultra: '.4em',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
