import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

const images = [
    '/backgrounds/7-Lagos.jpg', 
  '/backgrounds/Glaciares-1.png',
  '/backgrounds/Glaciares-2.jpg',
  '/backgrounds/Peninsula-Valdes-1.png', 
  '/backgrounds/Peninsula-Valdes-2.jpg', 
  '/backgrounds/Valle-de-Gondwana.png', 
  '/backgrounds/Villa-La-Angostura.png', 
  '/backgrounds/Volcan-Lanin.jpg', 
];

const Cuidado = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='flex flex-col bg-center bg-no-repeat bg-cover pt-[35px] lg:pt-[35px] xl:pt-[100px] pb-[50px] lg:pb-[50px] xl:lg:pb-[100px]'
      style={{ backgroundImage: `url(${images[currentImage]})`, transition: 'background-image 1s ease-in-out' }}
    >
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.1 }}
        className='container flex items-center text-white max-w-[1080px] xl:max-w-[1400px]'
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
