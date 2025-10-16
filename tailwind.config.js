/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'heading': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Professional Palette
        'slate-blue': '#6A8DAD',
        'steel-gray': '#555F6A',
        'white-smoke': '#F4F6F8',
        'soft-navy': '#394867',
        'sandstone-beige': '#E9E4DA',
        'royal-blue': '#3A7CA5',
        'moss-green': '#6AA984',
        'muted-gold': '#C9B458',
        // Legacy colors for compatibility
        primary: '#394867', // Using soft-navy as primary
        accent: '#3A7CA5',  // Using royal-blue as accent
        'accent-dark': '#6A8DAD', // Using slate-blue as accent-dark
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}