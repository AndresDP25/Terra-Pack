"use client";
import Image from "next/image";
import Card_comp from "./Card_comp_television";
import Slider from "./SliderTelevision";
import CardPropioPlan from "./CardPropioPlan";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"
import { IoMdEye } from "react-icons/io";
import Link from "next/link";


const Television = ({ handleContratarClickT, handleSelectionsChange }) => {
  return (
    <section className="bg-television bg-center lg:bg-bottom bg-no-repeat bg-cover pt-[28px] md:pt-[50px] pb-[80px] lg:pb-[180px] xl:px-40" id="television">
      <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}}
       className="container flex flex-col gap-[20px] lg:gap-[10px] xl:gap-[30px]">
        {/* Img Television mobile */}
        <div className="lg:hidden flex justify-center items-center">
          <Image src="/television/television.png" width={450} height={95} alt="" />
        </div>
        {/* Img Television lg */}
        <div className="hidden lg:flex flex-col justify-center xl:hidden gap-4">
          <div className="hidden lg:flex justify-center xl:hidden">
            <Image src="/television/television_lg.png" width={780} height={300} alt="" />
          </div>
          <div className="hidden lg:flex justify-center xl:hidden">
            <Image src="/television/familia_television.png" width={500} height={40} alt="" />
          </div>
        </div>
        {/* Img Television xl */}
        <div className="hidden xl:flex flex-col justify-center gap-6 pt-6 pb-6">
          <div className="flex justify-center">
            <Image src="/television/television_lg.png" width={780} height={300} alt="" />
          </div>
          <div className="flex justify-center">
            <Image src="/television/familia_television.png" width={500} height={40} alt="" />
          </div>
        </div>
        {/* Cards md */}
        <div className="hidden md:flex flex-col mt-14 mb-5 gap-14 md:gap-20 items-center">
          <div className="flex gap-12">
            <Card_comp megas='Plan 1' img='/television/plan1.png' onClick={() => handleContratarClickT('plan1')} />
            <Card_comp megas='Plan 2' img='/television/plan2.png' onClick={() => handleContratarClickT('plan2')} />
          </div>
          <div className="flex gap-12">
            <Card_comp megas='Plan 3' img='/television/plan3.png' onClick={() => handleContratarClickT('plan3')} />
            <Card_comp megas='Plan 4' img='/television/plan4.png' onClick={() => handleContratarClickT('plan4')} />
          </div>
        </div>
      </motion.div>
      {/* Cards mobile */}
      <div className="md:hidden justify-between mt-8 mb-5 gap-14">
        <Slider />
      </div>
      <div className="container flex justify-center mt-11 mb-6">
        <CardPropioPlan handleSelectionsChange={handleSelectionsChange} />
      </div>
      <Link href="/canales">
        <div className="flex items-center justify-center gap-3 mt-[3rem] lg:mt-[4rem] mb-20">
          <IoMdEye className="text-[2rem] lg:text-[3rem]" style={{ color: "#E6DCFF", marginLeft: "10px" }} />
          <div className="text-combosCard text-[21px] lg:text-[30px] font-bold">Ver grilla de canales</div>
        </div>
      </Link>
    </section>
  );
};

export default Television;
