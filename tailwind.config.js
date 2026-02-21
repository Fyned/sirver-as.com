/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sirver: {
          primary: '#1B5E20',    // Daha derin, orman yeşili (Eskisi: #2E7D32)
          secondary: '#111827',  // Tam siyah değil, çok koyu antrasit (Premium his)
          accent: '#FF6F00',     // Turuncu aynı kalabilir (Enerji için iyi)
          surface: '#FFFFFF',    // Kartların zemini
          light: '#F3F4F6',      // Açık gri detaylar
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Okunurluğu yüksek modern font
        heading: ['Oswald', 'sans-serif'], // Güçlü başlıklar
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow': '0 0 20px rgba(27, 94, 32, 0.3)',
        'glow-lg': '0 0 40px rgba(27, 94, 32, 0.4)',
        'glow-accent': '0 0 20px rgba(255, 111, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(27, 94, 32, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(27, 94, 32, 0.5)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}