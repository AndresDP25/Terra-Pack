import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

// Clases de Tailwind para los fondos
const backgroundClasses = [
  'bg-lago', 
  'bg-glaciares',
  'bg-glaciares2',
  'bg-peninsula',
  'bg-peninsula2',
  'bg-valle',
  'bg-villa',
  'bg-volcan',
];

const Cuidado = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) => (prevBackground + 1) % backgroundClasses.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden relative">
      <motion.div
        className={`absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out ${backgroundClasses[currentBackground]}`}
        initial={{ x: '100%' }} // Comienza desde la derecha
        animate={{ x: '0%' }} // Se mueve a la posición original
        exit={{ x: '-100%' }} // Sale hacia la izquierda
        transition={{ duration: 1 }} // Duración de la transición
      />
      <motion.div
        className={`absolute inset-0 bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out ${backgroundClasses[(currentBackground + 1) % backgroundClasses.length]}`}
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 1 }}
      />
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.1 }}
        className='container flex items-center text-white max-w-[1080px] xl:max-w-[1400px] relative z-10' // Agregamos un z-index para que el texto esté encima del fondo
      >
        <div className='flex flex-col gap-[40px] xl:gap-[70px]'>
          <h1 className='font-semibold text-[#FED058] text-[45px] lg:text-[45px] xl:text-[66px]'>
            Cuidando nuestros paisajes
          </h1>
          <div className='w-auto md:w-[600px] flex flex-col gap-[28px] xl:gap-[60px]'>
            <h2 className='font-lato text-[24px] font-normal text-white leading-[30px]'>
              Como habitantes de la Patagonia estamos en contacto constante con las maravillas visuales y sensoriales que nos ofrece la región.
            </h2>
            <p className='font-lato font-normal text-white'>
              Semejante privilegio viene acompañado por la responsabilidad de cuidar los mares, bosques, montañas, glaciares, ríos y lagos.
            </p>
            <p className='font-lato font-normal text-white'>
              Apoyando iniciativas de reciclado, compostaje u optando por usar productos ecológicos estás ayudando a preservar nuestros recursos naturales y destinos turísticos.
            </p>
            <Link href='#' target="blanck">
              <button className='rounded-xl border border-[#C4C4C4] drop-shadow-lg gap-2 justify-center text-[17px] leading-[26px] lg:text-[17px] lg:leading-[29px] xl:text-[27px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-3 md:py-1 px-5 flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px]'>
                <Image src="/hero/whatsapp.png" width={30} height={30} alt="" />
                Chateá con nosotros
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cuidado;
