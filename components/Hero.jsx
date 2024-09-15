"use client";

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Hero = () => {

  return (
    <section
      className="flex flex-col bg-hero bg-top bg-no-repeat bg-cover pt-[170px] lg:pt-[134px] pb-[121px] lg:pb-[90px] h-screen" id="nosotros"
    >
      <div className='container flex flex-col text-white gap-[60px] md:gap-[24px] xl:gap-[55px]'>
        <h1 className='drop-shadow-lg mb-[25px]'>Por un futuro sustentable</h1>
        <h2 className='w-[280px] md:w-[601px] xl:w-[900px] drop-shadow-lg font-lato font-bold'>
            Somos la primera empresa patagónica en comercializar envases compostables y en promover el consumo práctico y responsable.
        </h2>
        <h2 className='drop-shadow-lg font-lato font-bold'>¡Sumate a la economía del futuro!</h2>
        <Link href='#' target="blanck">
          <button className='rounded-xl drop-shadow-lg gap-2 justify-center text-[22px] leading-[26px] lg:text-[20px] lg:leading-[29px] xl:text-[33px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-1 px-6 flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px]'>
            <Image src="/hero/whatsapp.png" width={30} height={30} alt="" />
            Contacto
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
