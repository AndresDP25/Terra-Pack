"use client";
import Image from "next/image";
import Card_form from "./Card_form";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants"

const Contacto = ({ internetPlan, televisionPlan, empresaPlan, televisionPlanPropio, comboPlanPropio }) => {

  return (
    <section className="bg-text pt-[34px] lg:pt-[66px] pb-[57px] xl:px-40" id="contacto">
      <motion.div 
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: true, amount: 0.1}}
      className="container flex flex-col gap-[20px] lg:gap-[10px] xl:gap-[30px]">
        {/* Img contacto */}
        <div className="lg:hidden flex justify-center items-center">
          <Image src="/contacto/contacto.png" width={450} height={95} alt="" />
        </div>
        {/* Img Combos lg */}
        <div className="hidden lg:flex flex-col justify-center xl:hidden gap-4">
          <div className="flex justify-center">
            <Image src="/contacto/contacto_lg.png" width={770} height={300} alt="" />
          </div>
          <div className="flex justify-center">
            <Image src="/contacto/completa.png" width={500} height={40} alt="" />
          </div>
        </div>
        {/* Img Combos xl */}
        <div className="hidden xl:flex flex-col justify-center gap-6 pt-6 pb-4">
          <div className="flex justify-center">
            <Image src="/contacto/contacto_lg.png" width={770} height={300} alt="" />
          </div>
          <div className="flex justify-center">
            <Image src="/contacto/completa.png" width={500} height={40} alt="" />
          </div>
        </div>
        {/* Cards md */}
        <div className="flex justify-center mt-12 gap-14 md:gap-7">
          <Card_form internetPlan={internetPlan} televisionPlan={televisionPlan} empresaPlan={empresaPlan} televisionPlanPropio={televisionPlanPropio} comboPlanPropio={comboPlanPropio} />
        </div>
      </motion.div>
    </section>
  );
};

export default Contacto;
