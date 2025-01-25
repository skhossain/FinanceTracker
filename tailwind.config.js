/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          50: '#EBEAFD',
          100: '#D7D5FB',
          200: '#AFABF7',
          300: '#8781F3',
          400: '#5F57EF',
          500: '#4F46E5', // Main primary color
          600: '#3F38B8',
          700: '#2F2A8A',
          800: '#1F1C5C',
          900: '#0F0E2E',
        },
        secondary: {
          DEFAULT: '#9333EA',
          50: '#F3E8FC',
          100: '#E7D1F9',
          200: '#CFA3F3',
          300: '#B775ED',
          400: '#9F47E7',
          500: '#9333EA', // Main secondary color
          600: '#7629BB',
          700: '#581F8C',
          800: '#3B145E',
          900: '#1D0A2F',
        },
        accent: {
          DEFAULT: '#FACC15',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FACC15', // Main accent color
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },
        background: {
          DEFAULT: '#F9FAFB',
          dark: '#111827',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 12px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        'dashboard': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      height: {
        'screen-90': '90vh',
      },
      minHeight: {
        'card': '120px',
      },
      maxWidth: {
        'modal': '32rem',
      },
      zIndex: {
        'modal': '1000',
        'overlay': '900',
        'dropdown': '800',
        'header': '700',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
