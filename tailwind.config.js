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
      padding: {
        DEFAULT: "30px", 
        sm: "30px",       
        md: "20px",       
        lg: "20px",       
        xl: "20px",       
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
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
        lago: 'url(/backgrounds/7-Lagos.jpg)',
        glaciares: 'url(/backgrounds/Glaciares-1.png)',
        glaciares2: 'url(/backgrounds/Glaciares-2.jpg)',
        peninsula: 'url(/backgrounds/Peninsula-Valdes-1.png)',
        peninsula2: 'url(/backgrounds/Peninsula-Valdes-2.jpg)',
        valle: 'url(/backgrounds/Valle-de-Gondwana.png)',
        villa: 'url(/backgrounds/Villa-La-Angostura.png)',
        volcan: 'url(/backgrounds/Volcan-Lanin.jpg)',
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
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}