"use client";

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Hero = () => {
  const [isInternetActive, setIsInternetActive] = useState(false);
  const [isEmpresasActive, setIsEmpresasActive] = useState(false);
  const [isContactoActive, setIsContactoActive] = useState(false);

  

  useEffect(() => {

    const handleScroll = () => {
      const internetSection = document.getElementById('internet');
      const contactoSection = document.getElementById('contacto');
      const empresasSection = document.getElementById('empresas');
  
      if (internetSection) {
        const { top, bottom } = internetSection.getBoundingClientRect();
        setIsInternetActive(top <= window.innerHeight * 0.5 && bottom > window.innerHeight * 0.5);
      }

      if (empresasSection) {
        const { top, bottom } = empresasSection.getBoundingClientRect();
        setIsEmpresasActive(top <= window.innerHeight * 0.5 && bottom > window.innerHeight * 0.5);
      }
  
      if (contactoSection) {
        const { top, bottom } = contactoSection.getBoundingClientRect();
        setIsContactoActive(top <= window.innerHeight * 0.5 && bottom > window.innerHeight * 0.5);
      }

    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="flex flex-col bg-hero bg-top bg-no-repeat 
      bg-cover pt-[148px] md:pt-[180px] lg:pt-[170px] pb-[343px] md:pb-[650px] 
      lg:pb-[121px]" id="nosotros"
    >
      <div className='container flex flex-col text-white gap-[45px]'>
        <h1 className='drop-shadow-lg mb-[25px]'>Por un futuro sustentable</h1>
        <h2 className='w-[601px] drop-shadow-lg font-lato text-[32px] font-bold'>
            Somos la primera empresa patagónica en comercializar envases compostables y en promover el consumo práctico y responsable.
        </h2>
        <h2 className='drop-shadow-lg font-lato text-[32px] font-bold'>¡Sumate a la economía del futuro!</h2>
        <Link href='https://drive.google.com/file/d/1_vGgRQ4WtwYfyuIbL5cfyUPELlCQw7fs/view?usp=sharing' target="blanck">
          <button className='rounded-xl drop-shadow-lg gap-3 justify-center text-[22px] leading-[26px] lg:text-[22px] lg:leading-[29px] xl:text-[33px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-2 w-[210px] lg:w-[210px] xl:w-[220px] flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px]'>
            <Image src="/hero/whatsapp.png" width={36} height={33} alt="" />
            Contacto
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
