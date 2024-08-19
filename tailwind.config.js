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
      padding: "30px",
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
      botons: {DEFAULT: '#8944DF', hover: '#6A2FB6'},
      grey: '#888888',
      outline: 'f1f1f1',
      pink: '#ffa5a5',
      combos: '#8744DD',
      combosCard:'#E6DCFF',
      fcel: '#8844DE'
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        hero: 'url(/hero/bg.png)',
        television: 'url(/television/bg.png)',
        empresas: 'url(/empresas/bg.png)',
        cel: 'url(/cel/bg.png)',
        celMobile: 'url(/cel/bg-mobile.png)',
        general: 'url(/canales/01_general.png)',
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