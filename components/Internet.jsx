"use client";
import Image from "next/image";
import Card_comp from "./Card_comp_internet";
import Slider from "./SliderInternet";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Internet = ({ handleContratarClickI }) => {
  return (
    <section className="bg-text pt-[28px] md:pt-[30px] pb-[28px] xl:pb-[110px] xl:px-40" id="internet">
      <motion.div
       variants={fadeIn('up', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: true, amount: 0.1}}
       className="container flex flex-col gap-[20px] lg:gap-[10px] xl:gap-[30px]">
        {/* Img Internet mobile */}
        <div className="lg:hidden flex justify-center items-center">
          <Image src="/internet/internet.png" width={450} height={95} alt="" />
        </div>
        {/* Img Internet lg */}
        <div className="hidden lg:flex flex-col justify-center xl:hidden gap-4">
          <div className="hidden lg:flex justify-center xl:hidden">
            <Image src="/internet/internet_lg.png" width={700} height={300} alt="" />
          </div>
          <div className="hidden lg:flex justify-center xl:hidden">
            <Image src="/internet/fibra_internet.png" width={500} height={40} alt="" />
          </div>
        </div>
        {/* Img Internet xl */}
        <div className="hidden xl:flex flex-col justify-center gap-6 pt-6 pb-6">
          <div className="flex justify-center">
            <Image src="/internet/internet_lg.png" width={700} height={300} alt="" />
          </div>
          <div className="flex justify-center">
            <Image src="/internet/fibra_internet.png" width={500} height={40} alt="" />
          </div>
        </div>
        {/* Cards md */}
        <div className="hidden md:flex justify-center mt-14 mb-5 md:gap-7 lg:gap-14">
          <Card_comp megas='30 mb' img='/internet/30mbps.png' onClick={() => handleContratarClickI('30mb')} />
          <Card_comp megas='50 mb' img='/internet/50mbps.png' onClick={() => handleContratarClickI('50mb')} />
          <Card_comp megas='100 mb' img='/internet/100mbps.png' onClick={() => handleContratarClickI('100mb')} />
          <Card_comp megas='200 mb' img='/internet/200mbps.png' onClick={() => handleContratarClickI('200mb')} />
        </div>
      </motion.div>
      {/* Cards mobile */}
      <div className="md:hidden justify-between mt-8 mb-5 gap-14">
        <Slider />
      </div>
    </section>
  );
};

export default Internet;
