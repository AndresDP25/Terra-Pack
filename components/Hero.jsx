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
      lg:pb-[230px] h-screen" id="home"
    >
      {/* Iconos sociales */}
      <div className="hidden lg:block fixed right-14 z-50 pt-20" >
        {/* Iconos sociales claros */}
        <div
         className={`flex flex-col gap-[20px] justify-center ${isInternetActive || isEmpresasActive || isContactoActive ? 'lg:hidden' : ''} `}>
          <Link href="#" target="blanck">
            <Image src="/hero/instagram.png" width={37} height={37} alt="" />
          </Link>
          <Link href="#" target="blanck">
            <Image src="/hero/linkedin.png" width={37} height={37} alt="" />
          </Link>
          <Link href="#">
            <Image src="/hero/mail.png" width={37} height={37} alt="" target="blanck"/>
          </Link>
        </div>
        {/* Iconos sociales oscuros */}
        <div className={`flex flex-col gap-[20px] justify-center ${!isInternetActive &&  !isEmpresasActive && !isContactoActive ? 'lg:hidden' : ''}`}>
          <Link href="#" target="blanck">
            <Image src="/nav/ig_mobile.svg" width={37} height={37} alt="" />
          </Link>
          <Link href="#" target="blanck">
            <Image src="/nav/linkedin_mobile.svg" width={37} height={37} alt="" />
          </Link>
          <Link href="#" target="blanck">
            <Image src="/nav/mail_mobile.svg" width={37} height={37} alt="" />
          </Link>
        </div>
      </div>
      <div className='container flex flex-col text-white gap-10'>
        <h1>Por un futuro sustentable</h1>
        <h2 className='w-[780px]'>
            Somos la primera empresa patagónica en comercializar envases compostables y en promover el consumo práctico y responsable.
        </h2>
        <h2>¡Sumate a la economía del futuro!</h2>
      </div>
    </section>
  );
};

export default Hero;
