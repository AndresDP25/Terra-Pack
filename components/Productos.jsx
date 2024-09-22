import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Slider from './Slider';
import SliderM from './SliderM';
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"
import SliderT from './SliderT';

const Productos = () => {
  return (
        <div className='bg-productos flex flex-col bg-top bg-no-repeat bg-cover pt-[50px] pb-[60px]' id="productos">
            <motion.div 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.1}}
            className='container flex flex-col justify-center items-center text-white gap-0 md:gap-6'>
                <Image src="/productos/productos.png" width={500} height={350} alt=""  className='block xl:hidden'/>
                <Image src="/productos/productos.png" width={500} height={350} alt="" className='hidden xl:block'/>
                <h3 className='text-[#00996E] text-[40px] leading-[46px] mt-[-20px] mb-12 text-center lg:text-left'>NUESTROS PRODUCTOS</h3>
                <div className='hidden lg:block'>
                    <Slider />
                </div>
                <div className='hidden md:block lg:hidden'>
                    <SliderT />
                </div>
                <div className='block md:hidden'>
                    <SliderM />
                </div>
                <Link href='#' target="blanck">
                    <button className='rounded-xl border border-[#C4C4C4] drop-shadow-lg gap-10 justify-center text-[16px] leading-[26px] lg:text-[16px] lg:leading-[29px] xl:text-[27px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-3 md:py-1 px-5 pr-16 flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[40px]'>
                        <Image src="/hero/whatsapp.png" width={40} height={36} alt="" />
                        Contactanos
                    </button>
                </Link>
            </motion.div>
        </div>
  )
}

export default Productos