import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

const Hero = () => {

  return (
    <section
      className="flex flex-col bg-hero bg-top bg-no-repeat bg-cover pt-[170px] lg:pt-[170px] h-screen" id="nosotros"
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.1}}
        className='container flex flex-col text-white gap-[60px] md:gap-[24px] lg:gap-[40px] xl:gap-[55px] max-w-[1080px] xl:max-w-[1400px]'
      >
        <h1 className='drop-shadow-lg mb-[21px]'>Por un futuro sustentable</h1>
        <h2 className='w-[280px] md:w-[601px] xl:w-[900px] drop-shadow-lg font-lato font-bold'>
            Somos la primera empresa patagónica en comercializar envases compostables y en promover el consumo práctico y responsable.
        </h2>
        <h2 className='drop-shadow-lg font-lato font-bold'>¡Sumate a la economía del futuro!</h2>

        {/* Enlace de WhatsApp */}
        <Link href='https://wa.me/5491169308406' target="_blank">
          <button className='rounded-xl drop-shadow-lg gap-3 justify-center text-[16px] leading-[26px] lg:text-[16px] lg:leading-[29px] xl:text-[27px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-3 md:py-1 px-[23px] flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px]'>
            <Image src="/hero/whatsapp.png" width={36} height={33} alt="WhatsApp" />
            Contacto
          </button>
        </Link>

      </motion.div>
    </section>
  );
};

export default Hero;
