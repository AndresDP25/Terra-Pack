"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-[30px] pb-[30px] xl:px-40" id="footer">
      <motion.div 
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}} 
      className="container flex flex-col md:flex-row justify-between items-center max-w-[1080px] xl:max-w-[1400px]">
        <div className="w-[50%] flex flex-col gap-3 xl:items-center">
            <Image src="/footer/logo-footer.png" width={203} height={133} alt="" />
        </div>
        <div className="flex flex-col gap-[30px] md:gap-[30px] justify-center md:justify-normal mt-10 md:mt-0 md:text-end md:w-[405px] font-lato">
          <p className="text-[16px]">
            Félix San Martín 684 — Junín de los Andes Neuquén, Argentina
          </p>
          <p className="text-[16px]">
            +54 9 11 6930-8406 para mensajes. 
            (Llamadas sólo arreglando horarios previamente)
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
