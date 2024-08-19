"use client";
import Image from "next/image";
import Card_comp from "./Card_comp_combos";
import Slider from "./SliderCombos";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Combos = ({ handleSelectionsChangeC }) => {
  
  return (
    <section className="bg-combos pt-[28px] md:pt-[30px] pb-[45px] xl:px-40" id="combos">
      <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}}
       className="container flex flex-col gap-[20px] lg:gap-[10px] xl:gap-[30px]">
        {/* Img Combos mobile */}
        <div className="lg:hidden flex justify-center items-center">
          <Image src="/combos/combos.png" width={400} height={95} alt="" />
        </div>
        {/* Img Combos lg */}
        <div className="hidden lg:flex flex-col justify-center xl:hidden gap-4 pt-8 pb-10">
          <div className="flex justify-center">
            <Image src="/combos/combos_lg.png" width={650} height={300} alt="" />
          </div>
        </div>
        {/* Img Combos xl */}
        <div className="hidden xl:flex flex-col justify-center gap-6 pt-6 pb-6">
          <div className="flex justify-center">
            <Image src="/combos/combos_lg.png" width={650} height={300} alt="" />
          </div>
          {/* <div className="flex justify-center">
            <Image src="/combos/combos_lg.png" width={500} height={40} alt="" />
          </div> */}
        </div>
        {/* Cards md */}
        <div className="hidden md:flex justify-center mt-14 mb-5 gap-10">
          <Card_comp megas='30 mb + tv' img='/combos/30mb_tv.png'  handleSelectionsChangeC={handleSelectionsChangeC} />
          <Card_comp megas='50 mb + tv' img='/combos/50mb_tv.png'  handleSelectionsChangeC={handleSelectionsChangeC} />
          <Card_comp megas='100 mb + tv' img='/combos/100mb_tv.png'  handleSelectionsChangeC={handleSelectionsChangeC} />
          <Card_comp megas='200 mb + tv' img='/combos/200mb_tv.png'  handleSelectionsChangeC={handleSelectionsChangeC} />
        </div>
      </motion.div>
      {/* Cards mobile */}
      <div className="md:hidden justify-between mt-8 mb-5 gap-14">
        <Slider />
      </div>
    </section>
  );
};

export default Combos;
