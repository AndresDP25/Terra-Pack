"use client";
import Image from "next/image";
import Card_comp from "./Card_comp_television";
import Slider from "./SliderTelevision";
import CardPropioPlan from "./CardPropioPlan";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"
import { IoMdEye } from "react-icons/io";


const Television = () => {
  return (
    <section className="bg-celMobile lg:bg-cel bg-center lg:bg-bottom bg-no-repeat bg-cover pt-[40px] md:pt-[60px] pb-[40px] lg:pb-[40px] xl:px-40" id="cel">
      <motion.div
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}}
       className="container flex items-center justify-center gap-2">
        {/* Img Television mobile */}
        <div className="lg:hidden flex justify-center items-center">
          <Image src="/cel/cel-mobile.png" width={184} height={370} alt="" className="max-w-none" />
        </div>
        {/* Img cel lg */}
        <div className="hidden lg:flex flex-col justify-center gap-4">
          <div className="hidden lg:flex justify-center">
            <Image src="/cel/cel.png" width={306} height={651} alt="" className="max-w-none" />
          </div>
        </div>
        <div className="bg-white flex flex-col p-[10px] lg:p-[30px] gap-2 lg:gap-3 w-[149px] h-[auto] lg:w-[350px] lg:h-[230px] xl:w-[400px] xl:h-[260px] rounded-xl">
          <h2 className="text-[10px] leading-[17px] lg:text-[20px] lg:leading-[30px] xl:text-[24px] xl:leading-[40px] text-fcel">Descargá la App para IOS o Android y disfrutá del contenido en TV, tablets, smartphones, PC, y más! *</h2>
          <p className="text-[8px] leading-[9px] lg:text-[16px] lg:leading-[24px] text-fcel">* Hasta 3 dispositivos en simultáneo</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Television;
