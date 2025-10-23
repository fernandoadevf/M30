/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          dark: '#000000',
          light: '#ECEDEE',
          gold: '#FF6B35',
          orange: '#FF4500',
          pink: '#FF1493',
        },
        gradient: {
          from: '#FF6B35',
          to: '#FF1493',
          vibrant: 'from-orange-500 to-pink-500',
          sunset: 'from-orange-400 via-pink-500 to-rose-600',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'pulse-urgent': 'pulseUrgent 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 20, 147, 0.6)' },
        },
        pulseUrgent: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.6), 0 0 40px rgba(255, 107, 53, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 20, 147, 0.8), 0 0 60px rgba(255, 20, 147, 0.5)',
            transform: 'scale(1.02)'
          },
        }
      }
    },
  },
  plugins: [],
}
