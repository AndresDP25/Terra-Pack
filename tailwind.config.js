/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1740px',
      xxl: '2500px',

    },
    colors: {
      body: '#00CA9C',
      green: '#00CA9C',
      white: '#fff',
      black: '#000',
      herosm: '#7C30D7',
      violet: '#9556E7',
      text: '#E7DDFF',
      grey: '#888888',
      outline: 'f1f1f1',
      pink: '#ffa5a5',
      yellow: '#FAFF00',
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        mitr: ['var(--font-mitr)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      backgroundImage: {
        hero: 'url(/hero/bg.png)',
        productos: 'url(/productos/bg.png)',
        carbono: 'url(/carbono/bg.png)',
        cuidado: 'url(/cuidado/bg.png)',
        sumate: 'url(/sumate/bg.png)',
      },
      boxShadow: {
        primary: '40px 4px 40px 0px rgba(68, 68, 0.25)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}