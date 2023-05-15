/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        myGray: {
          900: '#121214',
          800: '#202024',
          300: '#c4c4cc',
          100: '#e1e1e6',
        },
        myGreen: {
          500: '#00875f',
          300: '#00b37e',
        },
      },
      fontSize: {
        '3xxl': '2rem',
      },
    },
  },
  plugins: [],
}
