import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Slider from './Slider';

const Productos = () => {
  return (
        <div className='bg-productos flex flex-col bg-top bg-no-repeat bg-cover pt-[148px] md:pt-[180px] lg:pt-[580px] pb-[343px] md:pb-[650px] lg:pb-[57px]' id="productos">
            <div className='container flex flex-col justify-center items-center text-white gap-[45px]'>
                <Slider />
                <Link href='https://drive.google.com/file/d/1_vGgRQ4WtwYfyuIbL5cfyUPELlCQw7fs/view?usp=sharing' target="blanck">
                    <button className='rounded-xl border border-[#C4C4C4] drop-shadow-lg gap-8 justify-center text-[22px] leading-[26px] lg:text-[22px] lg:leading-[29px] xl:text-[33px] xl:leading-[39px] bg-white text-black font-montserrat font-normal py-2 w-[210px] lg:w-[290px] xl:w-[220px] flex items-center hover:scale-105 transition duration-300 ease-in-out mt-[15px]'>
                        <Image src="/hero/whatsapp.png" width={36} height={33} alt="" />
                        Contactanos
                    </button>
                </Link>
            </div>
        </div>
  )
}

export default Productos