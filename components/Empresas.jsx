"use client";
import Image from "next/image";
import Card_comp from "./Card_comp_internet";
import Slider from "./SliderEmpresas";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Empresas = ({ handleContratarClickE }) => {
  return (
    <section className="bg-herosm lg:bg-combosCard bg-center bg-no-repeat 
    bg-cover pt-[28px] md:pt-[50px] pb-[28px] md:pb-[90px] xl:px-40" id="empresas">
      <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}}
       className="container flex flex-col gap-[20px] lg:gap-[10px]">
        {/* Img Empresas mobile */}
        <div className="lg:hidden flex justify-center items-center">
          <Image src="/empresas/empresas.png" width={450} height={95} alt="" />
        </div>
        {/* Img Empresas lg */}
        <div className="hidden lg:flex flex-col justify-center xl:hidden gap-4">
          <div className="flex justify-center">
            <Image src="/empresas/empresas_lg.png" width={750} height={300} alt="" />
          </div>
          <div className="flex justify-center">
            <Image src="/empresas/empresa.png" width={500} height={40} alt="" />
          </div>
        </div>
        {/* Img Combos xl */}
        <div className="hidden xl:flex flex-col justify-center gap-6 pt-6 pb-6">
          <div className="flex justify-center">
            <Image src="/empresas/empresas_lg.png" width={750} height={300} alt="" />
          </div>
          <div className="flex justify-center">
            <Image src="/empresas/empresa.png" width={500} height={40} alt="" />
          </div>
        </div>
        {/* Cards md */}
        <div className="hidden md:flex justify-center mt-14 mb-5 gap-14 md:gap-7 lg:gap-14">
          <Card_comp megas='300 mb' img='/empresas/300mb.png' colortext='text-white' colorbg='bg-botons' onClick={() => handleContratarClickE('300mb')} />
          <Card_comp megas='500 mb' img='/empresas/500mb.png' colortext='text-white' colorbg='bg-botons' onClick={() => handleContratarClickE('500mb')} />
          <Card_comp megas='1 gb' img='/empresas/1gb.png' colortext='text-white' colorbg='bg-botons' onClick={() => handleContratarClickE('1GB')} />
        </div>
      </motion.div>
      {/* Cards mobile */}
      <div className="md:hidden justify-between mt-8 mb-5 gap-14">
        <Slider />
      </div>
    </section>
  );
};

export default Empresas;
