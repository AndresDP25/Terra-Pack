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
      className="container flex flex-col md:flex-row justify-center items-center max-w-[1080px]">
        <div className="w-[50%] flex flex-col gap-3 xl:items-center">
          <div>
            <Image src="/footer/logo-footer.png" width={154} height={81} alt="" />
          </div>
          <div className="flex gap-2 ml-7">
            <Link href="#" target="blanck">
              <Image src="/footer/twitter.png" width={18} height={18} alt="" />
            </Link>
            <Link href="#" target="blanck">
              <Image src="/footer/ig.png" width={18} height={18} alt="" />
            </Link>
            <Link href="#" target="blanck">
              <Image src="/footer/YouTube.png" width={18} height={18} alt="" />
            </Link>
            <Link href="#" target="blanck">
              <Image src="/footer/linkedin.png" width={18} height={18} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex w-[50%] gap-[100px] lg:gap-[218px] justify-center md:justify-normal mt-10 md:mt-0">
          <div className="flex flex-col gap-[35px]">
            <h3 className="font-semibold text-[22px]">Explore</h3>
            <ul className="flex flex-col gap-[12px]">
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[35px]">
          <h3 className="font-semibold text-[22px]">Resources</h3>
            <ul className="flex flex-col gap-[12px]">
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
              <li>Xxxxxxx</li>
            </ul>
          </div>
          
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
