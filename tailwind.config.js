/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        serif: ['Century Gothic', 'serif'],
      },

      spacing: {
        '5/8': '62.5%',
        '1/8': '12.5%',
      },

      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/6': '16.6666667%',
        '1/3': '33.3333333%',
        '1/2': '50%',
        '3/6': '50%',
        '4/6': '66.6666667%',
        '5/6': '83.3333333%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
      },

      fontWeight: {
        'thin': '100',
        'hairline': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'extra-bold': '800',
        'black': '900',
      },

      maxHeight: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '256': '64rem',
      },

      fontSize: {
        'half': '1.8rem',
        '2.5xl': '1.75rem',
        '4xl': '2.8rem',
        '5xl': '3.5rem',
      },
    },
  },
  plugins: [],
}

